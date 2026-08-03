import { useRef } from 'react'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { Heart } from '../../assets/illustrations/index.js'
import { testimonials } from '../../data/content.js'

export default function Testimonials() {
  const trackRef = useRef(null)

  const scrollByCard = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-card]')
    const amount = card ? card.offsetWidth + 24 : 320
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <section id="depoimentos" className="bg-bloom-50 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Depoimentos"
            title="Quem confia, recomenda"
            description="Histórias reais de famílias que fazem parte da nossa comunidade."
          />
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Ver depoimento anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-bloom-600 shadow-soft transition-colors hover:bg-bloom-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-bloom-600"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Ver próximo depoimento"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-bloom-600 shadow-soft transition-colors hover:bg-bloom-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-bloom-600"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              data-card
              className="w-[85%] shrink-0 snap-start rounded-3xl bg-white p-7 shadow-soft sm:w-[45%] lg:w-[31%]"
            >
              <Heart className="h-7 w-7 text-sun-500" />
              <p className="mt-4 text-lg leading-relaxed text-ink-800">
                {/* TODO: substituir por depoimento real (com autorização da família) */}
                “{item.quote}”
              </p>
              <footer className="mt-5 font-display font-bold text-bloom-700">
                {item.name}
                <span className="block font-body text-sm font-normal text-ink-600">
                  {item.relation}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  )
}
