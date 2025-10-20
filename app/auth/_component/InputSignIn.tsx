'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInFormValues, SignInSchema } from '../_lib/auth-zod';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signIn } from '@/lib/actions/auth-actions';

export default function InputSignIn() {
	const form = useForm<SignInFormValues>({
		resolver: zodResolver(SignInSchema), // RHF will use Zod's rules for validation
		defaultValues: {
			email: '',
			password: ''
		}
	});

	async function onSubmit(values: SignInFormValues) {
		// This function only runs if Zod validation PASSES!
		const result = await signIn(values.email, values.password);
		// TODO: Send data to your API for sign-in
		console.log('Form submitted successfully:', values);
		// Example: show a success message (if using a toast library)
		// toast({ title: "Sign In Successful!", description: "Welcome back." });
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder='Enter your email...' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									type='password'
									placeholder='Enter your password...'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit' className='w-full'>
					Sign In
				</Button>
			</form>
		</Form>
	);
}
