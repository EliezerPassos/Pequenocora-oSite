import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../ui/Container.jsx'
import { navLinks, siteInfo } from '../../data/content.js'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-bloom-100 bg-cream-50/95 backdrop-blur-sm">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-bold text-bloom-700">
          <img src="/logocoracao.jpg" alt="" className="h-11 w-11 shrink-0 rounded-full object-cover" />
          <span className="leading-tight">
            {siteInfo.name}
          </span>
        </Link>

        <div className="relative" ref={menuRef}>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-bloom-700 transition-colors hover:bg-bloom-50"
            aria-expanded={isOpen}
            aria-controls="main-menu"
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

          {isOpen && (
            <nav
              id="main-menu"
              aria-label="Navegação principal"
              className="absolute right-0 top-[calc(100%+12px)] w-64 rounded-2xl border border-bloom-100 bg-cream-50 p-2 shadow-soft"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('#') ? (
                      <a
                        href={`/${link.href}`}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-xl px-3 py-2.5 font-medium text-ink-800 hover:bg-bloom-50 hover:text-bloom-700"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-xl px-3 py-2.5 font-medium text-ink-800 hover:bg-bloom-50 hover:text-bloom-700"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </Container>
    </header>
  )
}
