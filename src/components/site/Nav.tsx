import { Link } from '@tanstack/react-router'

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`font-serif text-[1.35rem] leading-none tracking-tight ${className}`}>
      kaki<span className="text-primary">.</span>
    </Link>
  )
}

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Wordmark />
        <nav className="hidden items-center gap-9 text-sm text-muted-foreground md:flex">
          <Link to="/" hash="features" className="transition hover:text-foreground">
            Le produit
          </Link>
          <Link to="/about" className="transition hover:text-foreground">
            À propos
          </Link>
          <Link to="/" hash="faq" className="transition hover:text-foreground">
            FAQ
          </Link>
          <Link to="/contact" className="transition hover:text-foreground">
            Contact
          </Link>
        </nav>
        <Link
          to="/"
          hash="cta"
          className="rounded-full bg-primary px-4 py-2 text-xs font-medium tracking-wide text-primary-foreground transition hover:opacity-90"
        >
          Rejoindre la bêta
        </Link>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <Wordmark />
          <span className="text-xs">© {new Date().getFullYear()} · Fait à Paris</span>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Link to="/about" className="hover:text-foreground">
            À propos
          </Link>
          <Link to="/contact" className="hover:text-foreground">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-foreground">
            Confidentialité
          </Link>
          <Link to="/terms" className="hover:text-foreground">
            CGU
          </Link>
        </div>
      </div>
    </footer>
  )
}
