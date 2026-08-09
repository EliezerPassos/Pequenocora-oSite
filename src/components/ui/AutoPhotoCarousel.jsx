import { useEffect, useState } from 'react'

const photos = [
  '/Cards/pexels-julianemonarifotografia-23174613.jpg',
  '/Cards/pexels-julianemonarifotografia-23174615.jpg',
  '/Cards/pexels-pavel-danilyuk-8422169.jpg',
  '/Cards/pexels-rebornfilmes-30478351.jpg',
]

// Carrossel automático de fotos — troca sozinho a cada poucos segundos, com fade suave
export default function AutoPhotoCarousel({ className = '' }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % photos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`absolute inset-0 ${className}`}>
      {photos.map((src, photoIndex) => (
        <img
          key={src}
          src={src}
          alt=""
          loading={photoIndex === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            photoIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  )
}
