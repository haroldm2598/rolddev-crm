'use client';

import React, { useEffect } from 'react';
import { BookBorrow } from './BookBorrow';
import { useDataStore } from '@/lib/store';
import DashboardHeader from '@/components/DashboardHeader';

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
		<div className='space-y-4'>
			<header className='max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				<DashboardHeader title='Barrowed Books' quantity={200} />
				<DashboardHeader title='Total Books' quantity={499} />
				<DashboardHeader title='Total Users' quantity={700} />
			</header>

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
						limit={0}
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
