import { Link } from 'react-router-dom'
import Container from '../ui/Container.jsx'
import { Heart, TornEdge } from '../../assets/illustrations/index.js'
import { navLinks, siteInfo } from '../../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink-950 pt-16 text-cream-100">
      <TornEdge flip className="absolute -top-px left-0 h-14 w-full text-ink-950" />
      <Container className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5 font-display text-lg font-bold text-cream-50">
            <img src="/logocoracao.jpg" alt="" className="h-10 w-10 rounded-full object-cover" />
            {siteInfo.name}
          </div>
          <p className="text-sm leading-relaxed text-cream-100/70">
            Educação infantil com carinho, segurança e aprendizado lúdico em Itoupava
            Central, Blumenau/SC.
          </p>
          <div className="flex gap-3">
            {/* TODO: confirmar links reais das redes sociais */}
            <a
              href={siteInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do CEI Pequeno Coração"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-sun-400 hover:text-ink-950"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2 .24 2.4.4a4.9 4.9 0 0 1 1.8 1.16 4.9 4.9 0 0 1 1.16 1.8c.17.44.35 1.2.4 2.4.06 1.4.07 1.8.07 5s0 3.6-.07 4.9c-.06 1.2-.24 2-.4 2.4a4.9 4.9 0 0 1-1.16 1.8 4.9 4.9 0 0 1-1.8 1.16c-.44.17-1.2.35-2.4.4-1.4.06-1.8.07-5 .07s-3.6 0-4.9-.07c-1.2-.06-2-.24-2.4-.4a4.9 4.9 0 0 1-1.8-1.16 4.9 4.9 0 0 1-1.16-1.8c-.17-.44-.35-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.24-2 .4-2.4a4.9 4.9 0 0 1 1.16-1.8A4.9 4.9 0 0 1 5.6 1.7c.44-.17 1.2-.35 2.4-.4C9.4 2.2 9.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52 0-4.76.07-.97.04-1.5.2-1.85.34-.46.18-.8.39-1.15.74-.35.35-.56.69-.74 1.15-.14.35-.3.88-.34 1.85C3.1 8.48 3.1 8.85 3.1 12s0 3.52.07 4.76c.04.97.2 1.5.34 1.85.18.46.39.8.74 1.15.35.35.69.56 1.15.74.35.14.88.3 1.85.34 1.24.07 1.61.07 4.76.07s3.52 0 4.76-.07c.97-.04 1.5-.2 1.85-.34.46-.18.8-.39 1.15-.74.35-.35.56-.69.74-1.15.14-.35.3-.88.34-1.85.07-1.24.07-1.61.07-4.76s0-3.52-.07-4.76c-.04-.97-.2-1.5-.34-1.85a3.1 3.1 0 0 0-.74-1.15 3.1 3.1 0 0 0-1.15-.74c-.35-.14-.88-.3-1.85-.34C15.52 4 15.15 4 12 4Zm0 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm4.8-2a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16Z" />
              </svg>
            </a>
            <a
              href={siteInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook do CEI Pequeno Coração"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-sun-400 hover:text-ink-950"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21.9v-8.1h2.7l.4-3.1h-3.1V8.7c0-.9.25-1.5 1.55-1.5H16.7V4.4c-.3-.04-1.28-.13-2.4-.13-2.4 0-4 1.46-4 4.15v2.32H7.6v3.1h2.7v8.1h3.2Z" />
              </svg>
            </a>
            <a
              href={siteInfo.social.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) do CEI Pequeno Coração"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-sun-400 hover:text-ink-950"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M13.8 10.6 20.6 2.8h-1.6l-5.9 6.8-4.7-6.8H2.5l7.1 10.3-7.1 8.2h1.6l6.2-7.2 5 7.2h5.9l-7.4-10.7Zm-2.2 2.5-.7-1L4.9 4h2.5l4.6 6.6.7 1 6 8.6h-2.5l-4.9-7Z" />
              </svg>
            </a>
            <a
              href={siteInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn do CEI Pequeno Coração"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-sun-400 hover:text-ink-950"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.2a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.9c0-1.41-.03-3.22-1.96-3.22-1.97 0-2.27 1.54-2.27 3.12V20H9.47V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.2-1.77 3.42 0 4.05 2.25 4.05 5.18V20Z" />
              </svg>
            </a>
          </div>
        </div>

        <nav aria-label="Links do rodapé">
          <h3 className="font-display font-bold text-cream-50">Navegação</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.href.startsWith('#') ? (
                  <a href={`/${link.href}`} className="text-cream-100/70 transition-colors hover:text-sun-300">
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href} className="text-cream-100/70 transition-colors hover:text-sun-300">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display font-bold text-cream-50">Contato</h3>
          {/* TODO: confirmar dados reais de contato e endereço */}
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-cream-100/70">
            <li>{siteInfo.address.street}</li>
            <li>
              {siteInfo.address.neighborhood} — {siteInfo.address.city}/{siteInfo.address.state}
            </li>
            <li>{siteInfo.phone}</li>
            <li>{siteInfo.email}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-cream-50">Horário</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-cream-100/70">
            {siteInfo.hours.map((item) => (
              <li key={item.day}>
                {item.day}: {item.time}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center gap-2 text-center text-xs text-cream-100/60 sm:flex-row sm:justify-between sm:text-left">
          <span>
            © {year} {siteInfo.name}. Todos os direitos reservados.
          </span>
          <span className="inline-flex items-center gap-1.5">
            Feito com <Heart className="h-3.5 w-3.5 text-sun-400" /> para a primeira infância
          </span>
        </Container>
      </div>
    </footer>
  )
}
