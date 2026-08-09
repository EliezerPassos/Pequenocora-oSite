export default function CtaReelCard({ label, to }) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      data-reel
      className="group relative flex aspect-[9/16] w-[62%] shrink-0 snap-start flex-col justify-start overflow-hidden rounded-[24px] bg-bloom-600 px-6 pb-8 pt-6 shadow-soft transition-transform duration-200 hover:-translate-y-1 sm:w-[38%] lg:w-[24%] lg:rounded-[32px] lg:px-8 lg:pb-10 lg:pt-8"
    >
      {/* TODO: substituir por foto/ilustração real de fundo do card */}
      <div className="absolute inset-0 bg-gradient-to-br from-bloom-500 to-bloom-700" />

      <div className="relative flex items-start justify-between gap-4 text-cream-50">
        <span className="font-display text-2xl font-bold leading-tight lg:text-3xl">{label}</span>
        <svg
          className="mt-1 h-8 w-8 shrink-0 transition-transform duration-300 group-hover:translate-x-1 lg:h-10 lg:w-10"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M9.30975 15.3935L14.7878 9.91549L9.47824 4.60598C9.14351 4.27124 9.14351 3.72813 9.47824 3.3934C9.81298 3.05866 10.3561 3.05866 10.6908 3.3934L16.6066 9.3092L16.6646 9.37411C16.9394 9.71078 16.9198 10.2072 16.6059 10.5211L10.5216 16.6054C10.187 16.94 9.64451 16.9405 9.30975 16.6061C8.97502 16.2713 8.97502 15.7282 9.30975 15.3935Z" fill="currentColor" />
          <path d="M16.0756 9.06074C16.5084 9.09852 16.8503 9.45875 16.8566 9.9025C16.8633 10.3758 16.4854 10.7652 16.0121 10.7719L4.01197 10.9404C3.53873 10.947 3.14933 10.5691 3.14259 10.0958C3.13592 9.62251 3.51515 9.23313 3.98849 9.22647L15.9879 9.05729L16.0756 9.06074Z" fill="currentColor" />
        </svg>
      </div>
    </a>
  )
}
