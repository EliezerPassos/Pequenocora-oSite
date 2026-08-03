import { siteInfo } from '../data/content.js'

export default function useWhatsAppLink(message = siteInfo.whatsappMessage) {
  const params = new URLSearchParams({ text: message })
  return `https://wa.me/${siteInfo.whatsappNumber}?${params.toString()}`
}
