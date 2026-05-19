import { navItems, company } from '../lib/constants';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/82 backdrop-blur-xl">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-5 px-5 sm:px-6 lg:px-8">
        <a href="#inicio" className="text-lg font-black tracking-wide text-white">
          {company.name}
        </a>

        <nav aria-label="Menu principal" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-electric"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="primary-button hidden sm:inline-flex">
          Solicitar orçamento
        </a>
      </div>
    </header>
  );
}
