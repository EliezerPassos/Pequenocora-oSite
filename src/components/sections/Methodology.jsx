import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { Sun, Star, TornEdge } from '../../assets/illustrations/index.js'
import { ageGroups, dailyRoutine } from '../../data/content.js'

export default function Methodology() {
  return (
    <section id="metodologia" className="relative overflow-hidden bg-bloom-700 py-24 sm:py-28">
      <div className="dots-on-dark pointer-events-none absolute inset-0" aria-hidden="true" />
      <Sun className="pointer-events-none absolute -right-8 top-24 h-28 w-28 text-bloom-600/60" />
      <Star className="pointer-events-none absolute left-10 bottom-16 h-8 w-8 text-sun-300/70" />

      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Proposta pedagógica"
          title="Aprender brincando, em cada fase da infância"
          description="Nossa metodologia respeita as particularidades de cada faixa etária, com atividades que estimulam a autonomia, a criatividade e o convívio social."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ageGroups.map((group) => (
            <div
              key={group.range}
              className="flex flex-col gap-3 rounded-3xl bg-bloom-600/50 p-7 ring-1 ring-white/10 backdrop-blur-sm"
            >
              <span className="font-display text-sm font-bold uppercase tracking-wide text-sun-300">
                {group.ages}
              </span>
              <h3 className="font-display text-xl font-bold text-cream-50">
                {group.range}
              </h3>
              <p className="leading-relaxed text-cream-100/85">{group.description}</p>
            </div>
          ))}
        </div>

        <div className="paper-card mt-16 p-7 sm:p-10">
          <h3 className="font-display text-2xl font-bold text-bloom-700">
            Rotina diária
          </h3>
          <ol className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {dailyRoutine.map((item) => (
              <li key={item.time} className="flex items-baseline gap-4">
                <span className="font-display text-lg font-bold text-sun-600">
                  {item.time}
                </span>
                <span className="text-ink-800">{item.activity}</span>
              </li>
            ))}
          </ol>
        </div>
      </Container>

      <TornEdge className="absolute -bottom-px left-0 h-16 w-full text-cream-50" />
    </section>
  )
}
