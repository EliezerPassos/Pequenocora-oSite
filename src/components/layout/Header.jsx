import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from '../ui/Container.jsx'
import { routePages, siteInfo } from '../../data/content.js'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [logoScale, setLogoScale] = useState(1)
  const [menuIconScale, setMenuIconScale] = useState(1)
  const menuRef = useRef(null)
  const { pathname } = useLocation()

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // No topo da página, o logo e o botão do menu começam bem maiores e encolhem
  // gradualmente até o tamanho normal conforme a página rola — o botão do
  // menu, além disso, "invade" a seção abaixo do header nesse estado inicial.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let frameId
    const handleScroll = () => {
      const isMobile = window.innerWidth < 640
      const progress = Math.min(window.scrollY / (isMobile ? 100 : 140), 1)

      setLogoScale(isMobile ? 1.8 - progress * 0.8 : 1)
      setMenuIconScale((isMobile ? 2.3 : 1.4) - progress * ((isMobile ? 2.3 : 1.4) - 1))
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
            className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white bg-bloom-600 text-cream-50 shadow-soft transition-[background-color,transform] duration-150 ease-out hover:bg-bloom-700"
            style={{
              transform: `scale(${menuIconScale}) rotate(${(menuIconScale - 1) * -3.5}deg)`,
              transformOrigin: 'top right',
            }}
            aria-expanded={isOpen}
            aria-controls="main-menu"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
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
                {routePages
                  .filter((link) => link.href !== pathname)
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
