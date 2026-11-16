import { 
  Users, 
  Puzzle, 
  Building2, 
  Brain, 
  HeadphonesIcon, 
  LineChart 
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"

const differentials = [
  {
    icon: Users,
    title: "Atendimento personalizado",
    description: "Cada projeto recebe atenção individual e soluções específicas para suas necessidades."
  },
  {
    icon: Puzzle,
    title: "Soluções sob medida",
    description: "Desenvolvemos exatamente o que você precisa, sem pacotes genéricos."
  },
  {
    icon: Building2,
    title: "Foco em pequenos negócios",
    description: "Entendemos a realidade de empresas em crescimento e adaptamos nossas soluções."
  },
  {
    icon: Brain,
    title: "Integração com IA",
    description: "Aplicamos inteligência artificial para automatizar e otimizar processos."
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte e manutenção",
    description: "Acompanhamento contínuo para garantir que tudo funcione perfeitamente."
  },
  {
    icon: LineChart,
    title: "Visão estratégica",
    description: "Combinamos dados e automação para decisões mais inteligentes."
  }
]

export function DifferentialsSection() {
  return (
    <section className="section-atmosphere py-24 lg:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">Por que escolher a </span>
            <span className="text-gradient">HNPROTEC?</span>
          </h2>
        </Reveal>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {differentials.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 80}>
              <Card 
                className="card-lift h-full bg-card/50 border-border group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-[var(--neon-blue)]/25 to-[var(--neon-purple)]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ring-1 ring-[var(--neon-blue)]/20 shadow-[0_0_20px_oklch(0.8_0.145_215_/_0.14)]">
                    <item.icon className="w-7 h-7 text-[var(--neon-blue)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
