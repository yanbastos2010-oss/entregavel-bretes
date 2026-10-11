/**
 * CONFIGURAÇÃO CENTRAL DE ARQUIVOS
 * 
 * Para substituir os links de download, basta alterar as variáveis abaixo:
 */

// LINKS DOS ARQUIVOS PARA DOWNLOAD
export const arquivos = {
  produtoPrincipal: "COLE_AQUI_O_LINK",   // Link do produto principal (+100 Projetos)
  planilhaCustos: "https://drive.google.com/drive/folders/1ZmCuH591pRNn_GiZfdyBEsyzovuG8szB?usp=sharing", // Link do Google Drive da Planilha de Custos
  guiaMateriais: "COLE_AQUI_O_LINK",      // Link do Guia de Materiais (PDF)
  checklistConstrucao: "COLE_AQUI_O_LINK" // Link do Checklist de Construção (PDF)
};

// LISTA DOS BÔNUS (SEM IMAGENS)
export interface BonusItem {
  id: "planilhaCustos" | "guiaMateriais" | "checklistConstrucao";
  tag: string;
  titulo: string;
  botaoTexto: string;
}

export const bonusList: BonusItem[] = [
  {
    id: "planilhaCustos",
    tag: "BÔNUS 01",
    titulo: "Planilha de Custos da Construção",
    botaoTexto: "ACESSAR PLANILHA"
  },
  {
    id: "guiaMateriais",
    tag: "BÔNUS 02",
    titulo: "Guia Completo de Materiais para Construção",
    botaoTexto: "BAIXAR GUIA"
  },
  {
    id: "checklistConstrucao",
    tag: "BÔNUS 03",
    titulo: "Checklist Completo da Construção",
    botaoTexto: "BAIXAR CHECKLIST"
  }
];
