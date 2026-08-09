import { useEffect, useRef, useState } from 'react'
import { Heart, Blocks, Sun, Star, Blob } from '../../assets/illustrations/index.js'
import { values } from '../../data/content.js'

const icons = { Heart, Blocks, Sun, Star }

// Bloco de "abas fixas por scroll" — inspirado no padrão de sticky-scroll-tabs usado em
// sites como o da Primrose Schools (mecânica recriada; texto e imagens são nossos).
export default function StickyFeatureTabs() {
  const wrapperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsDesktop(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const handleScroll = () => {
      const wrapper = wrapperRef.current
      if (!wrapper) return
      const rect = wrapper.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      if (scrollable <= 0) return
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 0.999)
      const index = Math.floor(progress * values.length)
      setActiveIndex(Math.min(Math.max(index, 0), values.length - 1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDesktop])

  const handleTabClick = (index) => {
    const wrapper = wrapperRef.current
    if (isDesktop && wrapper) {
      // Rola até o trecho do scroll correspondente, mantendo a aba clicada sincronizada
      // com o efeito de scroll (em vez de só trocar o estado, que o scroll sobrescreveria).
      const rect = wrapper.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      const targetProgress = (index + 0.5) / values.length
      window.scrollTo({ top: window.scrollY + rect.top + targetProgress * scrollable, behavior: 'smooth' })
    } else {
      setActiveIndex(index)
    }
  }

  const active = values[activeIndex]
  const ActiveIcon = icons[active.icon]
  const isPurple = active.color === 'bloom'

  return (
    <div
      ref={wrapperRef}
      className="relative lg:h-[220vh]"
    >
      <div className="lg:sticky lg:top-24">
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

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div
            className={`paper-card flex flex-col gap-4 p-8 sm:p-10 ${
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

          <div className="relative mx-auto aspect-square w-full max-w-sm">
            {/* TODO: substituir pela foto real correspondente a cada diferencial */}
            <Blob className={`absolute inset-0 h-full w-full ${isPurple ? 'text-sun-200' : 'text-bloom-200'}`} />
            <div
              className={`photo-sticker photo-sticker--tilt-left absolute inset-10 flex items-center justify-center ${
                isPurple ? 'bg-bloom-100' : 'bg-sun-300'
              }`}
            >
              <div className="flex flex-col items-center gap-3 text-bloom-800">
                <ActiveIcon className="h-16 w-16" />
                <span className="font-display text-sm font-semibold">Foto ilustrativa — em breve</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
