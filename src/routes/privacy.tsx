import { createFileRoute } from '@tanstack/react-router'
import { Nav, Footer } from '@/components/site/Nav'
import type { ReactNode } from 'react'

export const Route = createFileRoute('/privacy')({
  component: Privacy,
  head: () => ({
    meta: [
      { title: 'Politique de confidentialité · Kaki' },
      { name: 'description', content: 'Comment Kaki collecte, utilise et protège vos données.' },
      { property: 'og:title', content: 'Politique de confidentialité Kaki' },
      { property: 'og:description', content: 'Notre approche de la vie privée, expliquée simplement.' },
    ],
    links: [{ rel: 'canonical', href: '/privacy' }],
  }),
})

function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-24">
        <p className="text-[11px] uppercase tracking-[0.2em] text-primary">Légal</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">Politique de confidentialité</h1>
        <p className="mt-6 text-sm text-muted-foreground">Dernière mise à jour : à compléter avant publication</p>
        <p className="mt-8 text-muted-foreground">
          Cette page est maintenue par Kaki (Sara Ben Abdelkader) pour répondre aux questions courantes
          sur le traitement de vos données. Ce n'est pas une certification juridique.
        </p>
        <Section title="Liste d'attente et formulaire de contact">
          Si vous laissez votre email pour rejoindre la bêta, ou si vous nous écrivez via le formulaire
          de contact, cette information est stockée dans Notion, l'outil que nous utilisons pour gérer
          nos échanges. Elle sert uniquement à vous recontacter au sujet de Kaki, jamais à autre chose.
        </Section>
        <Section title="Ce que nous collectons (dans l'app, une fois inscrit)">
          Les informations de compte que vous nous donnez (nom, email, connexion Apple ID), les
          restaurants et listes que vous sauvegardez, et des données d'usage basiques pour garder
          l'app stable. C'est tout.
        </Section>
        <Section title="Ce que nous ne collectons pas">
          Nous ne vendons pas vos données. Nous ne vous suivons pas sur le web. Nous ne partageons pas
          vos adresses sauvegardées avec des tiers ou des annonceurs.
        </Section>
        <Section title="Qui voit vos sauvegardes">
          Par défaut, rien de ce que vous sauvegardez n'est public. Vous choisissez quels amis ou
          cercles voient quelles listes.
        </Section>
        <Section title="Accès et suppression">
          Vous pouvez nous demander à tout moment de voir, corriger ou supprimer les données que nous
          avons sur vous (email de liste d'attente comme compte dans l'app), en passant par le{' '}
          <a href="/contact" className="underline underline-offset-4 hover:text-primary">
            formulaire de contact
          </a>
          . Une fois l'app en ligne, vous pourrez aussi supprimer votre compte directement, en un geste ;
          vos données sont alors retirées de nos serveurs sous 30 jours.
        </Section>
        <Section title="Contact">
          Des questions sur vos données ?{' '}
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
