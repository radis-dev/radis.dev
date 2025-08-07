import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'
import markdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'

const markdown = markdownIt()

export const GET: APIRoute = async () => {
	const articles = (await getCollection('blog'))
		.filter((article) => article.data.state === 'published')
		.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime())

	const customDataChannel = `<atom:link href="${new URL('/blog/feed.xml', import.meta.env.SITE).href}" rel="self" type="application/rss+xml" />`

	return rss({
		xmlns: {
			media: 'http://search.yahoo.com/mrss/',
			atom: 'http://www.w3.org/2005/Atom',
		},
		title: 'RadisDev - Blog',
		description:
			'¡Hola! Soy Raúl, aunque muchos me conocen como RadisDev. Descubre contenido sobre desarrollo web, tecnología y más para alimentar tu curiosidad por la informática.',
		site: import.meta.env.SITE,
		customData: customDataChannel,
		items: articles.map((article) => {
			return {
				title: article.data.title,
				description: article.data.description,
				categories: [article.data.category],
				pubDate: article.data.publishedAt,
				link: `/blog/${article.id}`,
				content: article.body && sanitizeHtml(markdown.render(article.body)),
			}
		}),
	})
}
