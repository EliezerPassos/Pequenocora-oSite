// Forma orgânica de fundo (mancha "blob"), usada atrás de imagens/cards para fugir do visual quadrado corporativo
export default function Blob({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M45.4 -58.2C57.9 -49.6 65.7 -34.5 69.6 -18.6C73.5 -2.7 73.5 14 67 27.6C60.6 41.2 48.7 51.6 35 59.6C21.3 67.6 5.7 73.1 -10.9 74.9C-27.5 76.7 -55 74.7 -68.9 61.5C-82.8 48.2 -83 23.7 -78.9 2.4C-74.7 -18.9 -66.2 -37 -52.6 -46.5C-39.1 -56 -20.5 -57 -2 -55.8C16.6 -54.6 33.1 -66.9 45.4 -58.2Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}
