import { Badge } from "@/components/ui/badge"

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
  return (
    <section id="tecnologias" className="py-24 lg:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">Tecnologias modernas para </span>
            <span className="text-gradient">soluções escaláveis</span>
          </h2>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-12">
          {technologies.map((tech, index) => (
            <Badge 
              key={index}
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-card border border-border hover:border-primary/50 transition-colors cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Description */}
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          Trabalhamos com tecnologias modernas para criar soluções rápidas, seguras e preparadas para crescer.
        </p>
      </div>
    </section>
  )
}
