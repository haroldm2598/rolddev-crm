import * as z from 'zod';

export const EditBookSchema = z.object({
	title: z.string().optional(),
	author: z.string().optional(),
	genre: z.string().optional(),
	rating: z
		.union([z.number(), z.string().transform((val) => Number(val))])
		.optional(),
	coverUrl: z.string().optional(),
	coverColor: z.string().optional(),
	description: z.string().optional(),
	summary: z.string().optional()
});

export type EditBookFormValues = z.infer<typeof EditBookSchema>;
