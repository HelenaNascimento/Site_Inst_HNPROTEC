import { services } from '../data/services';

export function Services() {
  return (
    <section id="servicos" className="section-shell">
      <p className="eyebrow">Serviços</p>
      <h2 className="section-title">Soluções digitais para construir, integrar e evoluir sua operação</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="card">
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
