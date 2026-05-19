import { technologies } from '../data/technologies';

export function Technologies() {
  return (
    <section className="section-shell">
      <p className="eyebrow">Tecnologias</p>
      <h2 className="section-title">Tecnologias modernas para soluções escaláveis</h2>
      <p className="section-copy">
        Trabalhamos com tecnologias modernas para criar soluções rápidas, seguras e preparadas para crescer.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        {technologies.map((technology) => (
          <span key={technology} className="rounded-md border border-line bg-white/[0.055] px-4 py-3 text-sm font-bold text-slate-100">
            {technology}
          </span>
        ))}
      </div>
    </section>
  );
}
