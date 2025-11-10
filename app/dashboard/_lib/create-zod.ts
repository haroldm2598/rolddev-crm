import * as z from 'zod';

export const CreateBookSchema = z.object({
	title: z.string().min(1, {
		message: 'title is Required'
	}),
	author: z.string().min(1, {
		message: 'author is Required'
	}),
	genre: z.string().min(1, {
		message: 'genre is Required'
	}),
	rating: z.string().min(1, {
		message: 'rating is Required'
	}),
	coverUrl: z.string().min(1, { message: 'Cover URL is required' }), // ✅ now required
	coverColor: z.string().min(1, {
		message: 'Cover Color is Required'
	}),
	description: z.string().min(1, {
		message: 'description is Required'
	}),
	summary: z.string().min(1, {
		message: 'summary is Required'
	})
});

export type CreateBookFormValues = z.infer<typeof CreateBookSchema>;
