import { createServerFn } from '@tanstack/react-start'

/**
 * Envoie une inscription à la liste d'attente vers Notion.
 * Nécessite NOTION_TOKEN et NOTION_DB_ID en variables d'environnement
 * (jamais exposées au navigateur : ce code ne tourne que côté serveur).
 * La base Notion doit avoir une propriété "Email" (titre) et "Contacté" (case à cocher).
 */
export const joinWaitlist = createServerFn({ method: 'POST' })
  .validator((data: { email: string }) => data)
  .handler(async ({ data }) => {
    if (!data.email || !data.email.includes('@')) {
      throw new Error('Email invalide ou manquant.')
    }

    const token = process.env.NOTION_TOKEN
    const databaseId = process.env.NOTION_DB_ID

    if (!token || !databaseId) {
      throw new Error("Notion n'est pas configuré (NOTION_TOKEN / NOTION_DB_ID manquants).")
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
          Contacté: { checkbox: false },
        },
      }),
    })

    if (!response.ok) {
      const body = await response.text()
      console.error('Erreur Notion API:', body)
      throw new Error("Impossible d'ajouter l'email à Notion.")
    }

    return { ok: true as const }
  })
