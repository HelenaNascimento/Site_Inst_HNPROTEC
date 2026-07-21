import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

const CONTACT_EMAIL = "comercial@hnpro.tec.br"
const QUOTE_COUNTER_KEY = "hnprotec:orcamento:sequence"

type QuoteRequest = {
  name?: string
  company?: string
  email?: string
  whatsapp?: string
  serviceType?: string
  message?: string
  source?: string
  pageUrl?: string
}

function clean(value?: string) {
  return String(value || "").trim()
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function formatQuoteCode(sequence: number) {
  return `Orc.${String(sequence).padStart(4, "0")}`
}

function fallbackQuoteCode() {
  const now = new Date()
  const datePart = now.toISOString().replace(/[-:.TZ]/g, "").slice(0, 14)
  return `Orc.${datePart}`
}

async function getNextQuoteCode() {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN

  if (!redisUrl || !redisToken) {
    return fallbackQuoteCode()
  }

  const response = await fetch(
    `${redisUrl.replace(/\/$/, "")}/incr/${encodeURIComponent(QUOTE_COUNTER_KEY)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${redisToken}`,
      },
      cache: "no-store",
    },
  )

  if (!response.ok) {
    throw new Error("Não foi possível gerar a sequência do orçamento.")
  }

  const data = await response.json()
  const sequence = Number(data.result)

  if (!Number.isFinite(sequence) || sequence < 1) {
    throw new Error("A sequência do orçamento retornou inválida.")
  }

  return formatQuoteCode(sequence)
}

function buildEmailText(payload: Required<QuoteRequest>, quoteCode: string) {
  return `Nova solicitação de orçamento recebida.

Chave do orçamento: ${quoteCode}
Origem: ${payload.source}
Página: ${payload.pageUrl}
Data: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}

Nome: ${payload.name}
Empresa: ${payload.company || "Não informada"}
E-mail: ${payload.email}
Telefone/WhatsApp: ${payload.whatsapp}
Tipo de serviço: ${payload.serviceType}

Mensagem:
${payload.message}`
}

function buildEmailHtml(payload: Required<QuoteRequest>, quoteCode: string) {
  const rows = [
    ["Chave do orçamento", quoteCode],
    ["Origem", payload.source],
    ["Página", payload.pageUrl],
    ["Data", new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })],
    ["Nome", payload.name],
    ["Empresa", payload.company || "Não informada"],
    ["E-mail", payload.email],
    ["Telefone/WhatsApp", payload.whatsapp],
    ["Tipo de serviço", payload.serviceType],
  ]

  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.5;">
      <h1 style="font-size: 20px; margin-bottom: 16px;">Nova solicitação de orçamento</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="border: 1px solid #e5e7eb; padding: 8px; font-weight: 700; width: 190px;">${escapeHtml(label)}</td>
                  <td style="border: 1px solid #e5e7eb; padding: 8px;">${escapeHtml(value)}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
      <h2 style="font-size: 16px; margin-top: 20px;">Mensagem</h2>
      <p style="white-space: pre-wrap; background: #f9fafb; border: 1px solid #e5e7eb; padding: 12px; border-radius: 8px;">${escapeHtml(payload.message)}</p>
    </div>
  `
}

async function sendEmail(payload: Required<QuoteRequest>, quoteCode: string) {
  const resendApiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "HNPRO.TEC.BR <no-reply@hnpro.tec.br>"

  if (!resendApiKey) {
    throw new Error("Serviço de e-mail não configurado. Configure RESEND_API_KEY no ambiente de produção.")
  }

  const subject = `[${quoteCode}] Nova solicitação de orçamento - ${payload.source}`
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [CONTACT_EMAIL],
      reply_to: payload.email,
      subject,
      text: buildEmailText(payload, quoteCode),
      html: buildEmailHtml(payload, quoteCode),
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Falha ao enviar e-mail: ${error}`)
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuoteRequest
    const payload = {
      name: clean(body.name),
      company: clean(body.company),
      email: clean(body.email),
      whatsapp: clean(body.whatsapp),
      serviceType: clean(body.serviceType),
      message: clean(body.message),
      source: clean(body.source) || "site",
      pageUrl: clean(body.pageUrl) || "Não informada",
    }

    if (!payload.name || !payload.email || !payload.whatsapp || !payload.serviceType || !payload.message) {
      return NextResponse.json(
        { message: "Preencha todos os campos obrigatórios." },
        { status: 400 },
      )
    }

    const quoteCode = await getNextQuoteCode()
    await sendEmail(payload, quoteCode)

    return NextResponse.json({
      message: "Solicitação enviada com sucesso.",
      quoteCode,
    })
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Não foi possível enviar a solicitação de orçamento.",
      },
      { status: 500 },
    )
  }
}
