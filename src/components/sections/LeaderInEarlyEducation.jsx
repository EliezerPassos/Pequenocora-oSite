import Container from '../ui/Container.jsx'
import StickyFeatureTabs from './StickyFeatureTabs.jsx'
import { TornEdge } from '../../assets/illustrations/index.js'

// Seção dedicada — recria a mecânica de "abas fixas por scroll" do bloco
// "The Leader in Early Education and Care" do site da Primrose Schools,
// com identidade visual e conteúdo do CEI Pequeno Coração.
export default function LeaderInEarlyEducation() {
  return (
    <section id="referencia-em-cuidado" className="relative overflow-hidden bg-cream-50 py-20 sm:py-28">
      <Container>
        <h2 className="text-center font-display text-2xl font-bold text-bloom-700 sm:text-3xl">
          Referência em educação infantil na Itoupava Central
        </h2>

        <div className="mt-14">
          <StickyFeatureTabs />
        </div>
      </Container>

      <TornEdge className="absolute -bottom-px left-0 h-16 w-full text-bloom-700" />
    </section>
  )
}
