'use client';

import React, { useEffect } from 'react';
import { BookBorrow } from './BookBorrow';
import { useDataStore } from '@/lib/store';

export default function Dashboard() {
	const { setBooks } = useDataStore();
	const books = useDataStore((state) => state.bookData);

	useEffect(() => {
		const fetchBooks = async () => {
			const response = await fetch('/books.json');
			const data = await response.json();

			setBooks(data);
		};

		fetchBooks();
	}, [setBooks]);

	return (
		<div className='lg:ml-72 lg:mr-10 px-4 py-20 lg:py-8'>
			<section className='max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 '>
				<div className='grid grid-cols-1 gap-4'>
					<BookBorrow
						title='Borrow Requests'
						createBook={false}
						books={books}
						limit={3}
					/>
					<BookBorrow
						title='Account Resquested'
						createBook={false}
						books={books}
						limit={3}
					/>
				</div>

				<div>
					<BookBorrow
						title='Recently Added Books'
						createBook={true}
						books={books}
						limit={6}
					/>
				</div>
			</section>
		</div>
	);
}
