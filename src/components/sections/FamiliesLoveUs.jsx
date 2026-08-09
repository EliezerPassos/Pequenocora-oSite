import { useState } from 'react'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import VideoReelCarousel from '../ui/VideoReelCarousel.jsx'
import VideoModal from '../ui/VideoModal.jsx'
import { TornEdge } from '../../assets/illustrations/index.js'
import { testimonials } from '../../data/content.js'

// Seção dedicada — recria a mecânica de carrossel de vídeos em retrato do
// bloco "Parents Love Primrose" do site da Primrose Schools, com vídeos
// placeholder e famílias do CEI Pequeno Coração.
export default function FamiliesLoveUs() {
  const [activeVideo, setActiveVideo] = useState(null)

  // TODO: vídeo de teste neutro (CC0) só para visualizar o layout — trocar por
  // videoSrc real de cada família assim que a gravação/autorização estiver pronta.
  const videos = testimonials.map((item, index) =>
    index < 2
      ? {
          title: item.name,
          videoSrc: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        }
      : {
          title: item.name,
          subtitle: item.relation,
          quote: item.quote,
        }
  )

  return (
    <section id="familias-recomendam" className="relative overflow-hidden bg-bloom-700 py-20 sm:py-28">
      <TornEdge className="absolute -top-px left-0 h-16 w-full rotate-180 text-cream-50" />
      <Container>
        <SectionHeading
          light
          eyebrow="Famílias Pequeno Coração"
          title={
            <>
              <span className="font-normal">Porque as Famílias Amam a </span>
              <span className="font-bold">Pequeno Coração</span>
            </>
          }
          description="Em breve, vídeos reais das nossas famílias contando como é fazer parte da nossa comunidade."
        />

        <div className="mt-12">
          <VideoReelCarousel videos={videos} onPlay={setActiveVideo} />
        </div>
      </Container>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />

      <TornEdge className="absolute -bottom-px left-0 h-16 w-full text-cream-50" />
    </section>
  )
}
