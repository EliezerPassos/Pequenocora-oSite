import { useState } from 'react'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'
import WhatsAppIcon from '../ui/WhatsAppIcon.jsx'
import { siteInfo } from '../../data/content.js'

const initialForm = { name: '', phone: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // TODO: integrar com um serviço real de envio (ex.: Formspree, EmailJS) ou backend próprio.
  // Por enquanto, o formulário encaminha os dados preenchidos via WhatsApp.
  const handleSubmit = (event) => {
    event.preventDefault()
    const text = [
      'Olá! Gostaria de mais informações sobre matrículas.',
      `Nome: ${form.name}`,
      `Telefone: ${form.phone}`,
      form.email && `E-mail: ${form.email}`,
      form.message && `Mensagem: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n')

    const url = `https://wa.me/${siteInfo.whatsappNumber}?${new URLSearchParams({ text }).toString()}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section id="contato" className="bg-sun-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Matrículas e contato"
          title="Vamos conversar sobre o futuro do seu filho?"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            noValidate={false}
            className="flex flex-col gap-5 rounded-3xl bg-white p-7 shadow-soft sm:p-9 lg:col-span-3"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="font-display text-sm font-semibold text-bloom-700">
                Nome completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                className="rounded-xl border-2 border-bloom-100 px-4 py-3 text-ink-950 outline-none transition-colors focus:border-bloom-500"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="font-display text-sm font-semibold text-bloom-700">
                  Telefone/WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="rounded-xl border-2 border-bloom-100 px-4 py-3 text-ink-950 outline-none transition-colors focus:border-bloom-500"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-display text-sm font-semibold text-bloom-700">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className="rounded-xl border-2 border-bloom-100 px-4 py-3 text-ink-950 outline-none transition-colors focus:border-bloom-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-display text-sm font-semibold text-bloom-700">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="resize-none rounded-xl border-2 border-bloom-100 px-4 py-3 text-ink-950 outline-none transition-colors focus:border-bloom-500"
              />
            </div>

            <Button as="button" type="submit" variant="primary" className="mt-2 self-start">
              <WhatsAppIcon />
              Enviar mensagem
            </Button>

            {submitted && (
              <p role="status" className="text-sm font-medium text-bloom-600">
                Obrigado! Vamos continuar a conversa pelo WhatsApp.
              </p>
            )}
          </form>

          <div className="flex flex-col justify-between gap-8 rounded-3xl bg-bloom-700 p-8 text-cream-50 shadow-soft lg:col-span-2">
            <div className="flex flex-col gap-5">
              <h3 className="font-display text-xl font-bold text-sun-300">
                Outros canais
              </h3>
              <p className="leading-relaxed text-cream-100/90">
                {/* TODO: confirmar telefone e e-mail reais */}
                Telefone: {siteInfo.phone}
                <br />
                E-mail: {siteInfo.email}
              </p>
            </div>
            <Button
              href={`https://wa.me/${siteInfo.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <WhatsAppIcon />
              Chamar no WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
