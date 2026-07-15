import { createServerFn } from '@tanstack/react-start'

type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
}

/**
 * Envoie le formulaire de contact par email via Resend, à l'adresse CONTACT_TO_EMAIL.
 * Nécessite RESEND_API_KEY et CONTACT_TO_EMAIL en variables d'environnement (jamais
 * exposées au navigateur : ce code ne tourne que côté serveur).
 * Sans domaine vérifié sur Resend, l'expéditeur "onboarding@resend.dev" ne peut écrire
 * qu'à l'adresse utilisée pour créer le compte Resend : utilisez donc la même adresse
 * pour CONTACT_TO_EMAIL que pour votre compte Resend.
 */
export const sendContactMessage = createServerFn({ method: 'POST' })
  .validator((data: ContactPayload) => data)
  .handler(async ({ data }) => {
    if (!data.email || !data.email.includes('@') || !data.name || !data.message) {
      throw new Error('Formulaire incomplet ou email invalide.')
    }

    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_TO_EMAIL

    if (!apiKey || !to) {
      throw new Error("L'envoi d'email n'est pas configuré (RESEND_API_KEY / CONTACT_TO_EMAIL manquants).")
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Kaki <onboarding@resend.dev>',
        to,
        reply_to: data.email,
        subject: `[Kaki contact] ${data.subject || 'Sans sujet'}`,
        text: `De : ${data.name} <${data.email}>\n\n${data.message}`,
      }),
    })

    if (!response.ok) {
      const body = await response.text()
      console.error('Erreur Resend API:', body)
      throw new Error("Impossible d'envoyer le message.")
    }

    return { ok: true as const }
  })
