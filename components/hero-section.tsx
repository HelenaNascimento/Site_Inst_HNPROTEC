import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Code, 
  Cloud, 
  Bot, 
  Database, 
  Cpu, 
  BarChart3,
  Terminal,
  Sparkles
} from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[var(--neon-purple)]/10" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                <span className="text-foreground">Tecnologia sob medida para empresas que querem </span>
                <span className="text-gradient">automatizar, vender mais e trabalhar com inteligência.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                A HNPROTEC desenvolve sites, sistemas, automações e soluções com IA para pequenos negócios, profissionais e empresas em crescimento.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8">
                <Link href="#contato">Solicitar orçamento</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 border-border hover:bg-secondary">
                <Link href="#planos">Conhecer planos</Link>
              </Button>
            </div>
          </div>

          {/* Right Visual - Floating Cards */}
          <div className="relative h-[400px] lg:h-[500px] hidden md:block">
            {/* Main Dashboard Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 bg-card/80 backdrop-blur border border-border rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Leads hoje</span>
                  <span className="text-2xl font-bold text-foreground">47</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-primary to-[var(--neon-purple)] rounded-full" />
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="bg-secondary/50 rounded-lg p-2 text-center">
                    <BarChart3 className="w-4 h-4 mx-auto text-primary mb-1" />
                    <span className="text-xs text-muted-foreground">Analytics</span>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-2 text-center">
                    <Bot className="w-4 h-4 mx-auto text-[var(--neon-blue)] mb-1" />
                    <span className="text-xs text-muted-foreground">IA</span>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-2 text-center">
                    <Database className="w-4 h-4 mx-auto text-[var(--neon-purple)] mb-1" />
                    <span className="text-xs text-muted-foreground">Dados</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Card - Top Right */}
            <div className="absolute top-4 right-4 w-48 bg-card/80 backdrop-blur border border-border rounded-xl p-3 shadow-xl animate-pulse">
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground font-mono">api.ts</span>
              </div>
              <div className="font-mono text-xs space-y-1">
                <div className="text-[var(--neon-purple)]">{"async function"}</div>
                <div className="text-[var(--neon-blue)] pl-2">{"getLeads()"}</div>
                <div className="text-muted-foreground pl-4">{"// IA response"}</div>
              </div>
            </div>

            {/* AI Card - Bottom Left */}
            <div className="absolute bottom-8 left-0 w-44 bg-card/80 backdrop-blur border border-border rounded-xl p-3 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[var(--neon-blue)]" />
                <span className="text-xs text-foreground font-medium">IA Ativa</span>
              </div>
              <p className="text-xs text-muted-foreground">Processando 23 mensagens automáticas...</p>
            </div>

            {/* Cloud Card - Top Left */}
            <div className="absolute top-12 left-8 w-32 bg-card/80 backdrop-blur border border-border rounded-xl p-3 shadow-xl">
              <Cloud className="w-6 h-6 text-primary mb-2" />
              <span className="text-xs text-muted-foreground">99.9% uptime</span>
            </div>

            {/* Floating Icons */}
            <div className="absolute bottom-24 right-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-[var(--neon-purple)] rounded-xl flex items-center justify-center shadow-lg glow-box">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            <div className="absolute top-32 right-24">
              <div className="w-10 h-10 bg-secondary border border-border rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-[var(--neon-blue)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
