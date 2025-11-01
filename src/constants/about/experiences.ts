type LocationType = 'Presencial' | 'Remoto' | 'Híbrido'

export interface IExperienceLocation {
	city: string
	country: string
	type: LocationType
}

export interface IExperience {
	title: string
	company: string
	description: string
	location?: IExperienceLocation
	startDate: Date
	endDate?: Date
}

export const experiences: IExperience[] = [
	{
		title: 'Técnico IT',
		company: 'Creática ONG',
		description: '',
		location: {
			country: 'España',
			city: 'Madrid',
			type: 'Presencial',
		},
		startDate: new Date('2019-05-01'),
		endDate: new Date('2019-06-01'),
	},
	{
		title: 'QA Tester',
		company: 'We do the best',
		description: '',
		location: {
			country: 'España',
			city: 'Madrid',
			type: 'Presencial',
		},
		startDate: new Date('2022-04-01'),
		endDate: new Date('2022-07-01'),
	},
	{
		title: 'Desarrollador Backend',
		company: 'Fundación Esplai',
		description: '',
		location: {
			country: 'España',
			city: 'Madrid',
			type: 'Híbrido',
		},
		startDate: new Date('2025-03-01'),
		endDate: new Date('2025-06-01'),
	},
	{
		title: 'Técnico IT',
		company: 'Fundación Esplai',
		description: '',
		location: {
			country: 'España',
			city: 'Madrid',
			type: 'Híbrido',
		},
		startDate: new Date('2025-09-01'),
	},
]
