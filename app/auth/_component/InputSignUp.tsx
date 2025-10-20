'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpFormValues, SignUpSchema } from '../_lib/auth-zod';

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
import { signup } from '@/lib/actions/auth-actions';

export default function InputSignUp() {
	const form = useForm<SignUpFormValues>({
		resolver: zodResolver(SignUpSchema), // RHF will use Zod's rules for validation
		defaultValues: {
			name: '',
			email: '',
			password: ''
		}
	});

	const onSubmit = async (values: SignUpFormValues) => {
		// This function only runs if Zod validation PASSES!
		// TODO: Send data to your API for sign-in
		const result = await signup(values.name, values.email, values.password);
		// TODO: Send data to your API for sign-in
		console.log('Form submitted successfully:', values);
		// Example: show a success message (if using a toast library)
		// toast({ title: "Sign In Successful!", description: "Welcome back." });
	};
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Fullname</FormLabel>
							<FormControl>
								<Input placeholder='Enter your Fullname' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder='Enter your email' {...field} />
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
									placeholder='Enter your password'
									type='password'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit' className='w-full'>
					Sign Up
				</Button>
			</form>
		</Form>
	);
}
