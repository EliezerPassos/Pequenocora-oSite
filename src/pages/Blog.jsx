import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import VideoReelCarousel from '../components/ui/VideoReelCarousel.jsx'
import VideoModal from '../components/ui/VideoModal.jsx'
import { Star, TornEdge } from '../assets/illustrations/index.js'
import { biaPlaylist } from '../data/content.js'
import { blogPosts } from '../data/blog.js'

const coverClasses = {
  bloom: 'bg-bloom-100 text-bloom-700',
  sun: 'bg-sun-100 text-sun-700',
}

export default function Blog() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <>
      <section className="relative overflow-hidden bg-bloom-700 pb-20 pt-16 sm:pb-24 sm:pt-20">
        <div className="dots-on-dark pointer-events-none absolute inset-0" aria-hidden="true" />
        <Star className="pointer-events-none absolute right-10 top-14 h-7 w-7 text-sun-300 sm:h-9 sm:w-9" />
        <Container className="relative">
          <SectionHeading
            light
            eyebrow="Momento com a Bia"
            title="Vídeos e artigos sobre a primeira infância, direto da nossa equipe"
            description="Um espaço só nosso para falar sobre birra, sono, alimentação, limites e tudo que faz parte de criar uma criança pequena — com carinho e sem julgamento."
          />
        </Container>
        <TornEdge className="absolute -bottom-px left-0 h-16 w-full text-cream-50" />
      </section>

      <section className="bg-cream-50 py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold text-bloom-700">Playlist de vídeos</h2>
          <div className="mt-8">
            <VideoReelCarousel videos={biaPlaylist} onPlay={setActiveVideo} />
          </div>
        </Container>
      </section>

      <section className="bg-bloom-50 py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold text-bloom-700">Artigos</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="paper-card group flex flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-1"
              >
                {/* TODO: substituir pela imagem de capa real do post */}
                <div
                  className={`flex aspect-[4/3] items-center justify-center ${coverClasses[post.cover]}`}
                >
                  <span className="font-display text-sm font-semibold">Capa — em breve</span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-sun-600">
                    {post.category} · {post.readTime} de leitura
                  </span>
                  <h3 className="font-display text-lg font-bold text-bloom-700 group-hover:text-bloom-600">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-600">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  )
}
