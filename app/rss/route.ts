import RSS from 'rss'
import { baseUrl } from '../sitemap'

export async function GET() {
  const feed = new RSS({
    title: 'Nana Asante',
    site_url: baseUrl,
    feed_url: `${baseUrl}/feed.xml`,
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
