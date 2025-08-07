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
		description:
			'Adquirí una sólida comprensión de los fundamentos y tecnologías clave del desarrollo de software de la actualidad. A través de un enfoque práctico y colaborativo, resolví múltiples desafíos diarios demandados por el mercado laboral.',
		startDate: new Date('2022-09-01'),
		endDate: new Date('2025-06-01'),
	},
	{
		title: 'Técnico en Sistemas Microinformáticos y Redes',
		college: 'IES Villaverde',
		description:
			'Me especializo en instalar, configurar y mantener sistemas microinformáticos y redes locales en entornos pequeños. Garantizó el funcionamiento y aplicó protocolos de calidad, seguridad y respeto al medio ambiente.',
		startDate: new Date('2020-09-01'),
		endDate: new Date('2022-06-01'),
	},
]
