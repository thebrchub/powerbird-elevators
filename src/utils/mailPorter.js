const MAIL_PORTER_ENDPOINT = 'https://mail-porter.vercel.app/api/email/send-email/gmail'

export async function sendMailPorterEmail(payload) {
  const apiKey = import.meta.env.VITE_MAIL_PORTER_API_KEY
  const senderEmail = import.meta.env.VITE_MAIL_PORTER_SENDER_EMAIL
  if (!apiKey) {
    throw new Error('Missing VITE_MAIL_PORTER_API_KEY')
  }
  if (!senderEmail) {
    throw new Error('Missing VITE_MAIL_PORTER_SENDER_EMAIL')
  }

  const response = await fetch(MAIL_PORTER_ENDPOINT, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': apiKey
    },
    body: JSON.stringify({
      ...payload,
      email: senderEmail
    })
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => '')
    const suffix = errorText ? ` - ${errorText}` : ''
    throw new Error(`Email request failed: ${response.status} ${response.statusText}${suffix}`)
  }

  return response.json().catch(() => null)
}
