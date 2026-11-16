import Link from "next/link"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"

const plans = [
  {
    name: "Essencial",
    subtitle: "Para profissionais e pequenos negócios que precisam estar online.",
    featured: false,
    features: [
      "Site de até 3 páginas",
      "Design responsivo",
      "Botão de WhatsApp",
      "Links para redes sociais",
      "Formulário de contato",
      "Configuração básica de domínio",
      "Publicação do site"
    ],
    cta: "Quero este plano",
    ctaVariant: "outline" as const
  },
  {
    name: "Profissional",
    subtitle: "Para empresas que querem divulgar serviços com mais credibilidade.",
    featured: true,
    badge: "Mais recomendado",
    features: [
      "Site de até 6 páginas",
      "Página de serviços",
      "Página sobre a empresa",
      "Formulário de orçamento",
      "Integração com WhatsApp",
      "Otimização básica para Google",
      "Mapa/localização",
      "Publicação em servidor"
    ],
    cta: "Solicitar orçamento",
    ctaVariant: "default" as const
  },
  {
    name: "Inteligente",
    subtitle: "Para empresas que querem um site conectado com automação e IA.",
    featured: false,
    features: [
      "Tudo do Plano Profissional",
      "Chatbot ou assistente virtual",
      "Automação de atendimento inicial",
      "Integração com formulário, planilha ou e-mail",
      "Painel simples de leads",
      "Relatórios básicos",
      "Hospedagem configurada"
    ],
    cta: "Quero site com IA",
    ctaVariant: "outline" as const
  }
]

export function PlansSection() {
  return (
    <section id="planos" className="py-24 lg:py-32 relative bg-secondary/20 overflow-hidden">
      <div
        className="neon-orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20"
        aria-hidden
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">Planos para </span>
            <span className="text-gradient">criação de sites</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Escolha o melhor ponto de partida para colocar sua marca na internet com uma estrutura profissional.
          </p>
        </Reveal>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delayMs={index * 100} className="h-full">
              <Card 
                className={`relative h-full bg-card border-border transition-all duration-300 ${
                  plan.featured 
                    ? "neon-edge border-primary glow-box scale-[1.02] lg:scale-105 z-10" 
                    : "card-lift hover:border-border/80"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="featured-badge-pulse flex items-center gap-1 bg-gradient-to-r from-[var(--neon-blue)] via-primary to-[var(--neon-purple)] text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-current" />
                      {plan.badge}
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <h3 className={`text-2xl font-bold ${plan.featured ? "text-gradient" : "text-foreground"}`}>
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">{plan.subtitle}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    variant={plan.ctaVariant}
                    className={`w-full ${
                      plan.featured 
                        ? "cta-glow bg-primary hover:bg-primary/90 text-primary-foreground" 
                        : "border-border hover:bg-secondary"
                    }`}
                  >
                    <Link href="#contato">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
