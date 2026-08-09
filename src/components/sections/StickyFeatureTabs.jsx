import { useEffect, useRef, useState } from 'react'
import { Heart, Blocks, Sun, Star } from '../../assets/illustrations/index.js'
import { values } from '../../data/content.js'

const icons = { Heart, Blocks, Sun, Star }

// Bloco de "abas fixas por scroll" — inspirado no padrão de sticky-scroll-tabs usado em
// sites como o da Primrose Schools (mecânica recriada; texto e imagens são nossos).
// Usa IntersectionObserver (em vez de listener de scroll) para não conflitar com o
// scroll suave (Lenis) do site nem forçar recálculos de layout a cada frame.
export default function StickyFeatureTabs() {
  const markerRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index)
            setActiveIndex(index)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    markerRefs.current.forEach((marker) => marker && observer.observe(marker))
    return () => observer.disconnect()
  }, [])

  const handleTabClick = (index) => {
    setActiveIndex(index)
    markerRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const active = values[activeIndex]
  const ActiveIcon = icons[active.icon]
  const isPurple = active.color === 'bloom'

  return (
    <div className="relative h-[2400px] lg:h-[2560px]">
      {/* Marcadores invisíveis: cada um ocupa uma fatia do scroll e ativa sua aba
          correspondente quando cruza o centro da tela — em qualquer tamanho de tela,
          o scroll é "travado" nessa seção até passar pelos 4 cards. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {values.map((value, index) => (
          <div
            key={value.tab}
            ref={(el) => (markerRefs.current[index] = el)}
            data-index={index}
            style={{ height: `${100 / values.length}%` }}
          />
        ))}
      </div>

      <div className="sticky top-[100px] lg:top-[120px]">
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-full bg-bloom-50 p-2 lg:mx-auto lg:w-fit">
          {values.map((value, index) => (
            <button
              key={value.tab}
              type="button"
              onClick={() => handleTabClick(index)}
              aria-pressed={index === activeIndex}
              className={`shrink-0 rounded-full px-4 py-3 font-display text-sm font-semibold transition-colors duration-300 ${
                index === activeIndex
                  ? 'bg-bloom-600 text-cream-50 shadow-soft'
                  : 'bg-transparent text-bloom-700 hover:bg-bloom-100'
              }`}
            >
              {value.tab}
            </button>
          ))}
        </div>

        {/* Foto e card sobrepostos — a foto ocupa o painel inteiro por trás,
            e o card de texto flutua por cima, alinhado à esquerda (igual à referência) */}
        <div className="relative mt-8 lg:min-h-[560px]">
          <div className="relative overflow-hidden rounded-[32px] lg:absolute lg:inset-y-0 lg:right-0 lg:left-[300px]">
            {/* TODO: substituir pela foto real correspondente a cada diferencial */}
            <div
              className={`flex aspect-[4/3] h-full w-full items-center justify-center lg:aspect-auto ${
                isPurple ? 'bg-bloom-200' : 'bg-sun-300'
              }`}
            >
              <div className="flex flex-col items-center gap-3 text-bloom-800">
                <ActiveIcon className="h-16 w-16" />
                <span className="font-display text-sm font-semibold">Foto ilustrativa — em breve</span>
              </div>
            </div>
          </div>

          <div
            className={`paper-card relative z-10 mt-6 flex flex-col gap-4 p-8 sm:p-10 lg:mt-0 lg:max-w-[380px] lg:self-start ${
              isPurple ? 'bg-bloom-50' : 'bg-sun-50'
            }`}
          >
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                isPurple ? 'bg-bloom-600 text-cream-50' : 'bg-sun-400 text-ink-950'
              }`}
            >
              <ActiveIcon className="h-7 w-7" />
            </span>
            <h3 className="font-display text-2xl font-bold text-bloom-700">{active.title}</h3>
            <p className="text-lg leading-relaxed text-ink-600">{active.description}</p>
            <a
              href={active.ctaHref}
              className="mt-2 inline-flex w-fit items-center gap-1.5 font-display text-sm font-bold text-bloom-600 hover:text-bloom-700"
            >
              {active.ctaLabel}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
