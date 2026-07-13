import saraPhoto from '@/assets/sara.jpg'

export const SARA_LINKEDIN = 'https://www.linkedin.com/in/sara-ben-abdelkader/'
export const SARA_NAME = 'Sara Ben Abdelkader'

export function FounderPhoto({ className = '' }: { className?: string }) {
  return (
    <img
      src={saraPhoto}
      alt={`${SARA_NAME}, fondatrice de Kaki`}
      className={`aspect-square rounded-full object-cover phone-shadow ${className}`}
    />
  )
}

export function FounderNameLink({ className = '' }: { className?: string }) {
  return (
    <a
      href={SARA_LINKEDIN}
      target="_blank"
      rel="noreferrer"
      className={`underline decoration-primary decoration-2 underline-offset-4 hover:text-primary ${className}`}
    >
      {SARA_NAME}
    </a>
  )
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function LinkedInButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={SARA_LINKEDIN}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground transition hover:border-primary hover:text-primary ${className}`}
    >
      <LinkedInIcon />
      Connecter sur LinkedIn
    </a>
  )
}
