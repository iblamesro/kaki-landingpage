# Kaki — landing page

Landing page marketing pour Kaki (TanStack Start + Tailwind v4). Palette crème/kaki, Instrument
Serif + Inter, style éditorial inspiré d'Apple / Sana Labs.

## À faire avant publication

- **Node.js** : ce projet a besoin de Node **≥ 20.19** ou **≥ 22.12** (paquets `rolldown`/`vite`
  récents). Vérifiez avec `node -v` — si c'est plus vieux, mettez à jour avec `brew upgrade node`
  ou via [nvm](https://github.com/nvm-sh/nvm), sinon `npm install` échouera.
- **Photo de fondatrice** : `src/assets/sara.jpg` — vraie photo, déjà en place dans `index.tsx`
  (section Fondatrice) et `about.tsx`.
- **Captures d'écran de l'app** (carte + fil d'activité) : `src/assets/screenshot-map.png` et
  `screenshot-feed.png` — vraies captures, affichées via le composant `Screenshot` dans
  `PhoneMockup.tsx`.
- **Emails de contact** (`hello@kaki.app`, `privacy@kaki.app`, `legal@kaki.app`) : vérifiez que le
  domaine `kaki.app` est bien configuré, sinon changez pour une adresse que vous relevez vraiment.
- **Dates légales** : `privacy.tsx` et `terms.tsx` ont une date "à compléter avant publication" —
  à fixer une fois le texte validé.
- **Favicon / logo** : `public/favicon.ico` est encore celui du starter TanStack — à remplacer par
  le vrai logo Kaki.
- **Chiffres de la section Stats** (`index.tsx`, fonction `Stats`) : les "X" sont des placeholders
  — à remplacer par le vrai nombre d'inscrits sur liste d'attente et de restaurants sauvegardés
  avant publication.
- **Démo vidéo** (`index.tsx`, fonction `VideoDemo`) : la vidéo en fond (`src/assets/video/demo-loop.mp4`,
  compressée depuis le clip d'ambiance du moodboard, 446 Ko) n'est **pas** une vraie démo de l'app —
  c'est pour ça que "Vidéo bientôt disponible" reste affiché par-dessus. Dès que vous avez un vrai
  écran-cast de l'app (30-45s), remplacez ce fichier et retirez l'overlay/le texte.
- **Photos d'ambiance** (`index.tsx`/`MoodSlider.tsx`, `src/assets/mood/`) : 3 photos du moodboard
  qui partagent exactement le même ratio (1280×853) pour s'afficher en entier sans recadrage. Si
  vous ajoutez/retirez des photos, gardez ce même ratio pour éviter tout crop.
- **Lien App Store** (`index.tsx`, fonction `AppStoreBadge`) : affiché en badge non cliquable tant
  que l'app n'est pas publiée — ajoutez le `href` réel une fois en ligne.

## Démarrer

```bash
npm install
npm run dev
```

Puis ouvrez http://localhost:3000.

# Building For Production

To build this application for production:

```bash
npm run build
```

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. You can run the tests with:

```bash
npm run test
```

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

### Removing Tailwind CSS

If you prefer not to use Tailwind CSS:

1. Remove the demo pages in `src/routes/demo/`
2. Replace the Tailwind import in `src/styles.css` with your own styles
3. Remove `tailwindcss()` from the plugins array in `vite.config.ts`
4. Uninstall the packages: `npm install @tailwindcss/vite tailwindcss -D`

## Linting & Formatting


This project uses [eslint](https://eslint.org/) and [prettier](https://prettier.io/) for linting and formatting. Eslint is configured using [tanstack/eslint-config](https://tanstack.com/config/latest/docs/eslint). The following scripts are available:

```bash
npm run lint
npm run format
npm run check
```


## Shadcn

Add components using the latest version of [Shadcn](https://ui.shadcn.com/).

```bash
pnpm dlx shadcn@latest add button
```


## Deploy with Nitro

This project uses Nitro as a generic server adapter, so it can run on any Node-compatible host.

```bash
npm run build
node dist/server/index.mjs
```

The build output is a self-contained Node server. To deploy, push the `dist/` directory to your host (Render, Fly.io, your own VPS, etc.) and run the server command above.

For host-specific presets (Vercel, Netlify, Cloudflare, AWS Lambda, etc.) and tuning, see https://v3.nitro.build/deploy.



## Routing

This project uses [TanStack Router](https://tanstack.com/router) with file-based routing. Routes are managed as files in `src/routes`.

### Adding A Route

To add a new route to your application just add a new file in the `./src/routes` directory.

TanStack will automatically generate the content of the route file for you.

Now that you have two routes you can use a `Link` component to navigate between them.

### Adding Links

To use SPA (Single Page Application) navigation you will need to import the `Link` component from `@tanstack/react-router`.

```tsx
import { Link } from "@tanstack/react-router";
```

Then anywhere in your JSX you can use it like so:

```tsx
<Link to="/about">About</Link>
```

This will create a link that will navigate to the `/about` route.

More information on the `Link` component can be found in the [Link documentation](https://tanstack.com/router/v1/docs/framework/react/api/router/linkComponent).

### Using A Layout

In the File Based Routing setup the layout is located in `src/routes/__root.tsx`. Anything you add to the root route will appear in all the routes. The route content will appear in the JSX where you render `{children}` in the `shellComponent`.

Here is an example layout that includes a header:

```tsx
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'My App' },
    ],
  }),
  shellComponent: ({ children }) => (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        {children}
        <Scripts />
      </body>
    </html>
  ),
})
```

More information on layouts can be found in the [Layouts documentation](https://tanstack.com/router/latest/docs/framework/react/guide/routing-concepts#layouts).

## Server Functions

TanStack Start provides server functions that allow you to write server-side code that seamlessly integrates with your client components.

```tsx
import { createServerFn } from '@tanstack/react-start'

const getServerTime = createServerFn({
  method: 'GET',
}).handler(async () => {
  return new Date().toISOString()
})

// Use in a component
function MyComponent() {
  const [time, setTime] = useState('')
  
  useEffect(() => {
    getServerTime().then(setTime)
  }, [])
  
  return <div>Server time: {time}</div>
}
```

## API Routes

You can create API routes by using the `server` property in your route definitions:

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'

export const Route = createFileRoute('/api/hello')({
  server: {
    handlers: {
      GET: () => json({ message: 'Hello, World!' }),
    },
  },
})
```

## Data Fetching

There are multiple ways to fetch data in your application. You can use TanStack Query to fetch data from a server. But you can also use the `loader` functionality built into TanStack Router to load the data for a route before it's rendered.

For example:

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/people')({
  loader: async () => {
    const response = await fetch('https://swapi.dev/api/people')
    return response.json()
  },
  component: PeopleComponent,
})

function PeopleComponent() {
  const data = Route.useLoaderData()
  return (
    <ul>
      {data.results.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ul>
  )
}
```

Loaders simplify your data fetching logic dramatically. Check out more information in the [Loader documentation](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#loader-parameters).

# Demo files

Files prefixed with `demo` can be safely deleted. They are there to provide a starting point for you to play around with the features you've installed.

# Learn More

You can learn more about all of the offerings from TanStack in the [TanStack documentation](https://tanstack.com).

For TanStack Start specific documentation, visit [TanStack Start](https://tanstack.com/start).
