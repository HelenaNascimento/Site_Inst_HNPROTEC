export function AboutSection() {
  return (
    <section id="sobre" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
            <span className="text-foreground">Sobre a </span>
            <span className="text-gradient">HNPROTEC</span>
          </h2>

          {/* Content */}
          <div className="bg-card/50 border border-border rounded-2xl p-8 lg:p-12">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-center">
              A HNPROTEC nasceu para ajudar empresas, profissionais 
              e pequenos negócios a usarem tecnologia de forma prática, 
              acessível e estratégica. Atuamos com desenvolvimento de sites, 
              sistemas sob medida, automações, suporte técnico, integração com inteligência artificial 
              e treinamentos profissionais. Nosso objetivo é transformar processos manuais 
              em soluções digitais eficientes, conectando dados, atendimento, vendas e gestão 
              em uma estrutura moderna e escalável.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
