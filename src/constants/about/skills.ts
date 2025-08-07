import TypescriptIcon from '@/components/icons/Typescript.svg'
import AstroIcon from '@/components/icons/AstroJS.svg'
import TailwindIcon from '@/components/icons/Tailwind.svg'
import VueIcon from '@/components/icons/Vue.svg'
import DockerIcon from '@/components/icons/Docker.svg'
import GitIcon from '@/components/icons/Git.svg'
import JavaIcon from '@/components/icons/Java.svg'
import PhpIcon from '@/components/icons/Php.svg'
import MySQLIcon from '@/components/icons/MySQL.svg'
import NodeJSIcon from '@/components/icons/NodeJS.svg'
import LinuxIcon from '@/components/icons/Linux.svg'
import AWSIcon from '@/components/icons/AWS.svg'
import BootstrapIcon from '@/components/icons/Bootstrap.svg'
import CSSIcon from '@/components/icons/CSS.svg'
import HTMLIcon from '@/components/icons/HTML5.svg'
import MarkdownIcon from '@/components/icons/Markdown.svg'
import JavaScriptIcon from '@/components/icons/JavaScript.svg'
import PythonIcon from '@/components/icons/Python.svg'
import PostgreSQLIcon from '@/components/icons/PostgreSQL.svg'
import MariaDBIcon from '@/components/icons/MariaDB.svg'

export interface ITechnology {
	name: string
	icon: any
}

export interface ISkill {
	name: string
	technologies: ITechnology[]
}

export const skills: ISkill[] = [
	{
		name: 'Frontend',
		technologies: [
			{
				name: 'TypeScript',
				icon: TypescriptIcon,
			},
			{
				name: 'JavaScript',
				icon: JavaScriptIcon,
			},
			{
				name: 'Astro',
				icon: AstroIcon,
			},
			{
				name: 'TailwindCSS',
				icon: TailwindIcon,
			},
			{
				name: 'Bootstrap',
				icon: BootstrapIcon,
			},
			{
				name: 'VueJS',
				icon: VueIcon,
			},
			{
				name: 'CSS',
				icon: CSSIcon,
			},
			{
				name: 'HTML',
				icon: HTMLIcon,
			},
		],
	},
	{
		name: 'Backend',
		technologies: [
			{
				name: 'Java',
				icon: JavaIcon,
			},
			{
				name: 'PHP',
				icon: PhpIcon,
			},
			{
				name: 'NodeJS',
				icon: NodeJSIcon,
			},
			{
				name: 'Python',
				icon: PythonIcon,
			},
			{
				name: 'MySQL',
				icon: MySQLIcon,
			},
			{
				name: 'MariaDB',
				icon: MariaDBIcon,
			},
			{
				name: 'PostgreSQL',
				icon: PostgreSQLIcon,
			},
		],
	},
	{
		name: 'Cloud',
		technologies: [
			{
				name: 'Docker',
				icon: DockerIcon,
			},
			{
				name: 'Linux',
				icon: LinuxIcon,
			},
			{
				name: 'AWS',
				icon: AWSIcon,
			},
		],
	},
	{
		name: 'Herramientas',
		technologies: [
			{
				name: 'Git',
				icon: GitIcon,
			},
			{
				name: 'Markdown',
				icon: MarkdownIcon,
			},
		],
	},
]
