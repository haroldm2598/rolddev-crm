'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage
} from '@/components/ui/form';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabaseClient';
import { useBook, useUpdateBook } from '@/app/dashboard/_lib/useBooks';
import {
	EditBookFormValues,
	EditBookSchema
} from '@/app/dashboard/_lib/edit-zod';
import { BookProps } from '@/app/dashboard/_lib/types';
import { Textarea } from '@/components/ui/textarea';

export default function EditBook() {
	// lipat mo yung router sa page
	const router = useRouter();
	const { id } = useParams() as { id: string };
	const { data: book, isLoading } = useBook(id);
	const { mutateAsync: updateBook } = useUpdateBook();
	const [file, setFile] = useState<File | null>(null);

	// const form = useForm<EditBookFormValues>({
	// 	resolver: zodResolver(EditBookSchema),
	// 	defaultValues: book
	// });

	const form = useForm<EditBookFormValues>({
		resolver: zodResolver(EditBookSchema),
		defaultValues: book as Partial<EditBookFormValues>
	});

	// ✅ When book data is loaded, reset form values
	useEffect(() => {
		if (book)
			form.reset({
				title: book.title,
				author: book.author,
				genre: book.genre,
				rating: book.rating?.toString(), // <-- FIXED
				coverUrl: book.coverUrl,
				coverColor: book.coverColor,
				description: book.description,
				summary: book.summary
			});
	}, [book, form]);

	const onSubmit = async (values: EditBookFormValues) => {
		let coverUrl = values.coverUrl;

		if (file) {
			const fileName = `${Date.now()}_${file.name}`;
			const { data, error } = await supabase.storage
				.from('books-image')
				.upload(fileName, file);

			if (error) {
				toast.error('Failed to upload image');
				return;
			}

			const { data: publicUrlData } = supabase.storage
				.from('books-image')
				.getPublicUrl(data.path);
			coverUrl = publicUrlData.publicUrl;
		}

		if (!book) return;

		const updatedBook: BookProps = {
			...book,
			...values,
			rating: values.rating ? Number(values.rating) : book.rating, // <-- FIXED
			coverUrl: coverUrl ?? book.coverUrl,
			id
		};

		await updateBook(updatedBook);

		toast.success('Book updated successfully!');
		router.push('/dashboard/allbooks');
	};

	if (isLoading) return <p>Loading book...</p>;

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input {...field} placeholder='Enter title' />
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

				<Button type='submit' className='w-full'>
					Save Changes
				</Button>
			</form>
		</Form>
	);
}
