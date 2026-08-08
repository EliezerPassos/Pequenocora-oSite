import { useEffect, useState } from 'react'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import WhatsAppIcon from '../ui/WhatsAppIcon.jsx'
import { navLinks, siteInfo } from '../../data/content.js'
import useWhatsAppLink from '../../hooks/useWhatsAppLink.js'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappHref = useWhatsAppLink()

  // Fecha o menu mobile ao redimensionar para desktop, evitando estado "aberto" preso
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-bloom-100 bg-cream-50/95 backdrop-blur-sm">
      <Container className="flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5 font-display text-lg font-bold text-bloom-700">
          <img src="/logocoracao.jpg" alt="" className="h-11 w-11 shrink-0 rounded-full object-cover" />
          <span className="leading-tight">
            {siteInfo.name}
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-medium text-ink-800 transition-colors hover:text-bloom-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="text-sm"
          >
            <WhatsAppIcon />
            Fale conosco
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-bloom-700 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </Container>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navegação mobile"
          className="border-t border-bloom-100 bg-cream-50 lg:hidden"
        >
          <ul className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-3 py-3 font-medium text-ink-800 hover:bg-bloom-50 hover:text-bloom-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <Button
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="w-full"
              >
                <WhatsAppIcon />
                Fale conosco
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
