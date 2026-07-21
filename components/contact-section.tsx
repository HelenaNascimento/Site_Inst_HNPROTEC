"use client"

import { useState } from "react"
import { AlertCircle, CheckCircle2, Mail, Send } from "lucide-react"
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
  const [quoteCode, setQuoteCode] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.serviceType) {
      setStatus("error")
      setFeedbackMessage("Selecione o tipo de serviço desejado.")
      return
    }

    setStatus("sending")
    setFeedbackMessage("")
    setQuoteCode("")

    try {
      const response = await fetch("/api/orcamentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: getLeadSource(),
          pageUrl: window.location.href,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result?.message || "Não foi possível enviar sua solicitação agora.")
      }

      setStatus("success")
      setQuoteCode(result.quoteCode)
      setFeedbackMessage(
        `Solicitação enviada por e-mail. Protocolo do orçamento: ${result.quoteCode}.`,
      )
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
          : "Não foi possível enviar sua solicitação agora.",
      )
    }
  }

  return (
    <section id="contato" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">
              Vamos transformar sua ideia em{" "}
            </span>
            <span className="text-gradient">
              site, sistema ou automação?
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Envie sua solicitação de orçamento por e-mail para nossa equipe comercial.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-card/50 border border-border rounded-2xl p-6 lg:p-8 space-y-6"
          >
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
                  className="bg-input border-border"
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
                  className="bg-input border-border"
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
                  className="bg-input border-border"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">Telefone ou WhatsApp</Label>
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
                  className="bg-input border-border"
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
                className="bg-input border-border resize-none"
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
                disabled={status === "sending"}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Send className="w-4 h-4 mr-2" />
                {status === "sending" ? "Enviando..." : "Enviar orçamento por e-mail"}
              </Button>

              <Button
                type="button"
                variant="outline"
                size="lg"
                className="flex-1 border-border hover:bg-secondary"
                asChild
              >
                <a href="mailto:comercial@hnpro.tec.br">
                  <Mail className="w-4 h-4 mr-2" />
                  comercial@hnpro.tec.br
                </a>
              </Button>
            </div>

            {quoteCode && (
              <p className="text-center text-xs text-muted-foreground">
                Guarde o código {quoteCode} para acompanhar sua solicitação.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
