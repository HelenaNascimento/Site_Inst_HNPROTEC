# page-hnpro-tec-br

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_4qlBqN14DnwDkWlygRrmViuwPjRk)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Orçamentos por e-mail

O formulário de contato envia solicitações para:

```text
comercial@hnpro.tec.br
```

A rota responsável é:

```text
POST /api/orcamentos
```

### Variáveis de ambiente

Configure estas variáveis no ambiente de produção, por exemplo na Vercel:

```env
RESEND_API_KEY=cole_a_chave_da_resend_aqui
CONTACT_FROM_EMAIL=HNPRO.TEC.BR <no-reply@hnpro.tec.br>
UPSTASH_REDIS_REST_URL=cole_a_url_rest_do_upstash_aqui
UPSTASH_REDIS_REST_TOKEN=cole_o_token_rest_do_upstash_aqui
```

- `RESEND_API_KEY`: obrigatória para envio automático de e-mail.
- `CONTACT_FROM_EMAIL`: remetente validado no Resend. O domínio precisa estar verificado para envio em produção.
- `UPSTASH_REDIS_REST_URL` e `UPSTASH_REDIS_REST_TOKEN`: usadas para gerar a sequência global `Orc.0001`, `Orc.0002`, `Orc.0003`.

Sem o Redis configurado, o sistema gera uma chave única baseada em data e hora para evitar duplicidade, mas a sequência numérica global só é garantida com o contador persistente.

### Identificação da origem

Para identificar solicitações vindas de Instagram, anúncios ou outros canais, use links com parâmetro de origem:

```text
https://hnpro.tec.br?origem=instagram#contato
https://hnpro.tec.br?utm_source=google_ads#contato
https://hnpro.tec.br?source=indicacao#contato
```

A origem é incluída no assunto e no corpo do e-mail do orçamento.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.

<a href="https://v0.app/chat/api/kiro/clone/HelenaNascimento/page-hnpro-tec-br" alt="Open in Kiro"><img src="https://pdgvvgmkdvyeydso.public.blob.vercel-storage.com/open%20in%20kiro.svg?sanitize=true" /></a>
