import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import WhatsAppIcon from '../ui/WhatsAppIcon.jsx'
import { Sun, Heart, Cloud, Star, Blob, TornEdge } from '../../assets/illustrations/index.js'
import useWhatsAppLink from '../../hooks/useWhatsAppLink.js'

export default function Hero() {
  const whatsappHref = useWhatsAppLink()

  return (
    <section id="inicio" className="relative overflow-hidden bg-sun-50 pb-28 pt-16 sm:pt-20">
      {/* Textura de poá sutil, reforçando a identidade da marca */}
      <div className="dots-on-light pointer-events-none absolute inset-0" aria-hidden="true" />
      {/* Decorações de fundo — puramente ilustrativas */}
      <Cloud className="pointer-events-none absolute -left-6 top-10 h-16 w-auto text-white sm:h-20" />
      <Cloud className="pointer-events-none absolute right-4 top-28 h-12 w-auto text-white sm:h-16" />
      <Star className="pointer-events-none absolute left-[8%] top-[62%] h-7 w-7 text-sun-500 sm:h-9 sm:w-9" />
      <Star className="pointer-events-none absolute right-[12%] top-16 h-5 w-5 text-bloom-400" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 font-display text-sm font-semibold text-bloom-600 shadow-soft">
            <Heart className="h-4 w-4 text-bloom-500" />
            Itoupava Central, Blumenau/SC
          </span>

          <h1 className="text-4xl font-bold leading-tight text-ink-950 sm:text-5xl lg:text-[3.2rem]">
            Um lugar cheio de carinho para o seu filho crescer e descobrir o mundo
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-ink-600">
            {/* TODO: substituir por texto real de apresentação da creche */}
            No CEI Pequeno Coração, cada criança é acolhida com atenção individual, rotina
            estruturada e muito afeto — para que os pais tenham tranquilidade e os pequenos,
            momentos inesquecíveis de aprendizado.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappHref} target="_blank" rel="noopener noreferrer" variant="primary">
              <WhatsAppIcon />
              Matricule-se agora
            </Button>
            <Button as="a" href="#metodologia" variant="outline">
              Conheça nossa proposta
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
