import * as z from 'zod';

export const SignInSchema = z.object({
	email: z.string().email({
		message: 'Please enter valid Email'
	}),
	password: z.string().min(6, {
		message: 'Password must be atleast 6 characters...'
	})
});

export const SignUpSchema = z.object({
	name: z.string().min(1, {
		message: 'Fullname is Required'
	}),
	email: z.string().email({
		message: 'Please enter valid Email'
	}),
	password: z.string().min(6, {
		message: 'Password must be atleast 6 characters...'
	})
});

export type SignInFormValues = z.infer<typeof SignInSchema>;
export type SignUpFormValues = z.infer<typeof SignUpSchema>;
