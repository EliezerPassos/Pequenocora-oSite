import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import WhatsAppIcon from '../ui/WhatsAppIcon.jsx'
import { Sun, Heart, Cloud, Star, Blob, TornEdge } from '../../assets/illustrations/index.js'
import useWhatsAppLink from '../../hooks/useWhatsAppLink.js'

export default function Hero() {
  const whatsappHref = useWhatsAppLink(
    'Olá! Gostaria de agendar uma visita ao CEI Pequeno Coração.'
  )

  return (
    <section id="inicio" className="relative overflow-hidden bg-sun-50 pb-28 pt-16 sm:pt-20">
      {/* Textura de poá sutil, reforçando a identidade da marca */}
      <div className="dots-on-light pointer-events-none absolute inset-0" aria-hidden="true" />
      {/* Decorações de fundo — puramente ilustrativas */}
      <Cloud className="pointer-events-none absolute -left-6 top-10 h-16 w-auto text-white sm:h-20" />
      <Cloud className="pointer-events-none absolute right-4 top-28 h-12 w-auto text-white sm:h-16" />
      <Star className="pointer-events-none absolute left-[8%] top-[62%] h-7 w-7 text-sun-500 sm:h-9 sm:w-9" />
      <Star className="pointer-events-none absolute right-[12%] top-16 h-5 w-5 text-bloom-400" />

      {/* Painel mobile: conteúdo ancorado no rodapé de um painel de foto em tela cheia */}
      <Container className="relative lg:hidden">
        <div className="relative min-h-[560px] overflow-hidden rounded-[32px] bg-sun-300 shadow-soft">
          {/* TODO: substituir por foto real das crianças/estrutura da creche */}
          <div className="absolute inset-0 flex items-center justify-center text-bloom-800">
            <Heart className="h-20 w-20" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-end gap-8 px-6 pb-8 pt-16">
            <div className="flex flex-col gap-2">
              <span className="font-display text-sm font-semibold text-cream-50/90">
                Itoupava Central, Blumenau/SC
              </span>
              <h1 className="text-3xl font-bold leading-tight text-cream-50">
                Da Itoupava Central pra dentro de casa: seu filho cresce a poucos minutos daqui.
              </h1>
            </div>

            <div className="flex w-full flex-col gap-3">
              <Button
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full justify-center"
              >
                <WhatsAppIcon />
                Agende uma visita
              </Button>
              <Button as="a" href="#rotina" variant="secondary" className="w-full justify-center">
                Veja um dia na Pequeno Coração
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Layout desktop: texto ao lado da ilustração */}
      <Container className="relative hidden items-center gap-14 lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col items-start gap-6 text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 font-display text-sm font-semibold text-bloom-600 shadow-soft">
            <Heart className="h-4 w-4 text-bloom-500" />
            Itoupava Central, Blumenau/SC
          </span>

          <h1 className="text-4xl font-bold leading-tight text-ink-950 lg:text-[3.2rem]">
            Da Itoupava Central pra dentro de casa: seu filho cresce a poucos minutos daqui.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-ink-600">
            No CEI Pequeno Coração, cada criança é acolhida com atenção individual, rotina
            estruturada e muito afeto — para que os pais tenham tranquilidade e os pequenos,
            momentos inesquecíveis de aprendizado.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappHref} target="_blank" rel="noopener noreferrer" variant="primary">
              <WhatsAppIcon />
              Agende uma visita
            </Button>
            <Button as="a" href="#rotina" variant="outline">
              Veja um dia na Pequeno Coração
            </Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <Blob className="absolute inset-0 h-full w-full text-bloom-200" />
          <div className="photo-sticker photo-sticker--tilt-left absolute inset-10 flex items-center justify-center bg-sun-300">
            {/* TODO: substituir por foto real das crianças/estrutura da creche */}
            <div className="flex flex-col items-center gap-3 text-bloom-800">
              <Heart className="h-20 w-20 sm:h-24 sm:w-24" />
              <span className="font-display text-sm font-semibold">
                Foto ilustrativa — em breve
              </span>
            </div>
          </div>
          <Sun className="absolute -right-3 -top-3 h-16 w-16 text-sun-500 sm:h-20 sm:w-20" />
        </div>
      </Container>

      <TornEdge className="absolute -bottom-px left-0 h-16 w-full text-cream-50" />
    </section>
  )
}
