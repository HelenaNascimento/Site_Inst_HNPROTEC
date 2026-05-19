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
    <footer className="py-12 lg:py-16 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div>
            <Link href="#inicio" className="text-2xl font-bold text-gradient">
              HNPRO.TEC.BR
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              Desenvolvimento de sites, sistemas, automações e soluções com IA.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <div className="pt-8 border-t border-border w-full">
            <p className="text-sm text-muted-foreground">
              © 2026 HNPRO.TEC.BR. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
