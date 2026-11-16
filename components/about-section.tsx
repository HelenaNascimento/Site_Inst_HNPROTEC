import { Reveal } from "@/components/reveal"

export function AboutSection() {
  return (
    <section id="sobre" className="section-atmosphere section-atmosphere-grid py-24 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
              <span className="text-foreground">Sobre a </span>
              <span className="text-gradient">HNPROTEC</span>
            </h2>
          </Reveal>

          {/* Content */}
          <Reveal delayMs={120}>
            <div className="relative neon-edge bg-card/50 border border-border rounded-2xl p-8 lg:p-12 overflow-hidden">
              <div
                className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[var(--neon-blue)] to-transparent opacity-70"
                aria-hidden
              />
              <div
                className="absolute -top-24 -right-16 w-56 h-56 rounded-full bg-[var(--neon-purple)]/12 blur-3xl pointer-events-none"
                aria-hidden
              />
              <div
                className="absolute -bottom-20 -left-10 w-48 h-48 rounded-full bg-[var(--neon-blue)]/10 blur-3xl pointer-events-none"
                aria-hidden
              />
              <div className="absolute left-0 top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-[var(--neon-blue)] via-primary to-[var(--neon-purple)]" />
              <p className="relative text-lg lg:text-xl text-muted-foreground leading-relaxed text-center pl-4">
                A HNPROTEC nasceu para ajudar empresas, profissionais 
                e pequenos negócios a usarem tecnologia de forma prática, 
                acessível e estratégica. Atuamos com desenvolvimento de sites, 
                sistemas sob medida, automações, suporte técnico, integração com inteligência artificial 
                e treinamentos profissionais. Nosso objetivo é transformar processos manuais 
                em soluções digitais eficientes, conectando dados, atendimento, vendas e gestão 
                em uma estrutura moderna e escalável.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
