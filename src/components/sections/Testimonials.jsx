import { useState } from 'react'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import VideoReelCarousel from '../ui/VideoReelCarousel.jsx'
import VideoModal from '../ui/VideoModal.jsx'
import { testimonials } from '../../data/content.js'

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null)

  const videos = testimonials.map((item) => ({
    title: item.name,
    subtitle: item.relation,
    youtubeId: item.youtubeId,
  }))

  return (
    <section id="depoimentos" className="bg-bloom-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Depoimentos"
          title="Quem confia, recomenda"
          description="Histórias reais de famílias que fazem parte da nossa comunidade."
        />

        <div className="mt-12">
          <VideoReelCarousel videos={videos} onPlay={setActiveVideo} />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="paper-card p-5">
              <p className="text-sm leading-relaxed text-ink-800">“{item.quote}”</p>
              <footer className="mt-3 font-display text-sm font-bold text-bloom-700">
                {item.name}
                <span className="block font-body text-xs font-normal text-ink-600">
                  {item.relation}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  )
}
