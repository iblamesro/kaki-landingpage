import { createFileRoute } from '@tanstack/react-router'
import { Nav, Footer } from '@/components/site/Nav'
import type { ReactNode } from 'react'

export const Route = createFileRoute('/terms')({
  component: Terms,
  head: () => ({
    meta: [
      { title: "Conditions d'utilisation · Kaki" },
      { name: 'description', content: "Les conditions qui régissent votre utilisation de l'app et du site Kaki." },
      { property: 'og:title', content: "Conditions d'utilisation Kaki" },
      { property: 'og:description', content: "Les règles du jeu pour utiliser Kaki." },
    ],
    links: [{ rel: 'canonical', href: '/terms' }],
  }),
})

function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-24">
        <p className="text-[11px] uppercase tracking-[0.2em] text-primary">Légal</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">Conditions d'utilisation</h1>
        <p className="mt-6 text-sm text-muted-foreground">Dernière mise à jour : à compléter avant publication</p>
        <p className="mt-8 text-muted-foreground">
          En utilisant Kaki, vous acceptez ces conditions. Elles existent pour garder l'app agréable
          pour tout le monde.
        </p>
        <Section title="Votre compte">
          Vous êtes responsable de l'activité sur votre compte. Merci de ne pas partager vos identifiants
          et de nous prévenir immédiatement en cas d'usage non autorisé suspecté.
        </Section>
        <Section title="Le contenu que vous publiez">
          Vous êtes propriétaire des listes, notes et avis que vous créez dans Kaki. En les publiant,
          vous nous accordez une licence limitée pour les afficher aux amis et cercles que vous avez
          choisis.
        </Section>
        <Section title="Usage autorisé">
          Pas de spam, de harcèlement, de discours haineux ou de contenu illégal. Pas de scraping. Pas
          d'usurpation d'identité. Nous pouvons suspendre les comptes qui enfreignent ces règles.
        </Section>
        <Section title="Logiciel en bêta">
          Kaki est en bêta privée. Les fonctionnalités peuvent changer ou casser. Merci pour votre
          patience, et pour vos retours.
        </Section>
        <Section title="Responsabilité">
          Kaki est fournie « en l'état ». Nous faisons de notre mieux pour la garder stable mais nous
          ne sommes pas responsables des restaurants qui vous déçoivent.
        </Section>
        <Section title="Contact">
          Des questions ?{' '}
          <a href="/contact" className="underline underline-offset-4 hover:text-primary">
            Contactez-nous
          </a>
          .
        </Section>
      </article>
      <Footer />
    </div>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-serif text-2xl md:text-3xl">{title}</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">{children}</p>
    </section>
  )
}
