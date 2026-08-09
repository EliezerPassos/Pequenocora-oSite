import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'
import WhatsAppIcon from '../ui/WhatsAppIcon.jsx'
import useWhatsAppLink from '../../hooks/useWhatsAppLink.js'
import { siteInfo } from '../../data/content.js'

export default function Contact() {
  const scheduleVisitLink = useWhatsAppLink('Gostaria de agendar uma visita, vim pelo Site')

  return (
    <section id="contato" className="bg-sun-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Matrículas e contato"
          title="Vamos conversar sobre o futuro do seu filho?"
        />

        <div className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-6 rounded-3xl bg-bloom-700 p-8 text-center text-cream-50 shadow-soft sm:p-10">
          <div className="flex flex-col gap-2">
            {/* TODO: confirmar telefone e e-mail reais */}
            <p className="leading-relaxed text-cream-100/90">
              Telefone: {siteInfo.phone}
              <br />
              E-mail: {siteInfo.email}
            </p>
          </div>
          <Button
            href={scheduleVisitLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <WhatsAppIcon />
            Agende uma visita
          </Button>
        </div>
      </Container>
    </section>
  )
}
