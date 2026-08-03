export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col ${alignment} gap-3`}>
      {eyebrow && (
        <span
          className={`font-display text-sm font-bold uppercase tracking-wide ${
            light ? 'text-sun-300' : 'text-bloom-500'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-bold sm:text-4xl ${
          light ? 'text-cream-50' : 'text-bloom-700'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-lg leading-relaxed ${
            light ? 'text-cream-100/90' : 'text-ink-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
