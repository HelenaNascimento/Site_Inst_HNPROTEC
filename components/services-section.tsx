import { 
  Globe, 
  Code2, 
  Bot, 
  Wrench, 
  Link2, 
  GraduationCap 
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Globe,
    title: "Criação de Sites",
    description: "Sites institucionais, landing pages, portfólios, páginas comerciais e e-commerces simples para divulgar sua marca e captar clientes."
  },
  {
    icon: Code2,
    title: "Sistemas Sob Medida",
    description: "Desenvolvimento de sistemas, APIs, dashboards, painéis administrativos e integrações com bancos de dados."
  },
  {
    icon: Bot,
    title: "Automação com IA",
    description: "Chatbots, atendimento automatizado, geração de documentos, análise de dados e assistentes virtuais inteligentes."
  },
  {
    icon: Wrench,
    title: "Suporte Técnico",
    description: "Manutenção de sites, servidores, sistemas, banco de dados, APIs e ambientes corporativos."
  },
  {
    icon: Link2,
    title: "Integrações",
    description: "Integração com WhatsApp, e-mail, planilhas, ERPs, APIs externas, n8n e bancos de dados."
  },
  {
    icon: GraduationCap,
    title: "Treinamentos",
    description: "Aulas, mentorias e capacitações em programação, banco de dados, IA, automação e tecnologia aplicada ao mercado."
  }
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">Soluções digitais para o </span>
            <span className="text-gradient">crescimento da sua empresa</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Da presença digital à automação inteligente, criamos soluções práticas para transformar processos em resultados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[var(--neon-purple)]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
