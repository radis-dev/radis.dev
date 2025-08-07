export interface IProject {
	title: string
	description: string
	tags: ITag[]
	image: {
		url: string
		alt: string
	}
	link?: string
	github?: string
}

export interface ITag {
	name: string
	class: string
	icon: any
}

import AstroIcon from '@/components/icons/AstroJS.svg'
import TailwindIcon from '@/components/icons/Tailwind.svg'
import TypescriptIcon from '@/components/icons/Typescript.svg'

const tags: Record<string, ITag> = {
	astro: {
		name: 'Astro JS',
		class: 'dark:bg-zinc-800 bg-zinc-500 text-white',
		icon: AstroIcon,
	},
	tailwind: {
		name: 'Tailwind CSS',
		class: 'dark:bg-[#003159] bg-[#364f73] text-white',
		icon: TailwindIcon,
	},
	typescript: {
		name: 'TypeScript',
		class: 'text-white dark:bg-[#005c9a] bg-[#0073c1]',
		icon: TypescriptIcon,
	},
}

export const projects: IProject[] = [
	{
		title: 'Portafolio',
		description: 'Mi espacio digital donde comparto mis experiencias y progresos diarios en el campo de la tecnología.',
		tags: [tags.astro, tags.tailwind, tags.typescript],
		image: {
			url: '/images/about/projects/portafolio.webp',
			alt: 'Captura de pantalla del sitio web personal de Raul.',
		},
	},
]
