import React, { useState } from "react";
import {
  Download,
  FileDown,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  HardDriveDownload,
  Sparkles,
  FileSpreadsheet,
  FileText,
  CheckSquare
} from "lucide-react";
import { arquivos, bonusList, BonusItem } from "./config/conteudo";
import { handleDownload } from "./utils/downloadHelper";

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-radial from-[#F1F5F9] via-[#E2E8F0]/70 to-[#CBD5E1]/60 text-slate-900 flex flex-col justify-start relative overflow-x-hidden selection:bg-[#0F284E] selection:text-amber-300">
      
      {/* Luz ambiente decorativa de fundo (efeito de profundidade moderno) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[360px] bg-gradient-to-b from-blue-400/15 via-indigo-300/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Toast flutuante com feedback visual refinado */}
      {toastMessage && (
        <div
          role="status"
          className="fixed bottom-6 right-6 z-50 bg-[#0B1A30] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-amber-500/30 flex items-center gap-3 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="text-sm font-semibold tracking-wide">{toastMessage}</span>
        </div>
      )}

      {/* 1. CABEÇALHO */}
      <header className="pt-10 sm:pt-14 pb-8 px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Badge Superior Dourado / Azul */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-300/80 shadow-xs backdrop-blur-sm mb-4 transition-transform hover:scale-105 duration-200">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-bold tracking-widest text-[#0B1A30] uppercase">
              Área de Membros
            </span>
          </div>

          {/* Título Principal de Alto Impacto */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1A30] tracking-tight leading-[1.15] text-balance">
            +100 Projetos Profissionais de Bretes para Gado
          </h1>

          {/* Subtítulo Clean */}
          <p className="text-base sm:text-lg text-slate-600 mt-3 font-medium max-w-xl text-balance">
            Acesse abaixo seu material e os bônus disponíveis.
          </p>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 flex-1 w-full space-y-10 relative z-10">

        {/* 2. PRODUTO PRINCIPAL (Card Hero com Efeito Premium de Profundidade) */}
        <section className="space-y-4">
          <div className="flex items-center justify-center gap-2.5 text-center pb-1">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#0B1A30] uppercase tracking-wider">
              SEU MATERIAL PRINCIPAL
            </h2>
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
          </div>

          <div className="relative group">
            {/* Brilho dourado/azul sutil sob o card */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 via-blue-600/30 to-amber-500/20 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-500 group-hover:blur-lg" />

            <div className="relative bg-gradient-to-br from-[#0B1A30] via-[#0E223F] to-[#071324] rounded-3xl p-7 sm:p-10 border border-amber-500/25 shadow-2xl overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8">
              
              {/* Efeito de textura geométrica suave de fundo */}
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-radial from-blue-500/10 to-transparent rounded-full pointer-events-none" />

              {/* Informações do Produto */}
              <div className="space-y-3 max-w-xl">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
                  +100 Projetos Profissionais de Bretes para Gado
                </h3>
              </div>

              {/* Botão de Destaque Máximo */}
              <div className="shrink-0 w-full md:w-auto">
                <button
                  type="button"
                  onClick={() =>
                    handleDownload(
                      "produtoPrincipal",
                      "+100 Projetos Profissionais de Bretes para Gado",
                      showNotification
                    )
                  }
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-base sm:text-lg px-8 py-5 rounded-2xl shadow-xl shadow-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/35 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 cursor-pointer group/btn"
                >
                  <Download className="w-5 h-5 text-slate-950 group-hover/btn:translate-y-0.5 transition-transform" />
                  <span className="tracking-wide">BAIXAR MATERIAL COMPLETO</span>
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* 3. BÔNUS (3 Cards Elegantes com Efeitos de Hover) */}
        <section className="space-y-4 pt-2">
          <div className="flex items-center justify-center gap-2.5 text-center pb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#0B1A30] uppercase tracking-wider">
              SEUS BÔNUS EXCLUSIVOS
            </h2>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {bonusList.map((bonus: BonusItem, index: number) => {
              const isExcel = bonus.id === "planilhaCustos";

              return (
                <div
                  key={bonus.id}
                  className="group relative bg-white/90 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-300/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between overflow-hidden"
                >
                  {/* Linha de destaque no topo do card */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 transition-colors duration-300 ${
                      index === 0
                        ? "bg-gradient-to-r from-emerald-500 to-teal-400"
                        : index === 1
                        ? "bg-gradient-to-r from-blue-600 to-indigo-500"
                        : "bg-gradient-to-r from-amber-500 to-orange-400"
                    }`}
                  />

                  {/* Topo do Card: Ícone e Tag */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black tracking-wider uppercase text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/80">
                        {bonus.tag}
                      </span>

                      {/* Ícone Estilizado */}
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ${
                          isExcel
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : bonus.id === "checklistConstrucao"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-blue-50 text-blue-700 border border-blue-200"
                        }`}
                      >
                        {isExcel ? (
                          <FileSpreadsheet className="w-5 h-5" />
                        ) : bonus.id === "checklistConstrucao" ? (
                          <CheckSquare className="w-5 h-5" />
                        ) : (
                          <FileText className="w-5 h-5" />
                        )}
                      </div>
                    </div>

                    {/* Título do Bônus */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1A30] leading-snug tracking-tight">
                      {bonus.titulo}
                    </h3>
                  </div>

                  {/* Botão de Ação */}
                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() =>
                        handleDownload(
                          bonus.id,
                          bonus.titulo,
                          showNotification
                        )
                      }
                      className={`w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-extrabold text-sm transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md active:translate-y-0 ${
                        isExcel
                          ? "bg-[#0F4A38] hover:bg-[#0B392B] text-emerald-100 hover:text-white"
                          : "bg-[#0B1A30] hover:bg-[#152B4D] text-white"
                      }`}
                    >
                      {isExcel ? (
                        <ExternalLink className="w-4 h-4 text-emerald-300" />
                      ) : (
                        <FileDown className="w-4 h-4 text-amber-400" />
                      )}
                      <span className="tracking-wide">{bonus.botaoTexto}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. AVISO SIMPLES COM ESTILO MODERNO */}
        <section className="pt-2">
          <div className="bg-white/80 border border-slate-300/90 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 text-slate-700 shadow-xs backdrop-blur-xs">
            <div className="w-9 h-9 rounded-xl bg-blue-100/80 border border-blue-200 flex items-center justify-center shrink-0">
              <HardDriveDownload className="w-5 h-5 text-[#0B1A30]" />
            </div>
            <p className="text-sm font-semibold text-slate-800 leading-snug">
              Salve os arquivos no seu celular ou computador para consultar sempre que precisar.
            </p>
          </div>
        </section>

      </main>

    </div>
  );
}
