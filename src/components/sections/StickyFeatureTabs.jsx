import { Heart, Blocks, Sun, Star } from '../../assets/illustrations/index.js'
import { values } from '../../data/content.js'

const icons = { Heart, Blocks, Sun, Star }

// Pilha de cards fixos por scroll ("stacked sticky cards"): cada card gruda
// (position: sticky) num offset ligeiramente maior que o anterior conforme a
// página rola, então o próximo card sobe e cobre o de cima, deixando uma
// "espiada" (peek) da pilha por trás. 100% CSS (sticky + z-index) — sem JS
// controlando posição, então funciona igual com mouse, trackpad e touch.
export default function StickyFeatureTabs() {
  return (
    <div className="relative">
      {values.map((value, index) => {
        const Icon = icons[value.icon]
        const isPurple = value.color === 'bloom'

        return (
          <div
            key={value.tab}
            className="sticky flex h-dvh items-center justify-center py-3 sm:py-4"
            style={{ top: `${72 + index * 16}px`, zIndex: index + 1 }}
          >
            <article className="relative flex h-[78dvh] w-full max-w-4xl flex-col justify-end overflow-hidden rounded-[28px] shadow-soft sm:h-[82dvh] sm:rounded-[32px] lg:h-[85dvh]">
              <img
                src={value.photo}
                alt=""
                loading={index === 0 ? 'eager' : 'lazy'}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/35 to-transparent" />

              <div className="relative flex flex-col gap-2.5 p-6 sm:gap-4 sm:p-10 lg:max-w-xl lg:p-12">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl sm:h-14 sm:w-14 ${
                    isPurple ? 'bg-bloom-600 text-cream-50' : 'bg-sun-400 text-ink-950'
                  }`}
                >
                  <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
                </span>
                <span className="font-display text-xs font-bold uppercase tracking-wider text-sun-300 sm:text-sm">
                  {value.tab}
                </span>
                <h3 className="font-display text-xl font-bold leading-tight text-cream-50 sm:text-2xl lg:text-3xl">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream-100/90 sm:text-base lg:text-lg">
                  {value.description}
                </p>
                <a
                  href={value.ctaHref}
                  className="mt-1 inline-flex w-fit items-center gap-1.5 font-display text-sm font-bold text-cream-50 underline decoration-2 underline-offset-4 transition-colors hover:text-sun-300 sm:mt-2"
                >
                  {value.ctaLabel}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        )
      })}
    </div>
  )
}
