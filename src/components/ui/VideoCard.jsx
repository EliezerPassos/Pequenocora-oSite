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
