import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { Blob, Blocks, Heart } from '../../assets/illustrations/index.js'
import { values } from '../../data/content.js'

export default function About() {
  return (
    <section id="sobre" className="bg-cream-50 py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg order-2 lg:order-1">
            <Blob className="absolute inset-0 h-full w-full text-sun-200" />
            <div className="photo-sticker photo-sticker--tilt-right absolute inset-10 flex items-center justify-center bg-bloom-100">
              {/* TODO: substituir por foto real da equipe/fachada da creche */}
              <div className="flex flex-col items-center gap-3 text-bloom-700">
                <Blocks className="h-16 w-16" />
                <span className="font-display text-sm font-semibold">
                  Foto ilustrativa — em breve
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Sobre nós"
              title="Uma história construída com muito amor pela infância"
            />
            <p className="text-lg leading-relaxed text-ink-600">
              {/* TODO: substituir por história real da creche */}
              Fundado por educadoras apaixonadas pela primeira infância, o CEI Pequeno
              Coração nasceu do desejo de oferecer, no bairro Itoupava Central, um espaço
              onde cada criança pudesse aprender brincando, em um ambiente seguro, alegre
              e acolhedor para toda a família.
            </p>
            <p className="text-lg leading-relaxed text-ink-600">
              {/* TODO: substituir por missão real da creche */}
              Nossa missão é apoiar o desenvolvimento integral das crianças — físico,
              cognitivo, emocional e social — em parceria próxima com os pais e
              responsáveis, respeitando o ritmo único de cada pequeno.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const isPurple = index % 2 === 0
            return (
              <div
                key={value.tab}
                className="paper-card flex flex-col gap-4 p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    isPurple ? 'bg-bloom-50' : 'bg-sun-100'
                  }`}
                >
                  <Heart className={`h-6 w-6 ${isPurple ? 'text-bloom-600' : 'text-sun-600'}`} />
                </span>
                <h3 className="font-display text-lg font-bold text-bloom-700">
                  {value.tab}
                </h3>
                <p className="leading-relaxed text-ink-600">{value.description}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
