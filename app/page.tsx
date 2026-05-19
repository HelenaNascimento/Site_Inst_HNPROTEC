import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PlansSection } from "@/components/plans-section"
import { AutomationSection } from "@/components/automation-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { AboutSection } from "@/components/about-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PlansSection />
        <AutomationSection />
        <TechnologiesSection />
        <AboutSection />
        <DifferentialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
