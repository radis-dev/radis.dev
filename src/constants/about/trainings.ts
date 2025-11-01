export interface ITraining {
	title: string
	college: string
	description: string
	startDate: Date
	endDate?: Date
}

export const trainings: ITraining[] = [
	{
		title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
		college: 'IES Villaverde',
		description: '',
		startDate: new Date('2022-09-01'),
		endDate: new Date('2025-06-01'),
	},
	{
		title: 'Técnico en Sistemas Microinformáticos y Redes',
		college: 'IES Villaverde',
		description: '',
		startDate: new Date('2020-09-01'),
		endDate: new Date('2022-06-01'),
	},
]
