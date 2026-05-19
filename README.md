# HNPRO.TEC.BR - Site Institucional

Frontend institucional moderno para a HNPRO.TEC.BR, criado com React, Vite, TypeScript e Tailwind CSS.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Componentes reutilizáveis

## Requisitos

- Node.js 20 ou superior
- npm

## Instalação

```bash
npm install
```

## Executar em desenvolvimento

```bash
npm run dev
```

O Vite exibirá a URL local, normalmente `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

O build será gerado na pasta `dist/`.

## Preview do build

```bash
npm run preview
```

## Estrutura

```text
src/
  components/
  data/
  lib/
  App.tsx
  main.tsx
  index.css
```

## Formulário de contato

O formulário funciona visualmente no frontend e exibe uma mensagem de sucesso ao enviar. O código já está preparado para integração futura com uma API Node.js na rota:

```text
POST /api/contact
```

## Deploy

### Vercel

1. Envie o projeto para um repositório Git.
2. Importe o repositório na Vercel.
3. Use as configurações padrão:
   - Build command: `npm run build`
   - Output directory: `dist`

### Netlify

1. Envie o projeto para um repositório Git.
2. Importe o repositório na Netlify.
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Servidor próprio

1. Execute `npm run build`.
2. Publique o conteúdo da pasta `dist/` no servidor web.
3. Configure o servidor para redirecionar rotas para `index.html`, se futuramente houver roteamento no frontend.
