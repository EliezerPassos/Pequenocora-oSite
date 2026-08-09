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

        {/* TODO: substituir as imagens em public/images/estrutura por fotos reais da creche */}
        <div
          ref={trackRef}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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

        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="inline-flex items-center gap-2 font-display text-sm font-semibold text-bloom-600">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 9l-4 3 4 3" />
              <path d="M16 9l4 3-4 3" />
              <path d="M4 12h16" />
            </svg>
            Arraste para o lado
          </span>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Ver estrutura anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-bloom-600 shadow-soft transition-colors hover:bg-bloom-100"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Ver próxima estrutura"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-bloom-600 shadow-soft transition-colors hover:bg-bloom-100"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
