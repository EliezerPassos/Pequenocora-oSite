import { useState } from 'react'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { Heart, Star, TornEdge } from '../../assets/illustrations/index.js'
import { biaPlaylist } from '../../data/content.js'

function PlayButton({ className = '' }) {
  return (
    <span
      className={`flex h-16 w-16 items-center justify-center rounded-full bg-sun-400 text-ink-950 shadow-soft transition-transform duration-200 group-hover:scale-110 ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  )
}

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
          description="Em breve, uma página inteira com vídeos da Bia falando sobre rotina, alimentação, brincadeiras e os cuidados da primeira infância. Comece pelos primeiros episódios."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {biaPlaylist.map((video, index) => (
            <button
              key={video.title}
              type="button"
              onClick={() => video.youtubeId && setActiveVideo(video)}
              className={`paper-card group flex flex-col overflow-hidden text-left transition-transform duration-200 hover:-translate-y-1 ${
                video.youtubeId ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <div
                className={`relative flex aspect-video items-center justify-center overflow-hidden ${
                  index % 2 === 0 ? 'bg-bloom-600' : 'bg-bloom-500'
                }`}
              >
                {video.youtubeId ? (
                  // TODO: placeholder temporário do canal @LittleScholarsChannel — trocar
                  // pela thumbnail real (`https://img.youtube.com/vi/SEU_ID/hqdefault.jpg`)
                  // assim que a Bia gravar o vídeo próprio.
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                  />
                ) : (
                  <Heart className="h-10 w-10 text-cream-50/70" />
                )}
                <div className="absolute inset-0 bg-ink-950/25" />
                <PlayButton className="absolute" />
                {!video.youtubeId && (
                  <span className="absolute bottom-2 right-2 rounded-full bg-ink-950/70 px-2.5 py-1 font-display text-xs font-semibold text-cream-50">
                    Em breve
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1.5 p-5">
                <h3 className="font-display text-base font-bold text-bloom-700">
                  {video.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-600">{video.description}</p>
              </div>
            </button>
          ))}
        </div>
      </Container>

      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/80 p-5"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="aspect-video w-full max-w-3xl overflow-hidden rounded-3xl shadow-soft"
            onClick={(event) => event.stopPropagation()}
          >
            {/* TODO: trocar pela URL real do vídeo (embed do YouTube) assim que publicado */}
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}`}
              title={activeVideo.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            aria-label="Fechar vídeo"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-ink-950"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      )}

      <TornEdge className="absolute -bottom-px left-0 h-16 w-full text-cream-50" />
    </section>
  )
}
