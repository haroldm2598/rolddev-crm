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
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { CreateBookFormValues, CreateBookSchema } from '../_lib/create-zod';
import { Textarea } from '@/components/ui/textarea';
import { useBooks } from '../_lib/useBooks';
import { supabase } from '@/lib/supabaseClient';

export default function CreateBooks() {
	const [error, setError] = useState<string | null>(null);
	const [file, setFile] = useState<File | null>(null);

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
		// Kailangan ko pala mag create panibagong bucket para sa image sa supabase nasa chatgpt lahat ng sagot
		setError(null);

		let coverUrl = '';

		// 🟢 NEW: Upload image to Supabase Storage (bucket: books-image)
		if (file) {
			const fileName = `${Date.now()}_${file.name}`;

			const { data, error: uploadError } = await supabase.storage
				.from('books-image') // your Supabase bucket name
				.upload(fileName, file);

			if (uploadError) {
				setError('Failed to upload cover image');
				console.error(uploadError);
				return;
			}

			// 🟢 Get public URL
			const { data: publicUrlData } = supabase.storage
				.from('books-image')
				.getPublicUrl(data.path);

			coverUrl = publicUrlData.publicUrl;
		}

		await addBook.mutateAsync({
			title: values.title,
			author: values.author,
			genre: values.genre,
			rating: Number(values.rating),
			coverUrl: coverUrl,
			coverColor: values.coverColor,
			description: values.description,
			summary: values.summary
		});

		toast.success('Book created successfully!');
		router.push('/dashboard');
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

				{/* <FormField
					control={form.control}
					name='coverUrl'
					render={() => (
						<FormItem>
							<FormLabel>Cover Page</FormLabel>
							<FormControl> */}
				{/* <Input placeholder='Upload Cover Book' type='file' {...field} /> */}
				{/* <Input
									type='file'
									accept='image/*'
									onChange={(e) => {
										const file = e.target.files?.[0];
										setFile(file || null);
									}}
								/> */}
				{/* </FormControl>
							<FormMessage />
						</FormItem>
					)}
				/> */}

				<FormField
					control={form.control}
					name='coverUrl'
					render={() => (
						<FormItem>
							<FormLabel>Book Cover</FormLabel>
							<FormControl>
								<Input
									type='file'
									accept='image/*'
									onChange={(e) => {
										const file = e.target.files?.[0];
										setFile(file || null);
									}}
								/>
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
