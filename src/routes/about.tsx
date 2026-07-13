import { createFileRoute, Link } from '@tanstack/react-router'
import { Nav, Footer } from '@/components/site/Nav'
import { FounderPhoto, FounderNameLink, LinkedInButton } from '@/components/site/Founder'

export const Route = createFileRoute('/about')({
  component: About,
  head: () => ({
    meta: [
      { title: 'À propos · Kaki' },
      { name: 'description', content: 'Kaki est une petite app iOS à forte identité, fabriquée à Paris par Sara Ben Abdelkader.' },
      { property: 'og:title', content: 'À propos de Kaki' },
      { property: 'og:description', content: 'Pourquoi on construit une manière plus calme et plus amicale de décider où manger.' },
    ],
    links: [{ rel: 'canonical', href: '/about' }],
  }),
})

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-24">
        <p className="text-[11px] uppercase tracking-[0.2em] text-primary">À propos</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">Une carte plus calme des endroits qu'on aime.</h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Kaki est une petite app à forte identité, pensée pour remplacer le chaos des adresses
          éparpillées par une carte calme, faite pour les amis.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-16 border-t border-border px-6 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <FounderPhoto className="w-full max-w-sm" />
          <p className="mt-6 text-sm text-muted-foreground">
            <FounderNameLink />, fondatrice
          </p>
          <div className="mt-4">
            <LinkedInButton />
          </div>
        </div>
        <div className="space-y-6 md:col-span-7">
          <h2 className="font-serif text-3xl md:text-4xl">
            Bonjour, je suis <FounderNameLink />.
          </h2>
          <p className="text-muted-foreground md:text-lg">
            J'ai créé Kaki parce que mes saves Instagram étaient devenus un cimetière et que mes
            groupes de discussion n'arrivaient jamais à choisir où manger. Chaque bonne adresse que
            j'avais notée était éparpillée sur quatre applis qui ne se parlaient jamais.
          </p>
          <p className="text-muted-foreground md:text-lg">
            Je voulais une manière plus calme et plus personnelle de découvrir où manger, avec une
            carte des adresses recommandées par les amis en qui j'ai vraiment confiance, plutôt
            qu'une note moyenne laissée par des inconnus.
          </p>
          <p className="text-muted-foreground md:text-lg">
            Kaki est une petite app à forte identité, fabriquée à Paris. J'ai une vision produit
            claire et j'aime la qualité premium dans le détail. C'est ce que j'essaie d'apporter à
            chaque écran de l'app.
          </p>
          <p className="text-muted-foreground md:text-lg">
            Si vous aimez la bonne table et les gens avec qui vous la partagez, j'aimerais vous
            compter dans la bêta.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl grid-cols-1 gap-16 border-t border-border px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl">Ce en quoi on croit</h2>
        <div className="mt-6 space-y-6 max-w-2xl">
          <p className="text-muted-foreground md:text-lg">
            Une recommandation chuchotée par une amie vaut plus que mille avis anonymes. Le goût
            n'est pas une note, c'est une personne.
          </p>
          <p className="text-muted-foreground md:text-lg">
            Un bon logiciel doit être calme. Kaki est pensée comme l'opposé d'un fil infini : pas
            de pièges à scroll, pas de notifications qui mendient l'attention.
          </p>
          <p className="text-muted-foreground md:text-lg">Je suis seule à Paris derrière Kaki, pour l'instant. Je mange beaucoup. Je prends des notes.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 text-center">
        <Link
          to="/"
          hash="cta"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-primary"
        >
          Rejoindre la bêta
        </Link>
      </section>
      <Footer />
    </div>
  )
}
