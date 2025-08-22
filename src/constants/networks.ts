import GmailIcon from '@/components/icons/Gmail.svg'
import GithubIcon from '@/components/icons/Github.svg'
import LinkedInIcon from '@/components/icons/LinkedIn.svg'
import BookIcon from '@/components/icons/Book.svg'

export interface INetworks {
	name: string
	icon: any
	url: string
}

export const networks: INetworks[] = [
	{
		name: 'Contacto',
		icon: GmailIcon,
		url: 'mailto:hola@radis.dev',
	},
	{
		name: 'Github',
		icon: GithubIcon,
		url: 'https://github.com/radis-dev',
	},
	{
		name: 'LinkedIn',
		icon: LinkedInIcon,
		url: 'https://linkedin.com/in/radisdev',
	},
	{
		name: 'CV',
		icon: BookIcon,
		url: 'https://docs.google.com/document/d/1dPkddUmqjjO3QFV8ry9AJm_UlyaKFc7fl_VnSWD96B0',
	},
]
