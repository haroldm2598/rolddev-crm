import * as z from 'zod';

export const EditBookSchema = z.object({
	title: z.string().optional(),
	author: z.string().optional(),
	genre: z.string().optional(),
	// rating: z
	// 	.string()
	// 	.optional()
	// 	.transform((val) => (val ? Number(val) : undefined))
	// 	.refine((val) => val === undefined || !isNaN(val), {
	// 		message: 'Rating must be a number'
	// 	}),
	rating: z.string().optional(),
	coverUrl: z.string().optional(),
	coverColor: z.string().optional(),
	description: z.string().optional(),
	summary: z.string().optional()
});

export type EditBookFormValues = z.infer<typeof EditBookSchema>;
