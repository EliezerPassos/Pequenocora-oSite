import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { siteInfo } from '../../data/content.js'

export default function Location() {
  const { address, hours, mapEmbedSrc } = siteInfo

  return (
    <section id="localizacao" className="bg-cream-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Onde estamos"
          title="Fácil de chegar, no coração da Itoupava Central"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="overflow-hidden rounded-3xl shadow-soft lg:col-span-3">
            {/* TODO: substituir pelo endereço real no Google Maps */}
            <iframe
              src={mapEmbedSrc}
              title="Localização do CEI Pequeno Coração no mapa"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full border-0 sm:h-full sm:min-h-[360px]"
            />
          </div>

          <div className="flex flex-col gap-6 rounded-3xl bg-bloom-600 p-8 text-cream-50 shadow-soft lg:col-span-2">
            <div>
              <h3 className="font-display text-lg font-bold text-sun-300">Endereço</h3>
              {/* TODO: substituir por endereço real */}
              <p className="mt-2 leading-relaxed">
                {address.street}
                <br />
                {address.neighborhood} — {address.city}/{address.state}
                <br />
                CEP {address.zip}
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-sun-300">
                Horário de funcionamento
              </h3>
              <ul className="mt-2 space-y-1">
                {hours.map((item) => (
                  <li key={item.day} className="flex justify-between gap-4 leading-relaxed">
                    <span>{item.day}</span>
                    <span className="font-semibold">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
