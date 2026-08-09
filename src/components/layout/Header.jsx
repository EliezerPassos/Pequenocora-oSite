import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../ui/Container.jsx'
import { navLinks, siteInfo } from '../../data/content.js'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [logoScale, setLogoScale] = useState(1)
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

  // No mobile, o ícone começa bem maior no topo da página e encolhe até o
  // tamanho normal nos primeiros ~100px de scroll — só nessa faixa de tela.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let frameId
    const handleScroll = () => {
      if (window.innerWidth >= 640) {
        setLogoScale(1)
        return
      }
      const progress = Math.min(window.scrollY / 100, 1)
      setLogoScale(1.8 - progress * 0.8)
    }
    const onScroll = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(handleScroll)
    }

    handleScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-bloom-100 bg-cream-50/95 backdrop-blur-sm">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-bold text-bloom-700">
          <img
            src="/logocoracao.jpg"
            alt=""
            className="h-11 w-11 shrink-0 rounded-full object-cover transition-transform duration-150 ease-out"
            style={{ transform: `scale(${logoScale})`, transformOrigin: 'left center' }}
          />
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
                {navLinks
                  .filter((link) => !link.href.startsWith('#'))
                  .map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-xl px-3 py-2.5 font-medium text-ink-800 hover:bg-bloom-50 hover:text-bloom-700"
                      >
                        {link.label}
                      </Link>
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
