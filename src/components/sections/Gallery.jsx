import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { galleryItems } from '../../data/content.js'

export default function Gallery() {
  return (
    <section id="estrutura" className="bg-cream-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Nossa estrutura"
          title="Um espaço pensado para o mundo das crianças"
          description="Salas amplas, seguras e coloridas, pensadas para estimular a curiosidade e o bem-estar dos pequenos em cada fase."
        />

        {/* TODO: substituir as imagens em public/images/estrutura por fotos reais da creche */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <figure
              key={item.label}
              className="group overflow-hidden rounded-3xl bg-white shadow-soft"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-5 py-4 font-display font-semibold text-bloom-700">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
