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
    <section id="ia-automacao" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-[var(--neon-purple)]/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              <span className="text-foreground">Seu site pode ser mais do que uma vitrine. </span>
              <span className="text-gradient">Ele pode trabalhar pela sua empresa.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com automação e inteligência artificial, sua empresa pode responder clientes, organizar solicitações, gerar relatórios, integrar dados e reduzir tarefas manuais.
            </p>
          </div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {automationFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-[var(--neon-purple)]/20 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{feature.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
