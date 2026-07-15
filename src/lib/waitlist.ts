import { createServerFn } from '@tanstack/react-start'

/**
 * Envoie une inscription à la liste d'attente vers Notion.
 * Nécessite NOTION_TOKEN et NOTION_DB_ID en variables d'environnement
 * (jamais exposées au navigateur : ce code ne tourne que côté serveur).
 * Schéma de la base "Kaki - Waitlist" : "Email" (titre), "E-mail" (type email), "Contacté" (case à cocher).
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
          'E-mail': { email: data.email },
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

/**
 * Nombre de personnes déjà comptabilisées avant la mise en place de ce formulaire
 * (suivi ailleurs par Sara). Le compteur affiché = cette base + les vraies inscriptions Notion.
 */
const WAITLIST_BASE_COUNT = 256

/**
 * Compte les inscriptions réelles dans la base Notion (pagine si plus de 100 entrées).
 * Si Notion n'est pas configuré ou injoignable, retourne juste la base (256) pour ne
 * jamais casser l'affichage.
 */
export const getWaitlistCount = createServerFn({ method: 'GET' }).handler(async () => {
  const token = process.env.NOTION_TOKEN
  const databaseId = process.env.NOTION_DB_ID

  if (!token || !databaseId) {
    return { count: WAITLIST_BASE_COUNT }
  }

  try {
    let total = 0
    let cursor: string | undefined
    do {
      const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ page_size: 100, start_cursor: cursor }),
      })
      if (!response.ok) throw new Error(await response.text())
      const body = (await response.json()) as { results: unknown[]; has_more: boolean; next_cursor: string | null }
      total += body.results.length
      cursor = body.has_more ? (body.next_cursor ?? undefined) : undefined
    } while (cursor)

    return { count: WAITLIST_BASE_COUNT + total }
  } catch (err) {
    console.error('Erreur comptage Notion:', err)
    return { count: WAITLIST_BASE_COUNT }
  }
})
