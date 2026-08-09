import { Heart, Blocks, Sun, Star } from '../../assets/illustrations/index.js'
import { values } from '../../data/content.js'

const icons = { Heart, Blocks, Sun, Star }

// Pilha de cards fixos por scroll ("stacked sticky cards"), inspirada no bloco
// "The Leader in Early Education and Care" do site da Primrose Schools: título
// e texto ficam fixos no topo do card (sempre legíveis, inclusive na "espiada"
// por trás do próximo card) e a foto ocupa uma faixa menor, embaixo. Cada card
// gruda (position: sticky) num offset ligeiramente maior que o anterior conforme
// a página rola, então o próximo sobe e cobre o de cima. 100% CSS (sticky +
// z-index) — sem JS controlando posição, então funciona igual com mouse,
// trackpad e touch.
export default function StickyFeatureTabs() {
  return (
    <div className="relative">
      {values.map((value, index) => {
        const Icon = icons[value.icon]
        const isPurple = value.color === 'bloom'
        const isLast = index === values.length - 1

        return (
          <div
            key={value.tab}
            className={`sticky flex items-start justify-center pb-3 pt-[88px] sm:pb-4 sm:pt-[104px] ${
              isLast ? 'h-svh' : 'h-[115svh] sm:h-[110svh]'
            }`}
            style={{ top: `${72 + index * 110}px`, zIndex: index + 1 }}
          >
            <article
              className={`flex h-[62svh] w-full max-w-4xl flex-col overflow-hidden rounded-[28px] shadow-soft sm:h-[66svh] sm:rounded-[32px] lg:h-[70svh] ${
                isPurple ? 'bg-bloom-50' : 'bg-sun-50'
              }`}
            >
              <div className="flex flex-col gap-2.5 p-6 sm:gap-3.5 sm:p-10 lg:max-w-xl lg:p-12">
                <span
                  className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wider sm:text-sm ${
                    isPurple ? 'bg-bloom-600 text-cream-50' : 'bg-sun-400 text-ink-950'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  {value.tab}
                </span>
                <h3 className="font-display text-xl font-bold leading-tight text-bloom-700 sm:text-2xl lg:text-3xl">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-600 sm:text-base lg:text-lg">
                  {value.description}
                </p>
                <a
                  href={value.ctaHref}
                  className="mt-1 inline-flex w-fit items-center gap-1.5 font-display text-sm font-bold text-bloom-600 hover:text-bloom-700 sm:mt-2"
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

              <div className="relative mt-5 h-[38%] shrink-0 sm:mt-6 sm:h-[40%] lg:mt-8 lg:h-[42%]">
                <img
                  src={value.photo}
                  alt={value.title}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </article>
          </div>
        )
      })}
    </div>
  )
}
