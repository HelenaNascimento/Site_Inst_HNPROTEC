import { 
  MessageSquareText, 
  UserPlus, 
  Mail, 
  MessageCircle, 
  FileBarChart, 
  Database, 
  Workflow, 
  Plug 
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"

const automationFeatures = [
  { icon: MessageSquareText, label: "Chatbot para atendimento" },
  { icon: UserPlus, label: "Captura automática de leads" },
  { icon: Mail, label: "Envio automático de e-mails" },
  { icon: MessageCircle, label: "Integração com WhatsApp" },
  { icon: FileBarChart, label: "Relatórios com IA" },
  { icon: Database, label: "Consulta a banco de dados" },
  { icon: Workflow, label: "Automação de processos internos" },
  { icon: Plug, label: "Integração com n8n e APIs" }
]

export function AutomationSection() {
  return (
    <section id="ia-automacao" className="section-atmosphere py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent + soft orbs */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-[var(--neon-purple)]/5" />
      <div
        className="neon-orb w-[380px] h-[380px] top-1/2 right-[8%] -translate-y-1/2 bg-[var(--neon-purple)]"
        aria-hidden
      />
      <div
        className="neon-orb w-[280px] h-[280px] bottom-0 left-[5%] bg-[var(--neon-blue)]"
        aria-hidden
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <Reveal className="space-y-6">
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)]" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              <span className="text-foreground">Seu site pode ser mais do que uma vitrine. </span>
              <span className="text-gradient">Ele pode trabalhar pela sua empresa.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com automação e inteligência artificial, sua empresa pode responder clientes, organizar solicitações, gerar relatórios, integrar dados e reduzir tarefas manuais.
            </p>
          </Reveal>

          {/* Right - Features Grid */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-[var(--neon-purple)]/10 blur-xl pointer-events-none" />
            <div className="relative grid grid-cols-2 gap-4">
              {automationFeatures.map((feature, index) => (
                <Reveal key={feature.label} delayMs={index * 60}>
                  <Card 
                    className="card-lift h-full bg-card/60 border-border group backdrop-blur-sm"
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[var(--neon-blue)]/25 to-[var(--neon-purple)]/20 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ring-1 ring-[var(--neon-blue)]/15">
                        <feature.icon className="w-5 h-5 text-[var(--neon-blue)]" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{feature.label}</span>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
