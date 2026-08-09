import Container from '../components/ui/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Button from '../components/ui/Button.jsx'
import WhatsAppIcon from '../components/ui/WhatsAppIcon.jsx'
import { Heart, Blocks, Sun, Star, TornEdge } from '../assets/illustrations/index.js'
import useWhatsAppLink from '../hooks/useWhatsAppLink.js'
import { ageGroups } from '../data/content.js'

const icons = { Heart, Blocks, Sun, Star }

export default function Metodologia() {
  const whatsappHref = useWhatsAppLink(
    'Olá! Gostaria de saber mais sobre a metodologia do CEI Pequeno Coração.'
  )

  return (
    <>
      <section className="relative overflow-hidden bg-bloom-700 pb-20 pt-16 sm:pb-24 sm:pt-20">
        <div className="dots-on-dark pointer-events-none absolute inset-0" aria-hidden="true" />
        <Star className="pointer-events-none absolute right-10 top-14 h-7 w-7 text-sun-300 sm:h-9 sm:w-9" />
        <Container className="relative">
          <SectionHeading
            light
            eyebrow="Proposta pedagógica"
            title="Nossa metodologia, fase por fase"
            description="Cada turma tem particularidades próprias. Escolha a fase abaixo e conheça como trabalhamos o desenvolvimento, a autonomia e o aprendizado de cada faixa etária."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {ageGroups.map((group) => (
              <a
                key={group.slug}
                href={`#${group.slug}`}
                className="rounded-full bg-white/10 px-4 py-2 font-display text-sm font-semibold text-cream-50 transition-colors hover:bg-white/20"
              >
                {group.range}
              </a>
            ))}
          </div>
        </Container>
        <TornEdge className="absolute -bottom-px left-0 h-16 w-full text-cream-50" />
      </section>

      {ageGroups.map((group, index) => {
        const Icon = icons[group.icon]
        const isPurple = index % 2 === 0

        return (
          <section
            key={group.slug}
            id={group.slug}
            className={`scroll-mt-24 py-16 sm:py-20 ${isPurple ? 'bg-cream-50' : 'bg-bloom-50'}`}
          >
            <Container>
              <div className="flex flex-col gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-bloom-600 text-cream-50">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="font-display text-sm font-bold uppercase tracking-wide text-bloom-500">
                  {group.ages}
                </span>
                <h2 className="font-display text-2xl font-bold text-bloom-700 sm:text-3xl">
                  {group.range}
                </h2>
                <p className="max-w-2xl text-lg leading-relaxed text-ink-600">
                  {group.longDescription}
                </p>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {group.pillars.map((pillar) => (
                  <div key={pillar.title} className="paper-card flex flex-col gap-2 p-6">
                    <h3 className="font-display text-lg font-bold text-bloom-700">
                      {pillar.title}
                    </h3>
                    <p className="leading-relaxed text-ink-600">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )
      })}

      <section className="bg-sun-50 py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-2xl font-bold text-bloom-700 sm:text-3xl">
            Ficou com alguma dúvida sobre a turma do seu filho?
          </h2>
          <Button href={whatsappHref} target="_blank" rel="noopener noreferrer" variant="primary">
            <WhatsAppIcon />
            Fale com a gente
          </Button>
        </Container>
      </section>
    </>
  )
}
