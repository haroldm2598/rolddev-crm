'use client';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

interface BookPageClientProps {
	id: string;
}

export default function BookPageClient({ id }: BookPageClientProps) {
	const {
		data: book,
		isLoading,
		isError
	} = useQuery({
		queryKey: ['book', id],
		queryFn: async () => {
			// Use native fetch with cache options
			const res = await fetch(`/api/books/${id}`, {
				cache: 'no-store' // always fresh on client fetch
			});
			if (!res.ok) throw new Error('Failed to fetch');
			return res.json();
		},
		// Disable refetch on mount if data is hydrated
		staleTime: 1000 * 60 * 5 // 5 minutes
	});

	if (isLoading) return <p>Loading...</p>;
	if (isError || !book) return <p>Book not found</p>;

	return (
		<main className='max-w-3xl mx-auto p-6'>
			<h1 className='text-3xl font-bold mb-2'>{book.title}</h1>
			<p className='text-gray-600 mb-4'>By {book.author}</p>

			{book.image && (
				<div className='relative w-full h-64 mb-6'>
					<Image
						src={book.image}
						alt={book.title}
						fill
						className='object-cover rounded-md'
						priority
					/>
				</div>
			)}

			<h2 className='text-xl font-semibold mb-2'>{book.name}</h2>
			<p className='mb-4'>{book.summary}</p>

			<div className='bg-gray-100 p-4 rounded-md'>
				<h3 className='font-semibold'>Details</h3>
				<p>{book.details}</p>
			</div>
		</main>
	);
}
