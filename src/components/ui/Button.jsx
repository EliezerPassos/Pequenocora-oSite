const variants = {
  primary:
    'bg-bloom-600 text-cream-50 hover:bg-bloom-700 focus-visible:outline-bloom-700',
  secondary:
    'bg-sun-400 text-ink-950 hover:bg-sun-500 focus-visible:outline-sun-600',
  outline:
    'bg-transparent text-bloom-700 border-2 border-bloom-600 hover:bg-bloom-50 focus-visible:outline-bloom-700',
}

export default function Button({
  as: Tag = 'a',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-display font-semibold shadow-soft transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-0 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
