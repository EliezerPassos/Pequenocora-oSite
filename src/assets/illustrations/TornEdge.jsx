// Divisor de "papel rasgado" entre seções — reforça a estética artesanal/colagem
export default function TornEdge({ className = '', flip = false }) {
  return (
    <svg
      className={`${className} ${flip ? 'rotate-180' : ''}`}
      viewBox="0 0 1440 60"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0,6 L45,22 L90,4 L135,26 L180,10 L225,24 L270,2 L315,28 L360,8 L405,20 L450,4 L495,26 L540,12 L585,22 L630,2 L675,28 L720,6 L765,24 L810,4 L855,20 L900,8 L945,26 L990,2 L1035,22 L1080,6 L1125,28 L1170,4 L1215,20 L1260,8 L1305,24 L1350,2 L1395,20 L1440,6 L1440,60 L0,60 Z"
      />
    </svg>
  )
}
