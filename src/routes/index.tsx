import { createFileRoute } from '@tanstack/react-router'
import { useState, type FormEvent } from 'react'
import { Nav, Footer } from '@/components/site/Nav'
import { MapScreenshot, FeedScreenshot, Chip, Pin } from '@/components/site/PhoneMockup'
import { Reveal } from '@/components/site/Reveal'
import { MoodSlider } from '@/components/site/MoodSlider'
import { joinWaitlist, getWaitlistCount } from '@/lib/waitlist'
import demoLoop from '@/assets/video/demo-loop.mp4'

export const Route = createFileRoute('/')({
  component: Index,
  loader: () => getWaitlistCount(),
})

function Index() {
  const { count } = Route.useLoaderData()
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Stats waitlistCount={count} />
      <Story />
      <MoodSlider />
      <Showcase />
      <VideoDemo />
      <Features />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.92_0.03_118/0.55),transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-6 pb-8 pt-24 text-center md:pt-28">
        <div className="fade-up mx-auto mb-10 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          iOS · Bêta privée
        </div>
        <h1
          className="fade-up mx-auto max-w-4xl font-serif text-[3.2rem] leading-[0.98] tracking-tight md:text-[6rem]"
          style={{ animationDelay: '0.05s' }}
        >
          Où manger,
          <br />
          <em className="not-italic text-primary">décidé ensemble.</em>
        </h1>
        <p className="fade-up mx-auto mt-5 font-serif text-lg italic text-primary" style={{ animationDelay: '0.1s' }}>
          Kaki, l'app des kiffeurs.
        </p>
        <p
          className="fade-up mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          style={{ animationDelay: '0.15s' }}
        >
          Kaki centralise tous les restaurants que vous sauvegardez depuis Instagram, TikTok et Maps
          sur une seule carte, puis vous aide, avec vos amis, à enfin choisir.
        </p>
        <div className="fade-up mt-10 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: '0.25s' }}>
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-primary"
          >
            Demander l'accès
            <span aria-hidden className="transition group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <AppStoreBadge />
        </div>
      </div>

      <div className="relative mx-auto mt-14 flex max-w-5xl items-end justify-center px-6 pb-24 md:mt-20 md:pb-32">
        <div className="pointer-events-none absolute inset-x-8 bottom-10 -z-10 h-56 rounded-[100%] bg-primary/12 blur-3xl" />
        <div className="relative hero-tilt">
          <MapScreenshot />
          <Pin className="left-[20%] top-[27%]" label="Clamato" delay="0s" />
          <Pin className="left-[58%] top-[42%]" label="Le Servan" delay="1.2s" />
          <Pin className="left-[30%] top-[63%]" label="Septime" delay="2.4s" />
          <Chip className="-left-4 top-[10%] md:-left-16" text="Léa a sauvegardé 3 adresses" delay="0.4s" />
          <Chip className="-right-4 top-[38%] md:-right-20" text="Ce soir · 4 amis dispo" delay="1.6s" />
        </div>
      </div>
    </section>
  )
}

function AppStoreBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-3 text-xs text-muted-foreground">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-foreground">
        <path d="M16.5 12.5c0-3 2.4-4.4 2.5-4.5-1.4-2-3.5-2.3-4.3-2.3-1.8-.2-3.5 1.1-4.4 1.1-.9 0-2.3-1-3.8-1-2 0-3.8 1.1-4.8 2.9-2 3.5-.5 8.6 1.5 11.5 1 1.4 2.1 2.9 3.6 2.9 1.5-.1 2-.9 3.7-.9 1.7 0 2.2.9 3.7.9 1.6 0 2.6-1.4 3.5-2.8 1.1-1.6 1.6-3.2 1.6-3.3 0 0-3-1.2-3-4.5zM13.6 4.1C14.4 3.1 15 1.8 14.9.5c-1.1.1-2.4.7-3.2 1.7-.7.8-1.4 2.1-1.2 3.4 1.2.1 2.4-.7 3.1-1.5z" />
      </svg>
      App Store · bientôt disponible
    </span>
  )
}

function Marquee() {
  const items = ['Saves Instagram', 'Bookmarks TikTok', 'Étoiles Google Maps', 'Captures d’écran', 'Groupes de discussion']
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Kaki remplace le bazar de</p>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 font-serif text-xl text-foreground/70 md:text-2xl">
          {items.map((i, idx) => (
            <li key={i} className="flex items-center gap-8">
              {i}
              {idx < items.length - 1 && <span className="h-1 w-1 rounded-full bg-primary/60" />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Stats({ waitlistCount }: { waitlistCount: number }) {
  const items = [
    { k: waitlistCount.toLocaleString('fr-FR'), v: 'personnes sur la liste d’attente' },
    { k: '14 000+', v: 'restaurants à Paris' },
    { k: '100%', v: 'adresses d’amis, jamais d’inconnus' },
  ]
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3">
        {items.map((s) => (
          <div key={s.v} className="text-center md:text-left">
            <div className="font-serif text-5xl leading-none tracking-tight text-foreground md:text-6xl">{s.k}</div>
            <p className="mt-3 text-sm text-muted-foreground">{s.v}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Story() {
  const beats = [
    {
      tag: 'Le problème',
      title: 'Vos adresses préférées sont éparpillées.',
      body: "Des saves Instagram. Des favoris TikTok. Des étoiles Google Maps. Des captures d'écran jamais rouvertes. Vendredi soir venu, la réponse est toujours : « je sais pas, choisis toi ».",
    },
    {
      tag: 'Le problème',
      title: 'Les avis d’inconnus n’aident pas.',
      body: 'Une moyenne de 4,6 ne dit rien sur si vous allez aimer l’endroit. Le goût, ce n’est pas une note, c’est une amie qui dit « tu vas adorer ».',
    },
    {
      tag: 'La solution',
      title: 'Une carte, seulement des gens de confiance.',
      body: 'Kaki rassemble tous les lieux que vous avez sauvegardés sur une carte unique et calme, avec les adresses aimées par vos amis proches en superposition. C’est tout. Pas d’avis, pas de bruit.',
    },
    {
      tag: 'La solution',
      title: 'Décidez ensemble, en un geste.',
      body: 'Lancez une shortlist, partagez-la à un groupe, tout le monde vote. Vous tombez sur un endroit qui plaît à tous, en moins d’une minute.',
    },
  ]
  return (
    <section className="relative border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-5xl px-6 py-28">
        <p className="text-[11px] uppercase tracking-[0.2em] text-primary">L'histoire</p>
        <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
          De <em className="not-italic text-muted-foreground line-through">« je sais pas, choisis toi »</em> à un endroit que tout le monde adore.
        </h2>
        <div className="relative mt-20">
          <div aria-hidden className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-1/2" />
          <ol className="space-y-20">
            {beats.map((b, i) => (
              <Reveal key={b.title} as="li" className={`relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                <div className="relative pl-12 md:pl-0 md:pr-16 md:text-right">
                  <span
                    className={`absolute top-2 h-3 w-3 rounded-full ${b.tag === 'La solution' ? 'bg-primary' : 'bg-foreground/40'} left-[10px] md:left-auto md:right-[-6px] ${i % 2 ? 'md:left-[-6px] md:right-auto' : ''}`}
                  />
                  <p className={`text-[11px] uppercase tracking-[0.2em] ${b.tag === 'La solution' ? 'text-primary' : 'text-muted-foreground'}`}>
                    {b.tag}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">{b.title}</h3>
                </div>
                <p className="pl-12 text-muted-foreground md:pl-0 md:text-lg">{b.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function Showcase() {
  const rows = [
    {
      tag: 'La carte',
      title: 'Chaque adresse, sur une carte calme.',
      body: 'Sauvegardez depuis Instagram, TikTok ou Maps. Kaki réunit votre monde sur une carte unique que vous avez envie d’ouvrir.',
      scene: <MapScreenshot className="mx-auto" />,
      reverse: false,
    },
    {
      tag: 'Le fil',
      title: 'Suivez des goûts, pas des inconnus.',
      body: 'Voyez ce que vos amis sauvegardent, testent et adorent, dans un fil qui ressemble à une recommandation chuchotée, jamais à un site d’avis.',
      scene: <FeedScreenshot className="mx-auto" />,
      reverse: true,
    },
  ]
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-32">
      {rows.map((r, i) => (
        <div key={r.tag} className={`grid grid-cols-1 items-center gap-16 md:grid-cols-12 ${i > 0 ? 'mt-32' : ''}`}>
          <div className={`relative flex justify-center md:col-span-6 ${r.reverse ? 'md:order-2' : ''}`}>
            <div className="pointer-events-none absolute inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_50%,oklch(0.92_0.03_118/0.7),transparent_70%)] blur-2xl" />
            {r.scene}
          </div>
          <div className={`md:col-span-6 ${r.reverse ? 'md:order-1' : ''}`}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-primary">{r.tag}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">{r.title}</h2>
            <p className="mt-6 max-w-md text-muted-foreground md:text-lg">{r.body}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

/**
 * La vidéo en fond est un clip d'ambiance (moodboard), pas une vraie démo de l'app.
 * D'où le "Vidéo bientôt disponible" toujours affiché par-dessus. À remplacer par un
 * vrai écran-cast de l'app (30-45s) dès qu'il existe.
 */
function VideoDemo() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-28 text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-primary">Démo</p>
        <h2 className="mx-auto mt-3 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">Kaki en mouvement.</h2>
        <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
          Une vidéo de 30 à 45 secondes pour voir la carte, l'ajout d'une adresse et la décision entre amis.
        </p>
        <div className="relative mx-auto mt-12 aspect-video w-full max-w-4xl overflow-hidden rounded-3xl border border-border">
          <video
            src={demoLoop}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="flex flex-col items-center gap-3 text-background">
              <span className="grid h-16 w-16 place-items-center rounded-full border border-background/40 bg-foreground/20 backdrop-blur">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <p className="text-xs uppercase tracking-widest">Vidéo bientôt disponible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      k: '01',
      t: 'Une carte unique',
      d: 'Sauvegardez depuis n’importe où. Kaki réunit vos adresses sur une carte calme que vous avez envie d’ouvrir.',
    },
    {
      k: '02',
      t: 'De confiance, pas anonyme',
      d: 'Des recommandations d’amis dont vous connaissez les goûts, pas d’inconnus avec un avis à régler.',
    },
    {
      k: '03',
      t: 'Décidez, ensemble',
      d: 'Faites une shortlist avec vos amis, votez en un geste, tombez sur un endroit qui plaît à tous.',
    },
    {
      k: '04',
      t: 'Surprends-moi',
      d: 'Un bouton qui tire une adresse au sort parmi vos sauvegardes, selon l’humeur du moment. Fini la paralysie du choix.',
    },
  ]
  return (
    <section className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-primary">Produit</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
            Une manière plus calme de choisir où manger.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2">
          {features.map((f) => (
            <article key={f.k} className="group bg-background p-8 transition hover:bg-card md:p-12">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-sm text-primary">{f.k}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary/50 transition group-hover:bg-primary" />
              </div>
              <h3 className="mt-8 font-serif text-2xl leading-snug md:text-[1.75rem]">{f.t}</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{f.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const qas = [
    {
      q: 'Quand Kaki sera-t-elle disponible sur l’App Store ?',
      a: 'Nous sommes en bêta privée TestFlight. Rejoignez la liste d’attente, nous vous inviterons dès que votre cercle s’ouvre.',
    },
    {
      q: 'Kaki est-elle gratuite ?',
      a: 'Oui. Le cœur de l’app (sauvegarder, cartographier, partager, décider) restera toujours gratuit.',
    },
    {
      q: 'Dois-je importer mes saves Instagram à la main ?',
      a: 'Non. Kaki propose une extension de partage : partagez ou laissez appuyé sur n’importe quel lien de restaurant, et il est sur votre carte en quelques secondes.',
    },
    {
      q: 'Des inconnus verront-ils mes adresses sauvegardées ?',
      a: 'Jamais. Kaki est pensée pour rester entre amis. Vous choisissez exactement quels cercles voient quelles adresses.',
    },
    {
      q: 'Kaki arrivera-t-elle sur Android ?',
      a: 'iOS d’abord, pour construire la meilleure expérience possible. Android viendra après le lancement public.',
    },
  ]
  return (
    <section id="faq" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-28 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">De bonnes questions.</h2>
          <p className="mt-4 text-muted-foreground">
            Une autre question ?{' '}
            <a href="/contact" className="text-foreground underline underline-offset-4 hover:text-primary">
              Contactez-nous
            </a>
            .
          </p>
        </div>
        <div className="md:col-span-8">
          <ul className="divide-y divide-border border-y border-border">
            {qas.map((qa) => (
              <FaqItem key={qa.q} {...qa} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <li>
      <button type="button" onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between gap-6 py-6 text-left">
        <span className="font-serif text-xl leading-snug md:text-2xl">{q}</span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition ${open ? 'rotate-45 bg-primary text-primary-foreground' : ''}`}
        >
          +
        </span>
      </button>
      {open && <p className="pb-6 pr-14 text-muted-foreground fade-up">{a}</p>}
    </li>
  )
}

function CTA() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [email, setEmail] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      await joinWaitlist({ data: { email } })
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 py-28">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-20 text-primary-foreground md:px-16 md:py-28">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-background/10 blur-3xl" />
        <div className="relative max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">iOS · Bêta privée</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">Rejoindre la liste.</h2>
          <p className="mt-6 max-w-lg text-primary-foreground/80 md:text-lg">
            Nous invitons de nouveaux cercles d'amis chaque semaine. Laissez votre email et on vous
            envoie un lien TestFlight dès que c'est votre tour.
          </p>
          {status === 'success' ? (
            <p className="mt-10 max-w-md text-lg">Merci, vous êtes sur la liste. On vous écrit bientôt.</p>
          ) : (
            <form className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@email.com"
                className="flex-1 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/50 focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-accent disabled:opacity-60"
              >
                {status === 'loading' ? 'Envoi...' : "Demander l'accès"}
              </button>
            </form>
          )}
          {status !== 'success' && (
            <p className="mt-3 max-w-md text-xs text-primary-foreground/60">
              En rejoignant la liste, vous acceptez de recevoir des emails de Kaki à ce sujet. Voir notre{' '}
              <a href="/privacy" className="underline underline-offset-2 hover:text-primary-foreground">
                politique de confidentialité
              </a>
              .
            </p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-sm text-primary-foreground/80">
              Un souci a empêché l'envoi. Réessayez, ou écrivez-nous directement.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
