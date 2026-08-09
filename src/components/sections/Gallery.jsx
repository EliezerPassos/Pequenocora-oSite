import { useRef } from 'react'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { galleryItems } from '../../data/content.js'

export default function Gallery() {
  const trackRef = useRef(null)

  const scrollByCard = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-card]')
    const amount = card ? card.offsetWidth + 24 : 300
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <section id="estrutura" className="bg-cream-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Nossa estrutura"
          title="Um espaço pensado para o mundo das crianças"
          description="Salas amplas, seguras e coloridas, pensadas para estimular a curiosidade e o bem-estar dos pequenos em cada fase."
        />

        <div className="relative mt-14">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {galleryItems.map((item, index) => (
              <figure
                key={item.label}
                data-card
                className={`photo-sticker group w-[78%] shrink-0 snap-start overflow-hidden bg-white transition-transform duration-200 hover:scale-[1.02] sm:w-[45%] lg:w-[30%] ${
                  index % 2 === 0 ? 'photo-sticker--tilt-left' : 'photo-sticker--tilt-right'
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-5 py-4 font-display font-semibold text-bloom-700">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Esfumaçado nas bordas — a próxima foto surge desfocada antes de ficar nítida */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-10 backdrop-blur-[2px] [mask-image:linear-gradient(to_right,black,transparent)] sm:w-14"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-10 backdrop-blur-[2px] [mask-image:linear-gradient(to_left,black,transparent)] sm:w-14"
          />

          {/* Dica de arrastar no mobile — bem discreta, pulsando no centro do carrossel */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center sm:hidden"
          >
            <span className="flex h-11 w-11 animate-pulse items-center justify-center rounded-full bg-ink-950/10 text-ink-950/25">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 9l-4 3 4 3" />
                <path d="M16 9l4 3-4 3" />
                <path d="M4 12h16" />
              </svg>
            </span>
          </div>

          {/* Setas de navegação — encostadas nas laterais dos cards, só em telas maiores */}
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Ver estrutura anterior"
            className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-white text-bloom-600 shadow-soft transition-colors hover:bg-bloom-100 sm:flex"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Ver próxima estrutura"
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 h-11 w-11 items-center justify-center rounded-full bg-white text-bloom-600 shadow-soft transition-colors hover:bg-bloom-100 sm:flex"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <div className="mt-6 hidden items-center justify-center sm:flex">
          <span className="inline-flex items-center gap-2 font-display text-sm font-semibold text-bloom-600">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 9l-4 3 4 3" />
              <path d="M16 9l4 3-4 3" />
              <path d="M4 12h16" />
            </svg>
            Arraste para o lado
          </span>
        </div>
      </Container>
    </section>
  )
}
