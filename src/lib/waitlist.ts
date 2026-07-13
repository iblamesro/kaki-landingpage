import { createServerFn } from '@tanstack/react-start'

/**
 * Envoie une inscription à la liste d'attente vers Notion.
 * Nécessite NOTION_TOKEN et NOTION_DATABASE_ID en variables d'environnement
 * (jamais exposées au navigateur : ce code ne tourne que côté serveur).
 * La base Notion doit avoir une propriété "Email" (le titre de la base).
 */
export const joinWaitlist = createServerFn({ method: 'POST' })
  .validator((data: { email: string }) => data)
  .handler(async ({ data }) => {
    const token = process.env.NOTION_TOKEN
    const databaseId = process.env.NOTION_DATABASE_ID

    if (!token || !databaseId) {
      throw new Error("Notion n'est pas configuré (NOTION_TOKEN / NOTION_DATABASE_ID manquants).")
    }

    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: databaseId },
        properties: {
          Email: { title: [{ text: { content: data.email } }] },
        },
      }),
    })

    if (!response.ok) {
      const body = await response.text()
      throw new Error(`Notion a refusé l'inscription : ${body}`)
    }

    return { ok: true as const }
  })
