import { useState, useEffect, useCallback } from 'react';

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides: Slide[] = [
    {
      id: 1,
      title: "GESTÃO DE PESSOAL - EDUCAÇÃO",
      subtitle: "ATS, Sexta Parte, Faltas e Licenças",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Manual do Gestor Escolar
          </h1>
          <p className="text-2xl text-blue-200 mb-3">
            Secretaria da Educação - Estado de São Paulo
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 mb-8 inline-block">
            <p className="text-sm text-cyan-300">
              <strong className="text-white">Público:</strong> QM (PEB II e Diretores) e QAE — Efetivos e ACT-F
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-white font-bold">ATS</div>
              <div className="text-sm text-gray-300">Adicional por Tempo</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-white font-bold">Sexta Parte</div>
              <div className="text-sm text-gray-300">20 Anos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl mb-2">🏥</div>
              <div className="text-white font-bold">Licenças</div>
              <div className="text-sm text-gray-300">Saúde</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl mb-2">⚖️</div>
              <div className="text-white font-bold">Faltas</div>
              <div className="text-sm text-gray-300">Inassiduidade</div>
            </div>
          </div>
          <p className="text-gray-400 mt-12 text-sm">
            Use as setas ← → do teclado para navegar
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "",
      subtitle: "",
      content: (
        <div className="max-w-6xl mx-auto">
          {/* Slide de Apresentação Institucional */}
          <div className="bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            
            {/* Badge do Plano de Ação */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600/30 via-orange-600/30 to-amber-600/30 border border-amber-500/50 rounded-full px-6 py-3 shadow-lg">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-amber-300 text-xs font-medium">PLANO DE AÇÃO URE</p>
                  <p className="text-white text-sm font-bold">2º SEMESTRE DE 2026</p>
                </div>
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Header Institucional */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-blue-400 text-sm font-medium tracking-wider">SECRETARIA DA EDUCAÇÃO</p>
                  <p className="text-white text-lg font-bold">Estado de São Paulo</p>
                  <p className="text-cyan-400 text-xs font-medium">Unidade Regional de Ensino de Araraquara</p>
                </div>
              </div>
            </div>

            {/* Título Principal */}
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mb-4">
                ORIENTAÇÃO TÉCNICA
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-blue-500"></div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  REPLICABILIDADE
                </h3>
                <div className="h-px w-24 bg-gradient-to-r from-blue-500 to-transparent"></div>
              </div>
            </div>

            {/* Subtítulo com Tópicos */}
            <div className="bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 rounded-2xl p-6 mb-10 border border-blue-500/30">
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                  <span className="text-xl md:text-2xl font-bold text-blue-300">ATS</span>
                </div>
                <span className="text-gray-500 text-2xl">•</span>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></span>
                  <span className="text-xl md:text-2xl font-bold text-cyan-300">SEXTA-PARTE</span>
                </div>
                <span className="text-gray-500 text-2xl">•</span>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></span>
                  <span className="text-xl md:text-2xl font-bold text-purple-300">FALTAS</span>
                </div>
                <span className="text-gray-500 text-2xl">•</span>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-xl md:text-2xl font-bold text-green-300">LICENÇAS</span>
                </div>
              </div>
            </div>

            {/* Identificação */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="text-white font-bold">Origem</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Seção de Pessoas<br/>
                  <span className="text-blue-400 font-medium">Unidade Regional de Ensino de Araraquara</span>
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-bold">Realização</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Orientação Técnica<br/>
                  <span className="text-cyan-400 font-medium">23 de Setembro de 2026</span>
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h4 className="text-white font-bold">Destino</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Replicação na<br/>
                  <span className="text-purple-400 font-medium">Unidade Escolar</span>
                </p>
              </div>
            </div>

            {/* Frase de Destaque */}
            <div className="bg-gradient-to-r from-blue-600/30 via-cyan-600/30 to-blue-600/30 rounded-2xl p-8 border border-blue-500/30 mb-10">
              <div className="flex items-start gap-4">
                <span className="text-5xl text-blue-400 font-serif leading-none">"</span>
                <p className="text-xl md:text-2xl text-white font-light italic leading-relaxed">
                  Da orientação à prática: compartilhando conhecimentos para fortalecer os procedimentos de Gestão de Pessoas.
                </p>
                <span className="text-5xl text-blue-400 font-serif leading-none">"</span>
              </div>
            </div>

            {/* Objetivo e Público-Alvo */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-bold text-lg">Objetivo</h4>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Apresentar visualmente a proposta da <strong className="text-green-400">replicabilidade</strong>, deixando claro que o conteúdo tem origem na 
                  <strong className="text-blue-400"> Orientação Técnica da Seção de Pessoas da URE de Araraquara</strong> e será compartilhado no âmbito da 
                  <strong className="text-purple-400"> unidade escolar</strong>.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl p-6 border border-amber-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h4 className="text-amber-400 font-bold text-lg">Plano de Ação URE</h4>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Esta Orientação Técnica e sua aplicabilidade nas unidades escolares fazem parte do 
                  <strong className="text-amber-400"> Plano de Ação da URE para o 2º Semestre de 2026</strong>, 
                  reforçando o compromisso com a <strong className="text-green-400">qualidade dos procedimentos de Gestão de Pessoas</strong> em toda a rede.
                </p>
              </div>
            </div>

            {/* Público-Alvo */}
            <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-blue-400 font-bold text-lg">Público-Alvo da Formação</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h5 className="text-blue-300 font-bold mb-2 text-sm">👨‍🏫 Quadro do Magistério (QM)</h5>
                  <ul className="space-y-1 text-gray-300 text-xs">
                    <li>• <strong className="text-white">Professores PEB II</strong> (Ensino Fundamental e Médio)</li>
                    <li>• <strong className="text-white">Diretores de Escola</strong></li>
                    <li>• <strong className="text-cyan-400">Efetivos e ACT-F</strong></li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h5 className="text-purple-300 font-bold mb-2 text-sm">📋 Quadro de Apoio Escolar (QAE)</h5>
                  <ul className="space-y-1 text-gray-300 text-xs">
                    <li>• <strong className="text-white">Agentes de Serviços Escolares</strong></li>
                    <li>• <strong className="text-white">Agentes de Organização Escolar</strong></li>
                    <li>• <strong className="text-white">Secretários de Escola</strong></li>
                    <li>• <strong className="text-cyan-400">Efetivos e ACT-F</strong></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-300 text-xs text-center">
                  <strong className="text-white">⚠️ Atenção:</strong> Os assuntos abordados referem-se especificamente aos servidores <strong className="text-green-400">efetivos e ACT-F</strong> do QM (PEB II e Diretores) e QAE.
                </p>
              </div>
            </div>

          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "⚠️ Nova Carreira - Quem NÃO tem ATS e Sexta Parte",
      subtitle: "LC 1.374/2022 - Professores de EF e Médio",
      content: (
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-red-600/30 to-orange-600/30 backdrop-blur-sm rounded-2xl p-8 mb-6 border-2 border-red-500/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-4xl">
                🚫
              </div>
              <div>
                <h3 className="text-3xl font-bold text-red-400">Nova Carreira Docente</h3>
                <p className="text-gray-300">LC 1.374/2022 - Regime de Subsídio</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* QUEM NÃO TEM */}
            <div className="bg-red-500/20 border-2 border-red-500/50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                <span className="text-3xl">❌</span> NÃO Têm Direito
              </h4>
              <div className="space-y-4">
                <div className="bg-red-500/30 rounded-xl p-6">
                  <h5 className="text-lg font-bold text-red-300 mb-3">Professores de EF e Médio</h5>
                  <p className="text-gray-300 text-sm mb-3">
                    Efetivos que optaram pela <strong className="text-red-400">Nova Carreira (LC 1.374/2022)</strong>
                  </p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• <strong className="text-white">SEM ATS</strong> (Adicional por Tempo de Serviço)</li>
                    <li>• <strong className="text-white">SEM Sexta Parte</strong> (20 anos)</li>
                    <li>• <strong className="text-white">SEM Quinquênio</strong></li>
                  </ul>
                </div>
                <div className="bg-red-500/30 rounded-xl p-6">
                  <h5 className="text-lg font-bold text-red-300 mb-3">Ingressantes a partir de 2022</h5>
                  <p className="text-gray-300 text-sm">
                    Professores nomeados após junho/2022 são <strong className="text-red-400">automaticamente</strong> enquadrados na Nova Carreira
                  </p>
                </div>
              </div>
            </div>

            {/* QUEM TEM */}
            <div className="bg-green-500/20 border-2 border-green-500/50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                <span className="text-3xl">✅</span> TÊM Direito
              </h4>
              <div className="space-y-4">
                <div className="bg-green-500/30 rounded-xl p-6">
                  <h5 className="text-lg font-bold text-green-300 mb-3">Professores Efetivos - Carreira Antiga</h5>
                  <p className="text-gray-300 text-sm mb-3">
                    Efetivos que <strong className="text-green-400">NÃO optaram</strong> pela Nova Carreira
                  </p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• <strong className="text-white">Com ATS</strong> (até 40%)</li>
                    <li>• <strong className="text-white">Com Sexta Parte</strong> (após 20 anos)</li>
                    <li>• <strong className="text-white">Com Quinquênios</strong></li>
                  </ul>
                </div>
                <div className="bg-green-500/30 rounded-xl p-6">
                  <h5 className="text-lg font-bold text-green-300 mb-3">Professor de Educação Básica</h5>
                  <p className="text-gray-300 text-sm">
                    PEB I e PEB II da carreira antiga (LC 444/85) mantêm as vantagens
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-500/20 border-2 border-amber-500/50 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">⚠️</span>
              <div>
                <h4 className="text-lg font-bold text-amber-400 mb-2">Por que não têm?</h4>
                <p className="text-gray-300 text-sm mb-3">
                  O <strong className="text-amber-400">subsídio</strong> da Nova Carreira já absorveu as vantagens pecuniárias. 
                  Conforme EC 103/2019 (§ 9º do art. 38), o regime de subsídio <strong className="text-red-400">não permite</strong> adicionais por tempo de serviço.
                </p>
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">Opção é irretratável:</strong> Uma vez optando pela Nova Carreira, não há retorno.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📊</div>
              <div className="text-white font-bold mb-2">Subsídio</div>
              <div className="text-gray-400 text-sm">Valor único, sem adicionais</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📈</div>
              <div className="text-white font-bold mb-2">15 Referências</div>
              <div className="text-gray-400 text-sm">Evolução por desempenho</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔄</div>
              <div className="text-white font-bold mb-2">Irretratável</div>
              <div className="text-gray-400 text-sm">Opção definitiva</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Ausências - Consideradas vs Não Consideradas",
      content: (
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* NÃO CONSIDERADAS */}
            <div className="bg-red-500/20 border-2 border-red-500/50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                <span className="text-2xl">❌</span> NÃO Contam para ATS
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Faltas justificadas",
                  "Faltas injustificadas",
                  "Faltas médicas",
                  "Licença-saúde",
                  "Licença para tratamento de saúde de familiar",
                  "Licença COVID (cód.380)",
                  "Licença para tratar de interesse particular",
                  "Interrupção de Exercício",
                  "Penalidade de suspensão",
                  "Afastamento Eleitoral",
                ].map((item, index) => (
                  <div key={index} className="bg-red-500/20 rounded-lg p-2 text-sm text-gray-300">
                    • {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CONSIDERADAS */}
            <div className="bg-green-500/20 border-2 border-green-500/50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <span className="text-2xl">✅</span> Contam para ATS
              </h4>
              <div className="bg-green-500/30 rounded-xl p-6 mb-4">
                <p className="text-gray-200 mb-4">
                  <strong className="text-green-400">Artigo 80, Lei 10.261/68</strong>
                </p>
                <p className="text-gray-300 text-sm">
                  As ausências consideradas são aquelas previstas no Artigo 80 da Lei 10.261/68.
                  Estas ausências <strong className="text-green-400">NÃO interrompem</strong> a contagem do tempo para concessão do ATS.
                </p>
              </div>
              <div className="space-y-2">
                <div className="bg-white/10 rounded-lg p-3 text-sm text-gray-300">
                  ✓ Férias regulamentares
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-sm text-gray-300">
                  ✓ Exercício de cargo ou função de confiança
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-sm text-gray-300">
                  ✓ Licença-prêmio
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: "SEXTA PARTE - 20 Anos de Serviço",
      content: (
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-amber-600/30 to-orange-600/30 backdrop-blur-sm rounded-2xl p-8 mb-6 border-2 border-amber-500/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-4xl">
                🏆
              </div>
              <div>
                <h3 className="text-3xl font-bold text-amber-400">Concessão Especial</h3>
                <p className="text-gray-300">Após 20 anos de efetivo exercício</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">7300</div>
                <p className="text-gray-300 text-sm">dias de efetivo exercício</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">7301º</div>
                <p className="text-gray-300 text-sm">dia da concessão</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">20</div>
                <p className="text-gray-300 text-sm">anos completos</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">Servidores Beneficiados</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">👤</span>
                  <span className="text-gray-300">Servidores Extranumerários</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">✓</span>
                  <span className="text-gray-300">Servidores Efetivos</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-purple-300 mb-3">Lei 500/74</h4>
              <p className="text-gray-300">
                Servidores da Lei 500/74 adquiriram o direito a partir do 
                <strong className="text-white"> DNG de 22/11/2011</strong>
              </p>
            </div>
          </div>

          <div className="mt-6 bg-blue-500/20 border border-blue-500/30 rounded-xl p-4">
            <p className="text-gray-300 text-sm">
              <strong className="text-blue-400">Importante:</strong> A concessão é no dia seguinte em que o servidor preenche o requisito (7301 dias).
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "QM vs QAE - Diferenças entre Quadros",
      subtitle: "🏥 Contexto: FALTAS MÉDICAS",
      content: (
        <div className="max-w-6xl mx-auto">
          {/* Alerta de Contexto */}
          <div className="bg-gradient-to-r from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-2xl p-6 mb-8 border-2 border-green-500/50">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                🏥
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-2">📌 Contexto deste Slide</h3>
                <p className="text-gray-200">
                  As diferenças entre QM e QAE apresentadas aqui referem-se especificamente às 
                  <strong className="text-green-400"> FALTAS MÉDICAS</strong>, com foco na 
                  <strong className="text-yellow-400"> falta médica parcial</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* QM */}
            <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-500/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-3xl">
                  👨‍🏫
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">QM</h3>
                  <p className="text-gray-300">Quadro do Magistério</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Professores, Diretores de Escola, Supervisores, Dirigentes de Ensino</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span><strong className="text-blue-400">LC 1.374/2022</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Atividades de magistério e especialistas</span>
                </li>
              </ul>
            </div>

            {/* QAE */}
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-500/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-3xl">
                  📋
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">QAE</h3>
                  <p className="text-gray-300">Quadro de Apoio Escolar</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Agentes de Serviços, Agentes de Organização, Secretários de Escola</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span><strong className="text-purple-400">LC 1.041/2008</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Apoio operacional às atividades da escola</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-500/20 border-2 border-amber-500/50 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">⚠️</span>
              <div>
                <h4 className="text-lg font-bold text-amber-400 mb-2">Diferença Crítica - Faltas Médicas</h4>
                <p className="text-gray-300">
                  As regras para <strong className="text-amber-400">faltas médicas</strong> são diferentes entre QM e QAE, 
                  especialmente quanto à <strong className="text-yellow-400">falta médica parcial</strong>. 
                  Identifique corretamente o quadro do servidor para aplicar a legislação adequada!
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      title: "Falta Médica - Comparativo QM vs QAE",
      content: (
        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <th className="px-4 py-4 text-left text-white font-bold text-sm">Critério</th>
                  <th className="px-4 py-4 text-left text-blue-300 font-bold text-sm">QM - Magistério</th>
                  <th className="px-4 py-4 text-left text-purple-300 font-bold text-sm">QAE - Apoio</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { crit: "Legislação", qm: "LC 1.374/2022", qae: "LC 1.041/2008" },
                  { crit: "Falta Integral", qm: "6/ano, 1/mês", qae: "6/ano, 1/mês" },
                  { crit: "Falta Parcial", qm: "Até 2 horas", qae: "Até 3 horas" },
                  { crit: "Limite Parcial/Ano", qm: "3 vezes", qae: "Sem limite" },
                  { crit: "Limite Parcial/Mês", qm: "1 vez", qae: "Sem limite" },
                  { crit: "Jornada Mínima", qm: "40h semanais", qae: "40h semanais" },
                  { crit: "Comprovação", qm: "Declaração", qae: "Atestado" },
                  { crit: "Código BFE", qm: "275", qae: "275" },
                ].map((row, index) => (
                  <tr 
                    key={index}
                    className={`border-b border-white/10 ${index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}`}
                  >
                    <td className="px-4 py-3 text-gray-300 font-medium text-sm">{row.crit}</td>
                    <td className="px-4 py-3 text-blue-200 text-sm">{row.qm}</td>
                    <td className="px-4 py-3 text-purple-200 text-sm">{row.qae}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      title: "QM - Falta Médica Parcial",
      subtitle: "LC 1.374/2022 - Artigo 70",
      content: (
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-8 mb-6 border-2 border-blue-500/50">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-3xl">
                👨‍🏫
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-400">Quadro do Magistério</h3>
                <p className="text-gray-300">Falta Médica Parcial - Regras Específicas</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-blue-400 mb-2">⏱️ Duração</h4>
              <div className="text-3xl font-bold text-blue-300">Até 2 horas</div>
              <p className="text-gray-400 text-sm mt-2">Entrada após início, saída antes do término</p>
            </div>
            <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-cyan-400 mb-2">📅 Frequência</h4>
              <div className="text-3xl font-bold text-cyan-300">1x/mês</div>
              <p className="text-gray-400 text-sm mt-2">Máximo 3 vezes ao ano</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
            <h4 className="text-lg font-bold text-white mb-4">Requisitos Obrigatórios</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</span>
                <p className="text-gray-300 text-sm"><strong className="text-blue-400">Jornada de 40h semanais</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</span>
                <p className="text-gray-300 text-sm"><strong className="text-blue-400">Declaração de comparecimento</strong> no mesmo dia ou dia útil imediato</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</span>
                <p className="text-gray-300 text-sm"><strong className="text-blue-400">Comprovação do período</strong> de permanência</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</span>
                <p className="text-gray-300 text-sm"><strong className="text-blue-400">Comunicação prévia</strong> ao superior</p>
              </div>
            </div>
          </div>

          <div className="bg-red-500/20 border-2 border-red-500/50 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🚨</span>
              <div>
                <h4 className="text-lg font-bold text-red-400 mb-2">Penalidade</h4>
                <p className="text-gray-300 text-sm">
                  Se não comprovar o período: <strong className="text-red-400">perda total do vencimento do dia</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 9,
      title: "QAE - Falta Médica Parcial",
      subtitle: "LC 1.041/2008 - Artigo 1º",
      content: (
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 mb-6 border-2 border-purple-500/50">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-3xl">
                📋
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-400">Quadro de Apoio Escolar</h3>
                <p className="text-gray-300">Falta Médica Parcial - Regras Específicas</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-purple-400 mb-2">⏱️ Duração</h4>
              <div className="text-3xl font-bold text-purple-300">Até 3 horas</div>
              <p className="text-gray-400 text-sm mt-2">Diárias</p>
            </div>
            <div className="bg-pink-500/20 border border-pink-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-pink-400 mb-2">📅 Frequência</h4>
              <div className="text-3xl font-bold text-pink-300">Sem limite</div>
              <p className="text-gray-400 text-sm mt-2">Dentro das 6 faltas anuais</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
            <h4 className="text-lg font-bold text-white mb-4">Requisitos Obrigatórios</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</span>
                <p className="text-gray-300 text-sm"><strong className="text-purple-400">Jornada de 40h semanais</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</span>
                <p className="text-gray-300 text-sm"><strong className="text-purple-400">Atestado</strong> no mesmo dia ou dia útil imediato</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</span>
                <p className="text-gray-300 text-sm"><strong className="text-purple-400">Comprovação do período</strong> de permanência</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</span>
                <p className="text-gray-300 text-sm"><strong className="text-purple-400">Comunicação prévia</strong> ao superior</p>
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6">
            <h4 className="text-lg font-bold text-green-400 mb-3">Acompanhante</h4>
            <p className="text-gray-300 text-sm">
              Aplica-se para: <strong className="text-green-400">filhos menores, deficientes, cônjuge, pais, madrasta, padrasto ou curatelados</strong>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 10,
      title: "Faltas Justificadas - QM vs QAE",
      subtitle: "Diferenças Importantes entre Quadros",
      content: (
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* QM */}
            <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-500/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-3xl">
                  👨‍🏫
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">QM - Magistério</h3>
                  <p className="text-gray-300">LC 1.374/2022 - Artigo 67</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-500/30 rounded-xl p-4 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">24</div>
                  <p className="text-gray-300 text-sm">faltas por ano</p>
                </div>
                <div className="bg-cyan-500/30 rounded-xl p-4 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">2</div>
                  <p className="text-gray-300 text-sm"><strong className="text-white">Limite por mês</strong></p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-gray-300 text-sm">
                    <strong className="text-blue-400">12 faltas:</strong> Diretor (chefe imediato)
                  </p>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-blue-400">12 faltas:</strong> Dirigente Regional (mediato)
                  </p>
                </div>
              </div>
            </div>

            {/* QAE */}
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-500/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-3xl">
                  📋
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">QAE - Apoio</h3>
                  <p className="text-gray-300">Decreto 52.054/2007 - Artigo 10</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-500/30 rounded-xl p-4 text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">24</div>
                  <p className="text-gray-300 text-sm">faltas por ano</p>
                </div>
                <div className="bg-pink-500/30 rounded-xl p-4 text-center">
                  <div className="text-4xl font-bold text-pink-400 mb-2">SEM</div>
                  <p className="text-gray-300 text-sm"><strong className="text-white">Limite por mês</strong></p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-gray-300 text-sm">
                    <strong className="text-purple-400">12 faltas:</strong> Diretor (chefe imediato)
                  </p>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-purple-400">12 faltas:</strong> Dirigente Regional (mediato)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-500/20 border-2 border-amber-500/50 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">⚠️</span>
              <div>
                <h4 className="text-lg font-bold text-amber-400 mb-2">Diferença Crítica</h4>
                <p className="text-gray-300 text-sm mb-3">
                  <strong className="text-amber-400">QM tem limite de 2 faltas por mês</strong> (LC 1.374/2022).
                </p>
                <p className="text-gray-300 text-sm">
                  <strong className="text-purple-400">QAE NÃO tem limite mensal</strong> (Decreto 52.054/2007). 
                  O servidor QAE pode usar todas as 24 faltas em poucos meses, desde que respeite a divisão 
                  <strong className="text-white"> 12 (Diretor) + 12 (Dirigente Regional)</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-green-400 mb-3">✅ Ambos os Quadros</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 24 faltas justificadas por ano</li>
                <li>• 12 pelo chefe imediato (Diretor)</li>
                <li>• 12 pelo superior mediato (Dirigente)</li>
                <li>• Requerimento no 1º dia de comparecimento</li>
                <li>• Motivo razoável necessário</li>
                <li>• Com desconto salarial</li>
              </ul>
            </div>

            <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-red-400 mb-3">📊 Exemplo Prático</h4>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-white font-medium mb-1">QM - Professor:</p>
                  <p>Máximo <strong className="text-cyan-400">2 faltas/mês</strong>. Se faltar 3 vezes em janeiro, a 3ª será injustificada.</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-white font-medium mb-1">QAE - Agente:</p>
                  <p>Pode faltar <strong className="text-pink-400">todas as 24 vezes</strong> em poucos meses (sem limite mensal), respeitando 12+12.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 11,
      title: "Licença Saúde Sem Perícia",
      subtitle: "Decreto 69.234/2024 - Regras Principais",
      content: (
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-2xl p-8 mb-6 border-2 border-green-500/50">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-3xl">
                🏥
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-400">Licença Saúde Sem Perícia</h3>
                <p className="text-gray-300">Decreto 69.234/2024</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📅</div>
              <div className="text-2xl font-bold text-blue-400 mb-2">5 dias</div>
              <p className="text-gray-300 text-sm">Prazo do Atestado (corridos)</p>
            </div>
            <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📱</div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">1º dia útil</div>
              <p className="text-gray-300 text-sm">Envio no App SOU</p>
            </div>
            <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📊</div>
              <div className="text-2xl font-bold text-purple-400 mb-2">15 dias</div>
              <p className="text-gray-300 text-sm">Teto Anual Acumulado</p>
            </div>
            <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🏥</div>
              <div className="text-2xl font-bold text-green-400 mb-2">SUS/IAMSPE</div>
              <p className="text-gray-300 text-sm">Emissor Credenciado</p>
            </div>
          </div>

          <div className="bg-red-500/20 border-2 border-red-500/50 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🚫</span>
              <div>
                <h4 className="text-lg font-bold text-red-400 mb-2">Atestados Particulares</h4>
                <p className="text-gray-300 text-sm">
                  Atestados de médicos particulares <strong className="text-red-400">exigem perícia médica</strong>. 
                  Apenas SUS ou IAMSPE (CEAMA ou Clínicas conveniadas) são válidos para licença sem perícia.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 12,
      title: "Fluxo de Registro - Licença Saúde",
      subtitle: "Passo a Passo Completo",
      content: (
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Linha conectora */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full hidden md:block"></div>
            
            <div className="space-y-6">
              {/* Passo 1 */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 z-10">1</div>
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6 flex-1">
                  <h4 className="text-lg font-bold text-blue-400 mb-2">Servidor - Upload no SOU</h4>
                  <p className="text-gray-300 text-sm">Anexo do atestado no <strong className="text-blue-400">App SOU</strong> no prazo legal (até o 1º dia útil subsequente à emissão)</p>
                </div>
              </div>

              {/* Passo 2 */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 z-10">2</div>
                <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-xl p-6 flex-1">
                  <h4 className="text-lg font-bold text-cyan-400 mb-2">GOE - Acesso ao e-Sisla</h4>
                  <p className="text-gray-300 text-sm">Acessar menu <strong className="text-cyan-400">"Agendamento de Licença"</strong> para registrar a LS no sistema</p>
                </div>
              </div>

              {/* Passo 3 */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 z-10">3</div>
                <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-6 flex-1">
                  <h4 className="text-lg font-bold text-purple-400 mb-2">GOE - Dados e Quesitos</h4>
                  <p className="text-gray-300 text-sm">Digitar <strong className="text-purple-400">CPF e ID</strong> e responder aos quesitos do sistema</p>
                </div>
              </div>

              {/* Passo 4 */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 z-10">4</div>
                <div className="bg-pink-500/20 border border-pink-500/30 rounded-xl p-6 flex-1">
                  <h4 className="text-lg font-bold text-pink-400 mb-2">SEAPE - Envio via SEI</h4>
                  <p className="text-gray-300 text-sm">Encaminhar <strong className="text-pink-400">"Atestado Registrado"</strong> para publicação no SEI do SEAPE</p>
                </div>
              </div>

              {/* Passo 5 */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 z-10">5</div>
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 flex-1">
                  <h4 className="text-lg font-bold text-green-400 mb-2">Unidade Escolar - Cadastro SED</h4>
                  <p className="text-gray-300 text-sm mb-2">Caminho: <strong className="text-green-400">Recursos Humanos → Funcional → Licença</strong></p>
                  <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 mt-3">
                    <p className="text-red-300 text-xs">
                      <strong className="text-red-400">⚠️ Atenção:</strong> Se o servidor NÃO realizar upload no App SOU, a escola NÃO deve encaminhar expediente SEI. 
                      A ausência será considerada <strong className="text-red-400">FALTA</strong>, não Licença Saúde.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 13,
      title: "Licença Saúde Indeferida",
      subtitle: "Recurso Administrativo",
      content: (
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-red-600/30 to-orange-600/30 backdrop-blur-sm rounded-2xl p-8 mb-6 border-2 border-red-500/50">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-3xl">
                ⚖️
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-400">Licença Saúde Indeferida</h3>
                <p className="text-gray-300">Procedimento de Recurso Administrativo</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-500/20 border-2 border-amber-500/50 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">!</div>
              <div>
                <h4 className="text-xl font-bold text-amber-400">Prazo Fatal</h4>
                <p className="text-gray-300 text-sm">30 dias contados da publicação do indeferimento da reconsideração</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs">
              Fundamento: Art. 46 do Decreto nº 29.180/88 (red. Dec. 51.738/07)
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h4 className="text-xl font-bold text-white mb-6 text-center">Como Entrar com Recurso</h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</span>
                <div className="flex-1">
                  <p className="text-white font-bold mb-1">Acesse o Portal</p>
                  <p className="text-blue-400 text-sm">periciasmedicas.gestaopublica.sp.gov.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</span>
                <div className="flex-1">
                  <p className="text-white font-bold mb-1">Menu Consulta</p>
                  <p className="text-gray-300 text-sm">Navegue até <strong className="text-cyan-400">Consulta → Servidor</strong></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</span>
                <div className="flex-1">
                  <p className="text-white font-bold mb-1">Selecione o Período</p>
                  <p className="text-gray-300 text-sm">Clique na <strong className="text-purple-400">Lupa</strong> em frente ao período com reconsideração mantida</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</span>
                <div className="flex-1">
                  <p className="text-white font-bold mb-1">Solicite Recurso</p>
                  <p className="text-gray-300 text-sm">Selecione a opção <strong className="text-pink-400">"Solicitação Recurso"</strong></p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-500/20 border border-blue-500/30 rounded-xl p-6">
            <h4 className="text-lg font-bold text-blue-400 mb-3">📄 Documentos Necessários</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Atestado médico original</li>
              <li>• Exames complementares</li>
              <li>• Justificativa detalhada</li>
              <li>• Cópia do indeferimento anterior</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 14,
      title: "Licença Saúde Negada - Ficha 100",
      content: (
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-red-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 mb-6 border-2 border-red-500/50">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-3xl">
                🏥
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-400">Licença-Saúde Negada</h3>
                <p className="text-gray-300">Registro na Ficha 100</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
            <h4 className="text-lg font-bold text-white mb-4">Condição para Registro</h4>
            <p className="text-gray-300 mb-4">
              Quando o servidor tiver licenças-saúde negadas durante um ano, e tendo cumprido 
              <strong className="text-yellow-400"> todo o procedimento necessário</strong>, os períodos de ausência deverão ser anotados como:
            </p>
            <div className="bg-red-500/30 border border-red-500/50 rounded-lg p-4 text-center">
              <p className="text-red-300 font-bold">
                "FALTAS INJUSTIFICADAS - LICENÇA-SAÚDE NEGADA"
              </p>
              <p className="text-gray-400 text-sm mt-2">No verso da Ficha 100</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-lg font-bold text-purple-300 mb-4">3 Esferas Necessárias</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">📄</div>
                <p className="text-white font-medium text-sm">Licença saúde negada</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🔄</div>
                <p className="text-white font-medium text-sm">Reconsideração indeferida</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">⚖️</div>
                <p className="text-white font-medium text-sm">Recurso indeferido</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-green-500/20 border-2 border-green-500/50 rounded-xl p-6">
            <h4 className="text-lg font-bold text-green-400 mb-3">Parecer NDP nº 36/2018</h4>
            <p className="text-gray-300 text-sm">
              Se o servidor cumpriu todo o procedimento e afastada a infração disciplinar, as faltas serão 
              <strong className="text-green-400"> justificadas exclusivamente para fins disciplinares</strong>, 
              sem necessidade de PAD.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 15,
      title: "Inassiduidade - Demissão",
      subtitle: "Lei 10.261/1968 - Artigo 256",
      content: (
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-red-600/30 to-orange-600/30 backdrop-blur-sm rounded-2xl p-8 mb-6 border-2 border-red-500/50">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-3xl">
                ⚖️
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-400">Inassiduidade</h3>
                <p className="text-gray-300">Pena de Demissão - Artigo 256</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-500/30 border-2 border-red-500/50 rounded-xl p-8 text-center">
              <div className="text-6xl font-bold text-red-400 mb-4">15</div>
              <p className="text-gray-300 mb-2">dias <strong className="text-white">consecutivos</strong></p>
              <p className="text-gray-400 text-sm">Ausência sem causa justificável</p>
            </div>

            <div className="bg-orange-500/30 border-2 border-orange-500/50 rounded-xl p-8 text-center">
              <div className="text-6xl font-bold text-orange-400 mb-4">20</div>
              <p className="text-gray-300 mb-2">dias <strong className="text-white">interpolados</strong></p>
              <p className="text-gray-400 text-sm">Durante 1 ano</p>
            </div>
          </div>

          <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🚨</span>
              <div>
                <h4 className="text-lg font-bold text-red-400 mb-2">Consequência</h4>
                <p className="text-gray-300 text-sm">
                  A administração pode abrir <strong className="text-red-400">Processo Administrativo Disciplinar (PAD)</strong> 
                  para investigar as ausências indevidas.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-3">Responsabilidade</h4>
            <p className="text-gray-300 text-sm mb-4">
              <strong className="text-blue-400">Unidade Escolar</strong> e <strong className="text-purple-400">URE</strong> são responsáveis por apurar a frequência.
            </p>
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
              <p className="text-gray-300 text-sm">
                <strong className="text-blue-400">Superior imediato:</strong> Comunicar IMEDIATAMENTE e enviar documentação. 
                <strong className="text-purple-400"> URE:</strong> Autuar o processo com análise.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 16,
      title: "Regra dos 15 ou 20 Dias",
      subtitle: "Contagem de Faltas para Inassiduidade",
      content: (
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 mb-6 border-2 border-cyan-500/50">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-3xl">
                📊
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">Contagem de Faltas</h3>
                <p className="text-gray-300">Regra dos 15 ou 20 dias - Lei 10.261/68</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-6">
            <p className="text-gray-300 mb-4 leading-relaxed">
              A contagem na <strong className="text-cyan-400">Ficha 100</strong> só poderá ser feita quando não houver 
              <strong className="text-yellow-400"> impedimentos que quebrem a contagem</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-cyan-400">Dias úteis consecutivos:</strong> Sexta e Segunda são consecutivos. 
              O fim de semana <strong className="text-yellow-400">não conta</strong> para quebrar a sequência.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* QUEBRA */}
            <div className="bg-green-500/20 border-2 border-green-500/50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                <span className="text-2xl">✅</span> QUEBRA a Sequência
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Quando há falta de OUTRO TIPO entre as injustificadas
              </p>
              <div className="space-y-2 bg-white/10 rounded-lg p-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Sexta:</span>
                  <span className="text-red-400 font-medium">Falta INJUSTIFICADA</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Segunda:</span>
                  <span className="text-yellow-400 font-medium">Falta JUSTIFICADA/MÉDICA</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Terça:</span>
                  <span className="text-red-400 font-medium">Falta INJUSTIFICADA</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-500/30 rounded-lg">
                <p className="text-green-300 font-medium text-center text-sm">
                  ✓ Falta justificada QUEBRA a contagem
                </p>
              </div>
            </div>

            {/* MANTÉM */}
            <div className="bg-red-500/20 border-2 border-red-500/50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                <span className="text-2xl">❌</span> MANTÉM a Sequência
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Apenas faltas injustificadas em dias úteis
              </p>
              <div className="space-y-2 bg-white/10 rounded-lg p-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Sexta:</span>
                  <span className="text-red-400 font-medium">Falta INJUSTIFICADA</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Sáb/Dom:</span>
                  <span className="text-gray-500 font-medium">Fim de semana</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300">Segunda:</span>
                  <span className="text-red-400 font-medium">Falta INJUSTIFICADA</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-500/30 rounded-lg">
                <p className="text-red-300 font-medium text-center text-sm">
                  ✗ Sexta + Segunda = 2 faltas CONSECUTIVAS
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-500/20 border border-amber-500/30 rounded-xl p-6">
            <h4 className="text-lg font-bold text-amber-400 mb-3">Ausências que QUEBRAM a Contagem</h4>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-white/10 rounded-lg p-3 text-center text-sm">
                <span className="text-green-400">✓</span> Falta Justificada
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center text-sm">
                <span className="text-green-400">✓</span> Falta Médica
              </div>
              <div className="bg-white/10 rounded-lg p-3 text-center text-sm">
                <span className="text-green-400">✓</span> Licença Saúde
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 17,
      title: "Concessão Automática de ATS",
      content: (
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-8 mb-6 border-2 border-blue-500/50">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-3xl">
                ⚙️
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-400">Concessão Automática</h3>
                <p className="text-gray-300">Processo via Sistema</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Cronograma de Pagamento</h4>
                <p className="text-gray-300 text-sm">
                  A relação dos ATS a ser concedidos por lauda automática será enviada junto com o 
                  <strong className="text-blue-400"> Cronograma de Pagamento</strong>
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                ⚠️
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Atenção</h4>
                <p className="text-gray-300 text-sm">
                  <strong className="text-yellow-400">Nem todos os ATS aparecem para Concessão automática</strong>
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                📋
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Controle Escolar</h4>
                <p className="text-gray-300 text-sm">
                  <strong className="text-purple-400">A escola deve controlar</strong> os servidores com ATS a vencer
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 18,
      title: "Resumo Geral",
      content: (
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Visão Completa - Todos os Tópicos
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-xl">📈</span>
                <h4 className="text-lg font-bold text-blue-400">ATS</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 5% por quinquênio</li>
                <li>• 1825 dias (5 anos)</li>
                <li>• Máximo: 8 ATS (40%)</li>
              </ul>
            </div>

            <div className="bg-amber-500/20 border border-amber-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-xl">🏆</span>
                <h4 className="text-lg font-bold text-amber-400">Sexta Parte</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 7300 dias</li>
                <li>• Concessão no 7301º dia</li>
                <li>• Efetivos (carreira antiga)</li>
              </ul>
            </div>

            <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-xl">🏥</span>
                <h4 className="text-lg font-bold text-green-400">Licença Saúde</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Até 5 dias (sem perícia)</li>
                <li>• Teto: 15 dias/ano</li>
                <li>• SUS ou IAMSPE</li>
              </ul>
            </div>

            <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-xl">📝</span>
                <h4 className="text-lg font-bold text-purple-400">Faltas Justificadas</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 24/ano (ambos)</li>
                <li>• QM: Máx 2/mês</li>
                <li>• QAE: Sem limite/mês</li>
                <li>• 12 Diretor + 12 Dirigente</li>
              </ul>
            </div>

            <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-xl">👨‍🏫</span>
                <h4 className="text-lg font-bold text-cyan-400">QM - Parcial</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Até 2 horas</li>
                <li>• 1x/mês, 3x/ano</li>
                <li>• LC 1.374/2022</li>
              </ul>
            </div>

            <div className="bg-pink-500/20 border border-pink-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-xl">📋</span>
                <h4 className="text-lg font-bold text-pink-400">QAE - Parcial</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Até 3 horas</li>
                <li>• Sem limite específico</li>
                <li>• LC 1.041/2008</li>
              </ul>
            </div>

            <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-xl">🚫</span>
                <h4 className="text-lg font-bold text-red-400">Nova Carreira</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• SEM ATS</li>
                <li>• SEM Sexta Parte</li>
                <li>• Subsídio (LC 1.374/22)</li>
                <li>• Opção irretratável</li>
              </ul>
            </div>

            <div className="bg-orange-500/20 border border-orange-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-xl">⚖️</span>
                <h4 className="text-lg font-bold text-orange-400">Inassiduidade</h4>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• 15 dias consecutivos</li>
                <li>• 20 dias interpolados</li>
                <li>• PAD + Demissão</li>
              </ul>
            </div>
          </div>

          {/* Público-Alvo no Resumo */}
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-blue-500/30 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-blue-400 font-bold text-lg">Público-Alvo desta Formação</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h5 className="text-blue-300 font-bold mb-2 text-sm">👨‍🏫 QM - Quadro do Magistério</h5>
                <ul className="space-y-1 text-gray-300 text-xs">
                  <li>• <strong className="text-white">Professores PEB II</strong> (EF e Médio)</li>
                  <li>• <strong className="text-white">Diretores de Escola</strong></li>
                  <li>• <strong className="text-cyan-400">Efetivos e ACT-F</strong></li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h5 className="text-purple-300 font-bold mb-2 text-sm">📋 QAE - Quadro de Apoio Escolar</h5>
                <ul className="space-y-1 text-gray-300 text-xs">
                  <li>• <strong className="text-white">Agentes de Serviços Escolares</strong></li>
                  <li>• <strong className="text-white">Agentes de Organização Escolar</strong></li>
                  <li>• <strong className="text-white">Secretários de Escola</strong></li>
                  <li>• <strong className="text-cyan-400">Efetivos e ACT-F</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-500/20 border-2 border-red-500/50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-2xl">⚖️</span>
              <h4 className="text-2xl font-bold text-red-400">Inassiduidade - Demissão</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-red-400">15 dias consecutivos</div>
                <p className="text-gray-400 text-sm">sem causa justificável</p>
              </div>
              <div className="bg-red-500/30 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-red-400">20 dias interpolados</div>
                <p className="text-gray-400 text-sm">durante 1 ano</p>
              </div>
            </div>
            <p className="text-gray-300 mt-4 text-center">
              Resulta em <strong className="text-red-400">PAD</strong> e possível <strong className="text-red-400">Demissão</strong>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 21,
      title: "",
      subtitle: "",
      content: (
        <div className="max-w-6xl mx-auto">
          {/* Slide Final Institucional */}
          <div className="bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            
            {/* Header Governamental */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-blue-400/30">
                  <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              
              <div className="space-y-2 mb-8">
                <p className="text-white text-lg md:text-xl font-bold tracking-wide">GOVERNO DO ESTADO DE SÃO PAULO</p>
                <div className="h-px w-48 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
                <p className="text-blue-400 text-base md:text-lg font-semibold">SECRETARIA DE ESTADO DA EDUCAÇÃO</p>
                <div className="h-px w-64 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
                <p className="text-cyan-400 text-sm md:text-base font-medium">UNIDADE REGIONAL DE ENSINO DE ARARAQUARA</p>
              </div>
            </div>

            {/* Unidade Escolar */}
            <div className="bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 rounded-2xl p-8 mb-10 border border-blue-500/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">EE PROFA. MARLENE FRATTINI</h3>
                <p className="text-gray-400 text-sm">Unidade Escolar</p>
              </div>
            </div>

            {/* Gestores */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* Gestor Escolar */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-400 text-xs font-medium uppercase tracking-wider">Gestor Escolar</p>
                    <h4 className="text-white text-lg font-bold">LUCILENA DO AMARAL</h4>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
              </div>

              {/* Gerente de Organização Escolar */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cyan-400 text-xs font-medium uppercase tracking-wider">Gerente de Organização Escolar</p>
                    <h4 className="text-white text-lg font-bold">JOSÉ CARLOS FROTA DA SILVA</h4>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
              </div>
            </div>

            {/* Ano */}
            <div className="bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-amber-600/20 rounded-xl p-6 border border-amber-500/30 text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-amber-300 text-sm font-medium">ANO DE REALIZAÇÃO</p>
                  <p className="text-4xl font-bold text-amber-400">2026</p>
                </div>
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-10 pt-6 border-t border-white/10 text-center">
              <p className="text-gray-500 text-xs">
                Orientação Técnica — Replicabilidade | Gestão de Pessoas
              </p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div className="h-px w-16 bg-gradient-to-r from-blue-500 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      ),
    },
  ];

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [slides.length, isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide(Math.min(currentSlide + 1, slides.length - 1));
  }, [currentSlide, slides.length, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(Math.max(currentSlide - 1, 0));
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, slides.length]);

  const exportToPdf = () => {
    const previousTitle = document.title;
    document.title = 'Orientacao_Tecnica_Replicabilidade_2026';

    const restoreTitle = () => {
      document.title = previousTitle;
      window.removeEventListener('afterprint', restoreTitle);
    };

    window.addEventListener('afterprint', restoreTitle);
    window.print();
  };

  return (
    <>
    <div className="screen-presentation min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-lg font-bold text-white hidden sm:block">Manual do Gestor Escolar</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={exportToPdf}
              className="group flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-100 transition-all hover:border-cyan-300/60 hover:bg-cyan-400/20"
              title="Abrir a versão completa para salvar como PDF"
            >
              <svg className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a4 4 0 01-4-4V7a4 4 0 014-4h5l5 5v9a4 4 0 01-4 4z" />
              </svg>
              <span className="hidden sm:inline">Exportar PDF</span>
              <span className="sm:hidden">PDF</span>
            </button>
            <div className="text-gray-400 text-sm font-mono">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-24 px-4 md:px-6 min-h-screen flex items-center">
        <div 
          className={`w-full max-w-7xl mx-auto transition-all duration-300 ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-12 min-h-[60vh] flex items-center">
            <div className="w-full">
              <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-2">
                {slides[currentSlide].title}
              </h2>
              {slides[currentSlide].subtitle && (
                <p className="text-lg md:text-xl text-center text-blue-300 mb-6">
                  {slides[currentSlide].subtitle}
                </p>
              )}
              {slides[currentSlide].content}
            </div>
          </div>
        </div>
      </main>

      {/* Navigation Controls */}
      <footer className="fixed bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Progress Bar */}
            <div className="flex-1 mx-8">
              <div className="flex gap-2 justify-center flex-wrap">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-8 bg-blue-500' 
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4 ml-4">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">Anterior</span>
              </button>

              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg text-white transition-colors"
              >
                <span className="hidden sm:inline">Próximo</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Keyboard Hints */}
          <div className="text-center mt-4 text-gray-500 text-xs">
            ← → Navegar | Home: Início | End: Fim
          </div>
        </div>
      </footer>
    </div>

    {/* Documento completo usado exclusivamente pela impressão em PDF. */}
    <section className="pdf-document" aria-hidden="true">
      {slides.map((slide, index) => (
        <article className="pdf-slide" key={`pdf-${slide.id}`}>
          <div className="pdf-slide__stage">
            <div className="pdf-slide__topbar">
              <div className="pdf-slide__brand">
                <span className="pdf-slide__brand-mark">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                <span>Orientação Técnica | Gestão de Pessoas</span>
              </div>
              <span className="pdf-slide__number">{String(index + 1).padStart(2, '0')} / {slides.length}</span>
            </div>

            <div className="pdf-slide__canvas">
              {slide.title && <h2 className="pdf-slide__title">{slide.title}</h2>}
              {slide.subtitle && <p className="pdf-slide__subtitle">{slide.subtitle}</p>}
              <div className="pdf-slide__content">{slide.content}</div>
            </div>

            <div className="pdf-slide__footer">
              <span>URE Araraquara | EE Profa. Marlene Frattini</span>
              <span>Plano de Ação | 2º Semestre de 2026</span>
            </div>
          </div>
        </article>
      ))}
    </section>
    </>
  );
}

export default App;
