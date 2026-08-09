import { useRef } from 'react'
import { PlayButton } from './VideoCard.jsx'
import QuoteReelCard from './QuoteReelCard.jsx'
import CtaReelCard from './CtaReelCard.jsx'
import { Heart } from '../../assets/illustrations/index.js'

// Carrossel de vídeos em formato retrato, inspirado no bloco "Parents Love Primrose"
// (mecânica de carrossel recriada; vídeos são placeholders temporários nossos).
export default function VideoReelCarousel({ videos, onPlay }) {
  const trackRef = useRef(null)

  const scrollByCard = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-reel]')
    const amount = card ? card.offsetWidth + 20 : 260
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {videos.map((video, index) =>
          video.cta ? (
            <CtaReelCard key={video.title} label={video.title} to={video.ctaHref} />
          ) : video.quote ? (
            <QuoteReelCard
              key={video.title}
              quote={video.quote}
              name={video.title}
              relation={video.subtitle}
            />
          ) : (
          <button
            key={video.title}
            type="button"
            data-reel
            onClick={() => (video.youtubeId || video.videoSrc) && onPlay(video)}
            className={`group relative aspect-[9/16] w-[62%] shrink-0 snap-start overflow-hidden rounded-[24px] shadow-soft transition-transform duration-200 hover:-translate-y-1 sm:w-[38%] lg:w-[24%] ${
              video.youtubeId || video.videoSrc ? 'cursor-pointer' : 'cursor-default'
            } ${index % 2 === 0 ? 'bg-bloom-600' : 'bg-bloom-500'}`}
          >
            {video.videoSrc ? (
              // TODO: vídeo de teste neutro — trocar por `video.videoSrc` real da família
              // assim que a gravação/autorização estiver pronta.
              <video
                src={video.videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : video.youtubeId ? (
              // TODO: placeholder temporário do canal @LittleScholarsChannel — trocar pela
              // thumbnail/vídeo real assim que a Bia gravar o material próprio.
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="h-10 w-10 text-cream-50/70" />
              </div>
            )}
            {!video.videoSrc && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/15 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 p-4 text-left">
                  <span className="font-display text-sm font-bold text-cream-50">{video.title}</span>
                  {video.subtitle && (
                    <span className="text-xs text-cream-100/80">{video.subtitle}</span>
                  )}
                </span>
              </>
            )}
            <PlayButton className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size="h-14 w-14" />
            {!video.youtubeId && !video.videoSrc && (
              <span className="absolute right-3 top-3 rounded-full bg-ink-950/70 px-2.5 py-1 font-display text-xs font-semibold text-cream-50">
                Em breve
              </span>
            )}
          </button>
          )
        )}
      </div>

      <div className="mt-4 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Vídeo anterior"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-bloom-600 shadow-soft transition-colors hover:bg-bloom-100"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Próximo vídeo"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-bloom-600 shadow-soft transition-colors hover:bg-bloom-100"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
