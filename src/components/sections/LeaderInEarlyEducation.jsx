import Container from '../ui/Container.jsx'
import StickyFeatureTabs from './StickyFeatureTabs.jsx'
import { TornEdge } from '../../assets/illustrations/index.js'

// Seção dedicada — pilha de cards fixos por scroll ("stacked sticky cards"),
// com identidade visual e conteúdo do CEI Pequeno Coração.
// Observação: sem overflow-hidden aqui de propósito — position: sticky nos
// cards filhos (StickyFeatureTabs) só funciona se nenhum ancestral cortar o overflow.
export default function LeaderInEarlyEducation() {
  return (
    <section id="referencia-em-cuidado" className="relative bg-cream-50 py-20 sm:py-28">
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
