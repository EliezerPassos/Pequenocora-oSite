import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'
import VideoCard from '../ui/VideoCard.jsx'
import VideoModal from '../ui/VideoModal.jsx'
import { Star } from '../../assets/illustrations/index.js'
import { biaPlaylist } from '../../data/content.js'

export default function BiaPlaylist() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <section
      id="momento-com-a-bia"
      className="relative overflow-hidden bg-bloom-50 py-20 sm:py-28"
    >
      <Star className="pointer-events-none absolute right-8 top-10 h-7 w-7 text-sun-400 sm:h-9 sm:w-9" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Momento com a Bia"
          title="Uma playlist só nossa, sobre a rotina e o cuidado de cada dia"
          description="Em breve, uma página inteira com vídeos e artigos da Bia sobre rotina, alimentação, birra, sono e os cuidados da primeira infância. Comece pelos primeiros episódios."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {biaPlaylist.map((video, index) => (
            <VideoCard key={video.title} video={video} index={index} onPlay={setActiveVideo} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button as={Link} to="/blog" variant="outline">
            Ver Outros Vídeos do Momento com a Bia
          </Button>
        </div>
      </Container>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  )
}
