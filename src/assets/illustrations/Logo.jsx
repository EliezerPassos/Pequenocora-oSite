// TODO: substituir por logo real da creche
export default function Logo({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo do CEI Pequeno Coração"
    >
      <circle cx="24" cy="24" r="24" className="fill-sun-400" />
      <path
        className="fill-bloom-600"
        d="M24 37c-.7 0-1.4-.2-1.9-.7C15.5 30.5 11 26.4 11 20.2 11 15.7 14.6 12 19 12c2 0 3.9.9 5 2.4 1.1-1.5 3-2.4 5-2.4 4.4 0 8 3.7 8 8.2 0 6.2-4.5 10.3-11.1 16.1-.5.5-1.2.7-1.9.7Z"
      />
    </svg>
  )
}
