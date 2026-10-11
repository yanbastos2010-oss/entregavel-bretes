import { jsPDF } from "jspdf";
import { arquivos } from "../config/conteudo";

/**
 * Dispara o download de um arquivo.
 * Se o link for uma URL (http/https), abre/redireciona para o link.
 * Se ainda for o placeholder, gera e baixa o documento correspondente.
 */
export function handleDownload(
  chave: keyof typeof arquivos,
  titulo: string,
  onNotification?: (msg: string) => void
) {
  const link = arquivos[chave]?.trim();

  // Para a Planilha de Custos: NÃO BAIXA NADA, abre diretamente o link do Google Drive
  if (chave === "planilhaCustos") {
    const driveLink = arquivos.planilhaCustos?.trim();
    if (driveLink && driveLink !== "COLE_AQUI_O_LINK") {
      window.open(driveLink, "_blank", "noopener,noreferrer");
      if (onNotification) onNotification("Abrindo Planilha de Custos no Google Drive");
    }
    return;
  }

  // Se o link já foi configurado pelo usuário para outro arquivo
  if (link && link !== "COLE_AQUI_O_LINK" && link !== "") {
    if (link.startsWith("http://") || link.startsWith("https://")) {
      window.open(link, "_blank", "noopener,noreferrer");
      if (onNotification) {
        onNotification(`Abrindo: ${titulo}`);
      }
      return;
    } else {
      const a = document.createElement("a");
      a.href = link;
      a.download = `${titulo.replace(/\s+/g, "_")}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      if (onNotification) {
        onNotification(`Baixando: ${titulo}`);
      }
      return;
    }
  }

  if (chave === "checklistConstrucao") {
    gerarChecklistPDF();
    if (onNotification) onNotification("Baixando: Checklist Completo");
    return;
  }

  if (chave === "guiaMateriais") {
    gerarGuiaMateriaisPDF();
    if (onNotification) onNotification("Baixando: Guia de Materiais");
    return;
  }

  // Produto principal
  gerarProdutoPrincipalPDF();
  if (onNotification) onNotification("Baixando: +100 Projetos Profissionais de Bretes");
}

export function baixarTxtLinkPlanilha() {
  const link = arquivos.planilhaCustos?.trim();
  const conteudoTxt = `${link}\n`;
  const blob = new Blob([conteudoTxt], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Link_Planilha_de_Custos.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function gerarChecklistPDF() {
  const doc = new jsPDF();
  doc.setFillColor(15, 40, 78);
  doc.rect(0, 0, 210, 30, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("CHECKLIST COMPLETO DA CONSTRUÇÃO", 14, 18);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("+100 Projetos Profissionais de Bretes para Gado | Bônus", 14, 25);

  let y = 45;
  doc.setTextColor(30, 41, 59);
  doc.setFontSize(10);

  const itens = [
    "[  ] 1. Terreno plano, firme e com caimento para água",
    "[  ] 2. Alinhamento e prumo dos mourões principais (enterrio mínimo de 80 cm)",
    "[  ] 3. Concreto na base dos mourões com tempo adequado de cura",
    "[  ] 4. Instalação das tábuas com a face lisa para o lado dos animais",
    "[  ] 5. Parafusos passantes sem pontas salientes para o corredor",
    "[  ] 6. Altura e largura corretas do corredor para evitar retorno do animal",
    "[  ] 7. Portões com abertura leve e trincos operáveis com uma só mão",
    "[  ] 8. Tronco de contenção firme e regulável",
    "[  ] 9. Piso antiderrapante (ranhurado ou ripado)",
    "[  ] 10. Pintura e acabamento com proteção anticorrosiva",
    "[  ] 11. Revisão geral: sem farpas, pontas ou pregos expostos"
  ];

  itens.forEach((it) => {
    doc.text(it, 14, y);
    y += 8;
  });

  doc.save("Checklist_Completo_da_Construcao.pdf");
}

function gerarGuiaMateriaisPDF() {
  const doc = new jsPDF();
  doc.setFillColor(15, 40, 78);
  doc.rect(0, 0, 210, 30, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("GUIA COMPLETO DE MATERIAIS PARA CONSTRUÇÃO", 14, 18);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("Edição 2026 | Bônus Exclusivo", 14, 25);

  let y = 45;
  doc.setTextColor(30, 41, 59);

  const temas = [
    {
      tit: "Mourões",
      desc: "Eucalipto tratado em autoclave (diâmetro de 15 a 20 cm para mourões principais, 12 a 15 cm para intermediários). Enterrio mínimo de 1/3 do comprimento."
    },
    {
      tit: "Tábuas e Travessas",
      desc: "Madeira tratada com 2,5 a 5,0 cm de espessura. Instalar sempre a face lisa voltada para o interior do brete para não machucar os animais."
    },
    {
      tit: "Tubos e Metalon",
      desc: "Aço industrial e metalon com pintura anticorrosiva. Pontas sempre vedadas para evitar água e ferrugem interna."
    },
    {
      tit: "Portões e Ferragens",
      desc: "Dobradiças reforçadas e trincos operáveis com uma mão pelo lado de fora. Travas que fecham por gravidade ou mola."
    },
    {
      tit: "Fundação e Piso",
      desc: "Concreto no traço 1:3:4. Piso com acabamento vassourado ou ranhurado com leve caimento para escoar líquidos."
    }
  ];

  temas.forEach((t) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(t.tit, 14, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    const split = doc.splitTextToSize(t.desc, 180);
    doc.text(split, 14, y);
    y += split.length * 5 + 6;
  });

  doc.save("Guia_Completo_de_Materiais.pdf");
}

function gerarProdutoPrincipalPDF() {
  const doc = new jsPDF();
  doc.setFillColor(15, 40, 78);
  doc.rect(0, 0, 210, 32, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("+100 PROJETOS PROFISSIONAIS DE BRETES PARA GADO", 14, 18);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Material Completo | Prontos para Construir", 14, 26);

  let y = 50;
  doc.setTextColor(30, 41, 59);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Conteúdo dos Projetos:", 14, y);
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  const texto = doc.splitTextToSize(
    "Este material reúne mais de 100 projetos completos com plantas baixas, cotas em metros, listas detalhadas de materiais (mourões, tábuas, ferragens, troncos e portões) e estimativas de custo de obra.",
    180
  );
  doc.text(texto, 14, y);

  doc.save("100_Projetos_Profissionais_Bretes_Para_Gado.pdf");
}
