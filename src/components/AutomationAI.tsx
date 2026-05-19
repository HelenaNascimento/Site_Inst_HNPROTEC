const examples = [
  'Chatbot para atendimento',
  'Captura automática de leads',
  'Envio automático de e-mails',
  'Integração com WhatsApp',
  'Relatórios com IA',
  'Consulta a banco de dados',
  'Automação de processos internos',
  'Integração com n8n e APIs',
];

export function AutomationAI() {
  return (
    <section id="ia-automacao" className="section-shell">
      <div className="rounded-lg border border-line bg-panel/70 p-6 shadow-glow sm:p-8 lg:p-10">
        <p className="eyebrow">IA e Automação</p>
        <h2 className="section-title">Seu site pode ser mais do que uma vitrine. Ele pode trabalhar pela sua empresa.</h2>
        <p className="section-copy">
          Com automação e inteligência artificial, sua empresa pode responder clientes, organizar solicitações, gerar
          relatórios, integrar dados e reduzir tarefas manuais.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {examples.map((example) => (
            <div key={example} className="rounded-lg border border-line bg-white/[0.045] px-4 py-4 text-sm font-semibold text-slate-100">
              {example}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
