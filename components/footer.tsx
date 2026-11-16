import Link from "next/link"

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Planos", href: "#planos" },
  { label: "IA e Automação", href: "#ia-automacao" },
  { label: "Contato", href: "#contato" }
]

export function Footer() {
  return (
    <footer className="relative py-12 lg:py-16 border-t border-border bg-card/30 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-t from-[var(--neon-purple)]/5 via-transparent to-transparent pointer-events-none"
        aria-hidden
      />
      <div
        className="neon-orb w-[320px] h-[320px] -bottom-40 left-1/2 -translate-x-1/2 bg-primary/15"
        aria-hidden
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div>
            <Link href="#inicio" className="logo-glow text-2xl font-bold text-gradient inline-block">
              HNPRO.TEC.BR
            </Link>
            <p className="text-muted-foreground mt-2 text-sm max-w-md mx-auto">
              Desenvolvimento de sites, sistemas, automações e soluções com IA.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-to-r after:from-[var(--neon-blue)] after:to-[var(--neon-purple)] hover:after:w-full after:transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/80 w-full">
            <p className="text-sm text-muted-foreground">
              © 2026 HNPRO.TEC.BR. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
