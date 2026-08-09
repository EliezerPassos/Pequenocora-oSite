export default function QuoteReelCard({ quote, name, relation }) {
  return (
    <div
      data-reel
      className="relative flex aspect-[9/16] w-[62%] shrink-0 snap-start flex-col gap-8 overflow-hidden rounded-[24px] bg-cream-50/90 p-6 shadow-soft backdrop-blur-xl sm:w-[38%] lg:w-[24%] lg:gap-8 lg:rounded-[32px] lg:p-8"
    >
      <div className="flex flex-1 flex-col gap-5">
        <svg className="h-auto w-8 text-bloom-600 lg:w-12" viewBox="0 0 72 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0 35.0671C0 19.3227 11.4505 6.26198 28.8051 0L32.0256 7.51438C27.1949 10.0192 21.1118 15.5655 16.4601 22.1853L25.2268 28.0895C30.7732 31.8466 32.2045 36.3195 32.2045 41.3291C32.2045 49.5591 24.869 56 17.1757 56C11.2716 56 7.33546 52.9585 4.47284 50.8115C1.43131 45.9808 0 40.4345 0 35.0671ZM39.0032 35.0671C39.0032 19.3227 50.4537 6.26198 67.8083 0L71.0288 7.51438C66.1981 10.0192 60.115 15.5655 55.4633 22.1853L64.23 28.0895C69.7764 31.8466 71.2077 36.3195 71.2077 41.3291C71.2077 49.5591 63.8722 56 56.1789 56C50.2748 56 46.3387 52.9585 43.476 50.8115C40.4345 45.9808 39.0032 40.4345 39.0032 35.0671Z" fill="currentColor" />
        </svg>
        <p className="text-base leading-relaxed text-ink-950 lg:text-lg">{quote}</p>
      </div>

      <div className="mt-auto text-ink-800">
        <p className="text-sm font-semibold leading-tight lg:text-base">{name}</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-600 lg:text-base">{relation}</p>
      </div>
    </div>
  )
}
