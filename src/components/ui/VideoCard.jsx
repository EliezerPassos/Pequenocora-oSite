import { Heart } from '../../assets/illustrations/index.js'

export function PlayButton({ className = '', size = 'h-16 w-16' }) {
  return (
    <span
      className={`flex ${size} items-center justify-center rounded-full bg-sun-400 text-ink-950 shadow-soft transition-transform duration-200 group-hover:scale-110 ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  )
}

export default function VideoCard({ video, index = 0, onPlay }) {
  return (
    <button
      type="button"
      onClick={() => video.youtubeId && onPlay(video)}
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
        <h3 className="font-display text-base font-bold text-bloom-700">{video.title}</h3>
        <p className="text-sm leading-relaxed text-ink-600">{video.description}</p>
      </div>
    </button>
  )
}
