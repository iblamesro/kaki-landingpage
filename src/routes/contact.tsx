import { createFileRoute } from '@tanstack/react-router'
import { Nav, Footer } from '@/components/site/Nav'
import { useState, type InputHTMLAttributes } from 'react'

export const Route = createFileRoute('/contact')({
  component: Contact,
  head: () => ({
    meta: [
      { title: 'Contact · Kaki' },
      { name: 'description', content: "Contactez l'équipe Kaki : presse, partenariats, ou juste pour dire bonjour." },
      { property: 'og:title', content: 'Contacter Kaki' },
      { property: 'og:description', content: 'Dites bonjour. On répond à chaque email.' },
    ],
    links: [{ rel: 'canonical', href: '/contact' }],
  }),
})

function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 pb-24 pt-24 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.2em] text-primary">Contact</p>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">Dites bonjour.</h1>
          <p className="mt-6 max-w-md text-muted-foreground md:text-lg">
            Presse, partenariats, une bonne adresse à nous souffler, ou juste un mot. On lit chaque email.
          </p>
          <div className="mt-10 space-y-3 text-sm">
            <p>
              <span className="text-muted-foreground">LinkedIn · </span>
              <a
                href="https://www.linkedin.com/in/sara-ben-abdelkader/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-primary"
              >
                Sara Ben Abdelkader
              </a>
            </p>
            <p>
              <span className="text-muted-foreground">Basée à · </span>Paris, France
            </p>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
          className="space-y-4 rounded-3xl border border-border bg-card p-8 md:col-span-7 md:p-10"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Nom" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Sujet" name="subject" />
          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea rows={6} required className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
          </div>
          <button type="submit" className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-primary">
            {sent ? 'Message envoyé, merci !' : 'Envoyer'}
          </button>
        </form>
      </section>
      <Footer />
    </div>
  )
}

function Field({ label, ...props }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input {...props} className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
    </div>
  )
}
