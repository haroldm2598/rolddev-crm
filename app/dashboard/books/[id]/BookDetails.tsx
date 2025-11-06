'use client';

import Image from 'next/image';
import { useBook } from '../../_lib/useBooks';
import { BookProps } from '../../_lib/types';

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
		<div className='max-w-3xl mx-auto p-6'>
			<div className='flex flex-col md:flex-row gap-6'>
				<Image
					src={book.coverUrl}
					alt={book.title}
					className='w-60 h-80 object-cover rounded-xl shadow-md'
					width='20'
					height='20'
					loading='lazy'
				/>
				<div>
					<h1 className='text-3xl font-bold mb-2'>{book.title}</h1>
					<p className='text-gray-500 mb-4'>By {book.author}</p>
					<p className='text-sm text-gray-400 mb-2'>
						Genre: {book.genre} | Rating: {book.rating}
					</p>
					<p className='text-gray-700 leading-relaxed'>{book.description}</p>
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
