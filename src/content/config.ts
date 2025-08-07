import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
	loader: glob({
		base: 'src/content/blog',
		pattern: '**/*.mdx',
	}),
	schema: z
		.object({
			title: z
				.string({
					required_error: 'El titulo es obligatorio',
					invalid_type_error: 'El titulo debe ser un texto',
				})
				.trim()
				.regex(
					/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ¿?¡!.,;:"'(){}[\]\/\- ]+$/,
					'El titulo solo puede contener letras, numeros, espacios y los caracteres especiales: / - ¿ ? ¡ ! . , ; : " \' ( ) { } [ ]'
				)
				.min(10, 'El titulo debe tener al menos 10 caracteres')
				.max(100, 'El titulo debe tener como maximo 100 caracteres')
				.refine((value) => !/\s{2,}/.test(value), {
					message: 'El titulo no puede contener espacios en blanco consecutivos',
				}),

			description: z
				.string({
					required_error: 'La descripcion es obligatoria',
					invalid_type_error: 'La descripcion debe ser un texto',
				})
				.trim()
				.regex(
					/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ¿?¡!.,;:"'(){}[\]\/\- ]+$/,
					'La descripcion solo puede contener letras, numeros, espacios y los caracteres especiales: / - ¿ ? ¡ ! . , ; : " \' ( ) { } [ ]'
				)
				.min(100, 'La descripcion debe tener al menos 100 caracteres')
				.max(300, 'La descripcion debe tener como maximo 300 caracteres')
				.refine((value) => !/\s{2,}/.test(value), {
					message: 'La descripcion no puede contener espacios en blanco consecutivos',
				}),
			thumbnail: z.object({
				alt: z
					.string({
						required_error: 'El texto alternativo del thumbnail es obligatoria',
						invalid_type_error: 'El texto alternativo del thumbnail debe ser un texto',
					})
					.trim()
					.regex(
						/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ¿?¡!.,;:"'(){}[\]\/\- ]+$/,
						'El texto alternativo del thumbnail solo puede contener letras, numeros, espacios y los caracteres especiales: / - ¿ ? ¡ ! . , ; : " \' ( ) { } [ ]'
					)
					.min(10, 'El texto alternativo del thumbnail debe tener al menos 10 caracteres')
					.refine((value) => !/\s{2,}/.test(value), {
						message: 'El texto alternativo del thumbnail no puede contener espacios en blanco consecutivos',
					}),
			}),
			category: z
				.string({
					required_error: 'La categoria es obligatoria',
					invalid_type_error: 'La categoria debe ser un texto',
				})
				.trim()
				.regex(/^[a-záéíóúñü]+$/, 'La categoria solo puede contener letras en minusculas')
				.max(30, 'La categoria debe tener como maximo 30 caracteres')
				.default('otros'),

			state: z
				.enum(['draft', 'published', 'archived'], {
					invalid_type_error: 'Los estados permitidos solamente pueden ser "draft", "published" o "archived"',
				})
				.default('draft'),

			publishedAt: z.coerce.date({
				required_error: 'La fecha de publicacion es obligatoria',
				invalid_type_error: 'La fecha de publicacion debe tener un formato valido (YYYY-MM-DD)',
			}),

			updatedAt: z.coerce
				.date({
					invalid_type_error: 'La fecha de actualización debe tener un formato valido (YYYY-MM-DD)',
				})
				.optional(),
		})
		.refine((data) => !data.updatedAt || data.updatedAt > data.publishedAt, {
			message: 'La fecha de actualización no puede ser anterior a la fecha de publicación',
		})
		.refine((data) => data.state === 'draft' || data.publishedAt < new Date(), {
			message: 'La fecha de publicación no puede ser una fecha futura si el artículo está publicado o archivado',
		}),
})

const legal = defineCollection({
	loader: glob({
		base: 'src/content/legal',
		pattern: '**/*.mdx',
	}),
})

export const collections = { blog, legal }
