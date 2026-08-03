// Divisor ondulado entre seções — substitui a linha reta de corte típica de templates genéricos
export default function WaveDivider({ className = '', flip = false }) {
  return (
    <svg
      className={`${className} ${flip ? 'rotate-180' : ''}`}
      viewBox="0 0 1440 80"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0 32C240 72 480 72 720 48C960 24 1200 8 1440 32V80H0V32Z"
      />
    </svg>
  )
}
