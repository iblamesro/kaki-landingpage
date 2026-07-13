import { useEffect, useState } from 'react'
import isola from '@/assets/mood/isola.jpg'
import cafe from '@/assets/mood/cafe.jpg'
import citylife from '@/assets/mood/citylife.jpg'
import plating from '@/assets/mood/plating.jpg'
import icecream from '@/assets/mood/icecream.jpg'
import eatrich from '@/assets/mood/eatrich.jpg'

/**
 * Toutes les photos partagent le même ratio (environ 1280x853 / 1600x1067) pour que
 * le slider les affiche en entier, sans recadrage.
 */
const SLIDES = [
  { src: isola, alt: 'Table de pâtes et vin partagée au soleil' },
  { src: plating, alt: 'Un chef qui dresse une assiette en cuisine' },
  { src: cafe, alt: 'Un café parisien, thé et petits fours' },
  { src: icecream, alt: 'Deux amis qui rient avec des glaces' },
  { src: citylife, alt: 'Une rue de ville, café à la main' },
  { src: eatrich, alt: 'Un dressage de table conceptuel, fourchette et couteau' },
]

const INTERVAL_MS = 2800

export function MoodSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="border-b border-border bg-secondary/30 py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-primary">L'ambiance</p>
        <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Bonne table, entre amis.</h2>
      </div>

      <div className="relative mt-12 aspect-[1280/853] w-full overflow-hidden">
        {SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {SLIDES.map((slide, i) => (
          <span key={slide.src} className={`h-1.5 w-1.5 rounded-full transition-colors ${i === index ? 'bg-primary' : 'bg-border'}`} />
        ))}
      </div>
    </section>
  )
}
