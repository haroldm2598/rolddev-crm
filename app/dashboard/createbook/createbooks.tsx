'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
// import { signup } from '@/lib/actions/auth-actions';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { CreateBookFormValues, CreateBookSchema } from '../_lib/create-zod';
import { Textarea } from '@/components/ui/textarea';
import { useBooks } from '../_lib/useBooks';

export default function CreateBooks() {
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();
	const form = useForm<CreateBookFormValues>({
		resolver: zodResolver(CreateBookSchema), // RHF will use Zod's rules for validation
		defaultValues: {
			title: '',
			author: '',
			genre: '',
			rating: '',
			coverUrl: '',
			coverColor: '',
			description: '',
			summary: ''
		}
	});

	const { addBook } = useBooks();

	const onSubmit = async (values: CreateBookFormValues) => {
		setError(null);
		const {
			title,
			author,
			genre,
			rating,
			coverUrl,
			coverColor,
			description,
			summary
		} = values;

		await addBook.mutateAsync({
			title: title,
			author: author,
			genre: genre,
			rating: Number(rating),
			coverUrl: coverUrl,
			coverColor: coverColor,
			description: description,
			summary: summary
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input placeholder='Enter Title of the book' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='author'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Author</FormLabel>
							<FormControl>
								<Input placeholder='Enter the Author of the book' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='genre'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Genre</FormLabel>
							<FormControl>
								<Input placeholder='what is the genre' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='rating'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Rating</FormLabel>
							<FormControl>
								<Input placeholder='what is the rating' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='coverUrl'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Cover Page</FormLabel>
							<FormControl>
								<Input placeholder='Upload Cover Book' type='file' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='coverColor'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Cover Color</FormLabel>
							<FormControl>
								<Input
									placeholder='Pick A color for the book'
									type='color'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea
									className='md:min-h-32'
									placeholder='What is the description of the book?'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='summary'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Summary</FormLabel>
							<FormControl>
								<Textarea
									className='md:min-h-32'
									placeholder='Create a simple summary for the book'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{error && (
					<div role='alert' className='text-sm text-red-600'>
						{error}
					</div>
				)}

				<Button type='submit' className='w-full'>
					Create New Book
				</Button>
			</form>
		</Form>
	);
}
