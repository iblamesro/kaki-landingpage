import mapShot from '@/assets/screenshot-map.png'
import feedShot from '@/assets/screenshot-feed.png'

/**
 * Vraies captures d'écran de l'app Kaki, présentées dans un vrai mockup iPhone
 * (châssis + boutons en CSS) plutôt qu'en simple image arrondie.
 */

export function IPhoneFrame({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`relative w-[250px] md:w-[290px] ${className}`}>
      {/* Boutons latéraux */}
      <div className="absolute -left-[3px] top-[26%] h-6 w-[3px] rounded-l-sm bg-neutral-700" />
      <div className="absolute -left-[3px] top-[33%] h-10 w-[3px] rounded-l-sm bg-neutral-700" />
      <div className="absolute -left-[3px] top-[42%] h-10 w-[3px] rounded-l-sm bg-neutral-700" />
      <div className="absolute -right-[3px] top-[29%] h-14 w-[3px] rounded-r-sm bg-neutral-700" />

      {/* Châssis */}
      <div className="phone-shadow rounded-[3.2rem] bg-[linear-gradient(155deg,#5a5a5c,#1c1c1e_35%,#0a0a0b)] p-[3px]">
        <div className="rounded-[3.1rem] bg-black p-[8px]">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-background ring-1 ring-white/10">{children}</div>
        </div>
      </div>
    </div>
  )
}

export function Screenshot({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <IPhoneFrame className={className}>
      <img src={src} alt={alt} className="block h-auto w-full" />
    </IPhoneFrame>
  )
}

export function MapScreenshot({ className = '' }: { className?: string }) {
  return <Screenshot src={mapShot} alt="Carte Kaki de Paris avec adresses sauvegardées et filtres" className={className} />
}

export function FeedScreenshot({ className = '' }: { className?: string }) {
  return <Screenshot src={feedShot} alt="Fil d'activité Kaki montrant les adresses sauvegardées par des amis" className={className} />
}

export function Chip({ className = '', text, delay = '0s' }: { className?: string; text: string; delay?: string }) {
  return (
    <div
      className={`absolute float-slow rounded-2xl border border-border/70 bg-background/95 px-3 py-2 text-[11px] shadow-xl backdrop-blur ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle" />
      {text}
    </div>
  )
}

export function Pin({ className = '', label, delay = '0s' }: { className?: string; label: string; delay?: string }) {
  return (
    <div className={`absolute ${className}`} style={{ animationDelay: delay }}>
      <div className="relative">
        <span className="absolute inset-0 -z-10 rounded-full bg-primary/40 ring-pulse" style={{ animationDelay: delay }} />
        <div
          className="pin-pop flex items-center gap-1.5 rounded-full bg-foreground px-2.5 py-1 text-[10px] font-medium text-background shadow-lg"
          style={{ animationDelay: delay }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {label}
        </div>
      </div>
    </div>
  )
}
