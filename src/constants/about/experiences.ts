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
		title: 'Técnico de TIC',
		company: 'Creática ONG',
		description:
			'Contribuí al impacto social de la organización en el ámbito educativo al apoyar proyectos tecnológicos, con el objetivo de mitigar el fracaso escolar.',
		location: {
			country: 'España',
			city: 'Madrid',
			type: 'Presencial',
		},
		startDate: new Date('2019-05-01'),
		endDate: new Date('2019-06-01'),
	},
	{
		title: 'Software Tester',
		company: 'We do the best',
		description:
			'Garantizaba la calidad del software mediante pruebas exhaustivas antes y después de las actualizaciones, asegurando una experiencia sin fallos para el usuario.',
		location: {
			country: 'España',
			city: 'Madrid',
			type: 'Presencial',
		},
		startDate: new Date('2022-04-01'),
		endDate: new Date('2022-07-01'),
	},
	{
		title: 'Desarrollador de software',
		company: 'Fundación Esplai',
		description:
			'Desarrolle una plataforma para el despliegue de laboratorios de prueba de WordPress y Moodle, dirigida a entidades del tercer sector. Posteriormente, me encargué de la recopilación, organización, transformación y análisis de los datos generados por los usuarios en dichos laboratorios, con el objetivo de elaborar un informe sobre la viabilidad de implementación de estos sistemas.',
		location: {
			country: 'España',
			city: 'Madrid',
			type: 'Híbrido',
		},
		startDate: new Date('2025-03-01'),
		endDate: new Date('2025-06-01'),
	},
]
