export default function VideoModal({ video, onClose }) {
  if (!video) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/80 p-5"
      onClick={onClose}
    >
      <div
        className="aspect-video w-full max-w-3xl overflow-hidden rounded-3xl shadow-soft"
        onClick={(event) => event.stopPropagation()}
      >
        {video.videoSrc ? (
          // TODO: vídeo de teste neutro — trocar por `video.videoSrc` real assim que pronto
          <video src={video.videoSrc} controls autoPlay className="h-full w-full" />
        ) : (
          // TODO: trocar pela URL real do vídeo (embed do YouTube) assim que publicado
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar vídeo"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-ink-950"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>
  )
}
