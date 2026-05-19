import { plans } from '../data/plans';

export function Plans() {
  return (
    <section id="planos" className="section-shell">
      <p className="eyebrow">Planos de site</p>
      <h2 className="section-title">Escolha um ponto de partida e evolua conforme sua empresa cresce</h2>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-lg border p-6 shadow-glow transition duration-300 hover:-translate-y-1 ${
              plan.featured
                ? 'border-electric bg-electric/10'
                : 'border-line bg-white/[0.055] hover:border-electric/45'
            }`}
          >
            {plan.featured && (
              <span className="mb-5 inline-flex rounded-md bg-electric px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-ink">
                Mais recomendado
              </span>
            )}
            <h3 className="text-2xl font-black text-white">{plan.name}</h3>
            <p className="mt-3 min-h-14 text-sm leading-6 text-slate-300">{plan.description}</p>
            <ul className="mt-6 space-y-3">
              {plan.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-electric" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contato" className={plan.featured ? 'primary-button mt-7 w-full' : 'secondary-button mt-7 w-full'}>
              Solicitar proposta
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
