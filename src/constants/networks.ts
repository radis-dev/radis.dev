import GmailIcon from '@/components/icons/Gmail.svg'
import GithubIcon from '@/components/icons/Github.svg'
import LinkedInIcon from '@/components/icons/LinkedIn.svg'
import XIcon from '@/components/icons/X.svg'

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
		name: 'X',
		icon: XIcon,
		url: 'https://x.com/radisdev',
	},
]
