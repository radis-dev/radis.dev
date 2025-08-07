import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'

import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import { transformerCopyButton } from '@rehype-pretty/transformers'

import { h } from 'hastscript'

export default defineConfig({
	site: 'https://radis.dev',
	integrations: [
		sitemap(),
		mdx({
			syntaxHighlight: false,
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeExternalLinks,
					{
						target: '_blank',
						rel: ['noopener', 'noreferrer', 'nofollow'],
					},
				],
				[
					rehypeAutolinkHeadings,
					{
						behavior: 'prepend',
						properties: {
							className: ['text-neutral-700', 'no-underline', 'opacity-0', 'hover:opacity-100', 'absolute', '-ml-8'],
						},
						content: h('span', '#'),
					},
				],
				[
					rehypePrettyCode,
					{
						theme: {
							dark: 'one-dark-pro',
							light: 'one-light',
						},
						transformers: [
							transformerCopyButton({
								visibility: 'always',
								feedbackDuration: 3000,
							}),
						],
					},
				],
			],
		}),
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
	],
	build: {
		inlineStylesheets: 'always',
	},
	output: 'static',
	devToolbar: {
		enabled: false,
	},
	vite: {
		plugins: [tailwindcss()],
	},
})
