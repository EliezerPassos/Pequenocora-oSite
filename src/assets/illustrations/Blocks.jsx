// Ícone de blocos de montar — remete a brinquedos educativos
export default function Blocks({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="10" y="46" width="36" height="36" rx="8" fill="currentColor" />
      <rect x="54" y="46" width="36" height="36" rx="8" fill="currentColor" opacity="0.55" />
      <rect x="32" y="10" width="36" height="36" rx="8" fill="currentColor" opacity="0.8" />
    </svg>
  )
}
