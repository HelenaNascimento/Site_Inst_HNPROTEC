"use client"

import { useState } from "react"
import { AlertCircle, CheckCircle2, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Reveal } from "@/components/reveal"

const WHATSAPP_NUMBER = "5585987007255"

const serviceTypes = [
  "Criação de Site",
  "Sistema Sob Medida",
  "Automação com IA",
  "Suporte Técnico",
  "Integrações",
  "Treinamento",
  "Outro",
]

type SubmitStatus = "idle" | "sending" | "success" | "error"

function getLeadSource() {
  if (typeof window === "undefined") {
    return "site"
  }

  const params = new URLSearchParams(window.location.search)
  const source =
    params.get("origem") ||
    params.get("utm_source") ||
    params.get("source")

  if (source) {
    return source
  }

  if (document.referrer) {
    try {
      return new URL(document.referrer).hostname
    } catch {
      return document.referrer
    }
  }

  return "site"
}

function buildWhatsAppLink(data: {
  name: string
  company: string
  email: string
  whatsapp: string
  serviceType: string
  message: string
}) {
  const text = [
    "Olá! Recebi uma nova solicitação de orçamento pelo site HNPRO.TEC.BR.",
    "",
    `Nome: ${data.name}`,
    `Empresa: ${data.company || "Não informada"}`,
    `E-mail: ${data.email}`,
    `WhatsApp: ${data.whatsapp}`,
    `Tipo de serviço: ${data.serviceType}`,
    `Origem: ${getLeadSource()}`,
    "",
    "Mensagem:",
    data.message,
  ].join("\n")

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    serviceType: "",
    message: "",
  })
  const [status, setStatus] = useState<SubmitStatus>("idle")
  const [feedbackMessage, setFeedbackMessage] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.serviceType) {
      setStatus("error")
      setFeedbackMessage("Selecione o tipo de serviço desejado.")
      return
    }

    try {
      const whatsappLink = buildWhatsAppLink(formData)
      window.open(whatsappLink, "_blank", "noopener,noreferrer")

      setStatus("success")
      setFeedbackMessage("Solicitação aberta no WhatsApp. É só enviar a mensagem.")
      setFormData({
        name: "",
        company: "",
        email: "",
        whatsapp: "",
        serviceType: "",
        message: "",
      })
    } catch (error) {
      setStatus("error")
      setFeedbackMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível abrir o WhatsApp agora.",
      )
    }
  }

  return (
    <section id="contato" className="section-atmosphere py-24 lg:py-32 relative overflow-hidden">
      <div
        className="neon-orb w-[420px] h-[420px] top-1/3 left-1/2 -translate-x-1/2 bg-primary/20"
        aria-hidden
      />

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">
              Vamos transformar sua ideia em{" "}
            </span>
            <span className="text-gradient">
              site, sistema ou automação?
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Entre em contato e solicite uma proposta pelo WhatsApp.
          </p>
        </Reveal>

        <Reveal delayMs={100} className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="neon-edge bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8 space-y-6 relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-blue)] to-transparent opacity-80"
              aria-hidden
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="bg-input border-border focus-visible:border-primary/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Nome da empresa"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      company: e.target.value,
                    })
                  }
                  className="bg-input border-border focus-visible:border-primary/50"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="bg-input border-border focus-visible:border-primary/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  placeholder="(00) 00000-0000"
                  value={formData.whatsapp}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      whatsapp: e.target.value,
                    })
                  }
                  className="bg-input border-border focus-visible:border-primary/50"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="serviceType">Tipo de serviço desejado</Label>

              <Select
                value={formData.serviceType}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    serviceType: value,
                  })
                }
              >
                <SelectTrigger
                  id="serviceType"
                  className="bg-input border-border"
                >
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>

                <SelectContent>
                  {serviceTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Conte-nos sobre seu projeto ou necessidade..."
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="bg-input border-border resize-none focus-visible:border-primary/50"
                required
              />
            </div>

            {feedbackMessage && (
              <div
                className={`flex items-start gap-3 rounded-xl border p-4 text-sm ${
                  status === "success"
                    ? "border-primary/40 bg-primary/10 text-foreground"
                    : "border-destructive/40 bg-destructive/10 text-foreground"
                }`}
              >
                {status === "success" ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                ) : (
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                )}
                <span>{feedbackMessage}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                size="lg"
                className="cta-glow flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar solicitação
              </Button>

              <Button
                type="button"
                variant="outline"
                size="lg"
                className="flex-1 border-border hover:bg-secondary hover:border-primary/40"
                asChild
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar pelo WhatsApp
                </a>
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
