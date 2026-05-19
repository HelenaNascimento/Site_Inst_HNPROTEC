import { 
  Users, 
  Puzzle, 
  Building2, 
  Brain, 
  HeadphonesIcon, 
  LineChart 
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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
    <section className="py-24 lg:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">Por que escolher a </span>
            <span className="text-gradient">HNPROTEC?</span>
          </h2>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {differentials.map((item, index) => (
            <Card 
              key={index}
              className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-[var(--neon-purple)]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
