import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/reveal"

const technologies = [
  "Node.js",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "SQL Server",
  "APIs REST",
  "Docker",
  "n8n",
  "OpenAI API",
  "GitHub",
  "Hospedagem em nuvem"
]

export function TechnologiesSection() {
  const loop = [...technologies, ...technologies]

  return (
    <section id="tecnologias" className="py-24 lg:py-32 relative bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">Tecnologias modernas para </span>
            <span className="text-gradient">soluções escaláveis</span>
          </h2>
        </Reveal>
      </div>

      {/* Marquee */}
      <Reveal className="relative mb-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background via-background/80 to-transparent" />
        <div className="overflow-hidden py-2">
          <div className="marquee-track px-4">
            {loop.map((tech, index) => (
              <Badge
                key={`${tech}-${index}`}
                variant="secondary"
                className="tech-chip shrink-0 px-4 py-2 text-sm font-medium bg-card border border-border cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="container mx-auto px-4">
        {/* Description */}
        <Reveal>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com tecnologias modernas para criar soluções rápidas, seguras e preparadas para crescer.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
