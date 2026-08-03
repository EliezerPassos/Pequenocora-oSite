// Ilustração decorativa (puramente ornamental) — por isso aria-hidden e sem alt text
export default function Sun({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="6" strokeLinecap="round">
        <line x1="60" y1="4" x2="60" y2="20" />
        <line x1="60" y1="100" x2="60" y2="116" />
        <line x1="4" y1="60" x2="20" y2="60" />
        <line x1="100" y1="60" x2="116" y2="60" />
        <line x1="20.7" y1="20.7" x2="32" y2="32" />
        <line x1="88" y1="88" x2="99.3" y2="99.3" />
        <line x1="99.3" y1="20.7" x2="88" y2="32" />
        <line x1="32" y1="88" x2="20.7" y2="99.3" />
      </g>
      <circle cx="60" cy="60" r="30" fill="currentColor" />
    </svg>
  )
}
