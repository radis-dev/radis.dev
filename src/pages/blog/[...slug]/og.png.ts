import { type CollectionEntry, getCollection } from 'astro:content'
import sharp from 'sharp'
import satori from 'satori'
import fs from 'fs/promises'

interface Props {
	params: { slug: string }
	props: { article: CollectionEntry<'blog'> }
}

export async function GET({ props }: Props) {
	const { title } = props.article.data

	const logoImg = await fs.readFile('./public/images/logo.png')

	const html = {
		type: 'div',
		props: {
			tw: 'flex flex-col w-full h-full px-20 py-10 bg-neutral-900',
			children: [
				{
					type: 'div',
					props: {
						tw: 'flex flex-row items-start justify-start',
						children: {
							type: 'img',
							props: {
								tw: 'w-20 h-20',
								src: logoImg.buffer,
							},
						},
					},
				},
				{
					type: 'div',
					props: {
						tw: 'flex flex-row items-center justify-center flex-1',
						children: {
							type: 'p',
							props: {
								tw: 'text-6xl text-white text-center',
								children: title,
							},
						},
					},
				},
				{
					type: 'div',
					props: {
						tw: 'flex flex-row justify-end items-end',
						children: {
							type: 'p',
							props: {
								tw: 'text-3xl text-white',
								children: 'RadisDev | Blog',
							},
						},
					},
				},
			],
		},
	}

	const spaceGroteskData = await fs.readFile('./public/fonts/satori/space-grotesk.woff')

	const svg = await satori(html, {
		width: 1200,
		height: 630,
		fonts: [
			{
				name: 'space-grotesk',
				data: spaceGroteskData,
			},
		],
	})

	const png = await sharp(Buffer.from(svg)).png().toBuffer()

	return new Response(png, {
		headers: {
			'Content-Type': 'image/png',
		},
	})
}

export async function getStaticPaths() {
	const articles = (await getCollection('blog')).filter((article) => article.data.state == 'published')
	return articles.map((article) => ({
		params: { slug: article.id },
		props: { article },
	}))
}
