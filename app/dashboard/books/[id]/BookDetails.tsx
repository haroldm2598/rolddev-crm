'use client';

import Image from 'next/image';
import { useBook } from '../../_lib/useBooks';
import { BookProps } from '../../_lib/types';
import ButtonPrevious from '../../_component/ButtonPrevious';
import { Button } from '@/components/ui/button';

interface BookDetailsProps {
	id: string;
	initialData?: BookProps;
}

export default function BookDetails({ id, initialData }: BookDetailsProps) {
	const { data: book, isLoading, error } = useBook(id, initialData);

	if (isLoading) return <p className='p-6 animate-pulse'>Loading...</p>;
	if (error)
		return (
			<p className='p-6 text-red-500'>Error: {(error as Error).message}</p>
		);
	if (!book) return <p className='p-6'>No book found</p>;

	return (
		<div className='lg:ml-96 px-4 py-20 lg:px-0 lg:py-8 max-w-7xl flex flex-col gap-2'>
			<div className='max-w-sm'>
				<ButtonPrevious />
			</div>
			<div className='flex flex-col md:flex-row gap-6'>
				<Image
					src={book.coverUrl}
					alt={book.title}
					className='w-60 h-80 object-cover rounded-xl shadow-md'
					width='20'
					height='20'
					loading='lazy'
				/>
				<div className='flex-1 max-w-lg flex flex-col justify-between'>
					<h1 className='text-3xl font-bold mb-2'>{book.title}</h1>
					<p className='text-gray-500 mb-4'>By {book.author}</p>
					<p className='text-sm text-gray-400 mb-2'>
						Genre: {book.genre} | Rating: {book.rating}
					</p>
					<p className='text-gray-700 leading-relaxed'>{book.description}</p>

					<div className='mt-auto'>
						<Button className='bg-blue-600 w-full'>Edit Book</Button>
					</div>
				</div>
			</div>

			{/* Summary */}
			<div className='mt-8 bg-gray-50 p-4 rounded-lg'>
				<h2 className='text-xl font-semibold mb-2'>Summary</h2>
				<p className='text-gray-600'>{book.summary}</p>
			</div>
		</div>
	);
}
