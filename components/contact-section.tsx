"use client"

import { useState } from "react"
import { Send, MessageCircle } from "lucide-react"
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

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    serviceType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const texto = `Olá! Recebi uma nova solicitação de orçamento pelo site HNPRO.TEC.BR.

Nome: ${formData.name}
Empresa: ${formData.company}
E-mail: ${formData.email}
WhatsApp: ${formData.whatsapp}
Tipo de serviço: ${formData.serviceType}

Mensagem:
${formData.message}`

    const numero = "5585987007255"
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`

    window.open(url, "_blank")
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
            Entre em contato e solicite uma proposta para sua empresa.
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

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar solicitação
              </Button>

              <Button
                type="button"
                variant="outline"
                size="lg"
                className="flex-1 border-border hover:bg-secondary"
                asChild
              >
                <a
                  href="https://wa.me/5585987007255"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar pelo WhatsApp
                </a>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}