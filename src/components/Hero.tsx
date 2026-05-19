import { company } from '../lib/constants';

export function Hero() {
  return (
    <section id="inicio" className="section-shell grid items-center gap-12 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.08fr_0.92fr]">
      <div>
        <p className="eyebrow">Sites, sistemas, automações e IA</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
          Tecnologia sob medida para empresas que querem automatizar, vender mais e trabalhar com inteligência.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          A HNPRO desenvolve sites, sistemas, automações e soluções com IA para pequenos negócios, profissionais e
          empresas em crescimento.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#contato" className="primary-button">
            Solicitar orçamento
          </a>
          <a href="#planos" className="secondary-button">
            Conhecer planos de site
          </a>
          <a href={company.whatsappUrl} target="_blank" rel="noreferrer" className="secondary-button">
            Falar pelo WhatsApp
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg border border-line bg-panel/75 p-5 shadow-glow">
        <div className="grid gap-4">
          {[
            ['01', 'Presença digital', 'Sites responsivos para vender sua proposta com clareza.'],
            ['02', 'Processos conectados', 'APIs, bancos de dados, integrações e dashboards.'],
            ['03', 'IA aplicada', 'Atendimento, relatórios e automações para reduzir tarefas manuais.'],
          ].map(([step, title, text]) => (
            <div key={step} className="rounded-lg border border-line bg-white/[0.045] p-5">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-electric/15 text-sm font-black text-electric">
                  {step}
                </span>
                <div>
                  <h2 className="text-lg font-bold text-white">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
