import { company, navItems } from '../lib/constants';

export function Footer() {
  const footerLinks = navItems.filter((item) => ['Início', 'Serviços', 'Planos', 'Contato'].includes(item.label));

  return (
    <footer className="border-t border-line bg-ink/86">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="text-lg font-black tracking-wide text-white">{company.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
            Desenvolvimento de sites, sistemas, automações e soluções com IA.
          </p>
          <p className="mt-6 text-sm text-slate-500">© 2026 HNPRO.TEC.BR. Todos os direitos reservados.</p>
        </div>
        <nav aria-label="Links do rodapé" className="flex flex-wrap gap-4 lg:justify-end">
          {footerLinks.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-300 transition hover:text-electric">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
