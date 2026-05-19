import { useState, type FormEvent } from 'react';
import { company } from '../lib/constants';

const serviceTypes = [
  'Criação de site',
  'Landing page',
  'E-commerce simples',
  'Sistema sob encomenda',
  'Automação com IA',
  'Suporte técnico',
  'Treinamento em tecnologia',
];

export function Contact() {
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Integração futura: enviar os dados para POST /api/contact.
    // await fetch(company.contactEndpoint, { method: 'POST', body: JSON.stringify(formData) });
    setSuccess(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contato" className="section-shell">
      <div className="grid gap-10 rounded-lg border border-line bg-panel/75 p-6 shadow-glow sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:p-10">
        <div>
          <p className="eyebrow">Contato</p>
          <h2 className="section-title">Vamos transformar sua ideia em site, sistema ou automação?</h2>
          <p className="section-copy">Entre em contato e solicite uma proposta para sua empresa.</p>
          <p className="mt-6 rounded-lg border border-line bg-white/[0.045] p-4 text-sm leading-6 text-slate-300">
            O formulário já está preparado para integração futura com a rota <span className="font-semibold text-electric">{company.contactEndpoint}</span>.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label htmlFor="name" className="grid gap-2 text-sm font-semibold text-slate-200">
              Nome
              <input id="name" required name="name" className="rounded-md border border-line bg-ink/70 px-4 py-3 text-white outline-none transition focus:border-electric" />
            </label>
            <label htmlFor="company" className="grid gap-2 text-sm font-semibold text-slate-200">
              Empresa
              <input id="company" name="company" className="rounded-md border border-line bg-ink/70 px-4 py-3 text-white outline-none transition focus:border-electric" />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label htmlFor="email" className="grid gap-2 text-sm font-semibold text-slate-200">
              E-mail
              <input id="email" required type="email" name="email" className="rounded-md border border-line bg-ink/70 px-4 py-3 text-white outline-none transition focus:border-electric" />
            </label>
            <label htmlFor="whatsapp" className="grid gap-2 text-sm font-semibold text-slate-200">
              WhatsApp
              <input id="whatsapp" required name="whatsapp" className="rounded-md border border-line bg-ink/70 px-4 py-3 text-white outline-none transition focus:border-electric" />
            </label>
          </div>
          <label htmlFor="service" className="grid gap-2 text-sm font-semibold text-slate-200">
            Tipo de serviço desejado
            <select id="service" required name="service" className="rounded-md border border-line bg-ink/70 px-4 py-3 text-white outline-none transition focus:border-electric">
              <option value="">Selecione uma opção</option>
              {serviceTypes.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="message" className="grid gap-2 text-sm font-semibold text-slate-200">
            Mensagem
            <textarea id="message" required name="message" rows={5} className="resize-y rounded-md border border-line bg-ink/70 px-4 py-3 text-white outline-none transition focus:border-electric" />
          </label>
          {success && (
            <div className="rounded-md border border-electric/45 bg-electric/10 px-4 py-3 text-sm font-semibold text-cyan-100">
              Solicitação registrada. Em breve entraremos em contato.
            </div>
          )}
          <button type="submit" className="primary-button w-full">
            Enviar solicitação
          </button>
        </form>
      </div>
    </section>
  );
}
