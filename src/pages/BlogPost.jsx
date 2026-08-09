import { Link, Navigate, useParams } from 'react-router-dom'
import Container from '../components/ui/Container.jsx'
import { blogPosts } from '../data/blog.js'

const coverClasses = {
  bloom: 'bg-bloom-100 text-bloom-700',
  sun: 'bg-sun-100 text-sun-700',
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <article className="bg-cream-50 py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Link to="/blog" className="font-display text-sm font-semibold text-bloom-600 hover:text-bloom-700">
          ← Voltar para o blog
        </Link>

        <span className="mt-6 block font-display text-xs font-bold uppercase tracking-wide text-sun-600">
          {post.category} · {post.readTime} de leitura
        </span>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-ink-950 sm:text-4xl">
          {post.title}
        </h1>

        {/* TODO: substituir pela imagem de capa real do post */}
        <div
          className={`paper-card mt-8 flex aspect-[16/9] items-center justify-center ${coverClasses[post.cover]}`}
        >
          <span className="font-display text-sm font-semibold">Capa — em breve</span>
        </div>

        <div className="mt-8 flex flex-col gap-5">
          {post.content.map((block, index) =>
            block.startsWith('## ') ? (
              <h2 key={index} className="font-display text-xl font-bold text-bloom-700">
                {block.replace('## ', '')}
              </h2>
            ) : (
              <p key={index} className="text-lg leading-relaxed text-ink-800">
                {block}
              </p>
            )
          )}
        </div>
      </Container>
    </article>
  )
}
