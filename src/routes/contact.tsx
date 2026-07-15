import { createFileRoute } from '@tanstack/react-router'
import { Nav, Footer } from '@/components/site/Nav'
import { useState, type FormEvent, type InputHTMLAttributes } from 'react'
import { sendContactMessage } from '@/lib/contact'

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
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      await sendContactMessage({ data: form })
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

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
        {status === 'success' ? (
          <div className="flex items-center rounded-3xl border border-border bg-card p-8 md:col-span-7 md:p-10">
            <p className="text-lg">Message envoyé, merci ! On vous répond bientôt.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-border bg-card p-8 md:col-span-7 md:p-10">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Nom" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
            </div>
            <Field label="Sujet" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                rows={6}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-primary disabled:opacity-60"
            >
              {status === 'loading' ? 'Envoi...' : 'Envoyer'}
            </button>
            {status === 'error' && (
              <p className="text-sm text-destructive">Un souci a empêché l'envoi. Réessayez dans un instant.</p>
            )}
          </form>
        )}
      </section>
      <Footer />
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  ...props
}: { label: string; value: string; onChange: (v: string) => void } & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        {...props}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  )
}
