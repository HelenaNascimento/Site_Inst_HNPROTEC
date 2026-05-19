const differentials = [
  'Atendimento personalizado',
  'Soluções sob medida',
  'Foco em pequenos negócios e empresas em crescimento',
  'Integração com IA',
  'Suporte e manutenção',
  'Visão estratégica de dados e automação',
];

export function Differentials() {
  return (
    <section className="section-shell">
      <p className="eyebrow">Diferenciais</p>
      <h2 className="section-title">Uma parceria técnica com visão de negócio</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {differentials.map((item) => (
          <article key={item} className="card">
            <h3 className="text-lg font-bold text-white">{item}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
