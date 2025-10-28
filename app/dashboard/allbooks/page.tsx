'use client';
// import { Metadata } from 'next';
// import { TableBook } from '../_component/TableBook';
import { columns } from './column';
import { DataTable } from './data-table';
import { useDataStore } from '@/lib/store';
import { useEffect } from 'react';

// export const generateMetadata = async (): Promise<Metadata> => {
// 	const dummyUserName = 'mikey';

// 	return {
// 		title: `All Books | ${dummyUserName}`,
// 		description: `Welcome to Analytics overview ${dummyUserName}.`,
// 		openGraph: {
// 			title: `All Books | ${dummyUserName}`,
// 			description: 'Private Analytics',
// 			url: 'https://localhost:3000/dashboard/analytics',
// 			siteName: 'rolddev-crm',
// 			type: 'website'
// 		}
// 	};
// };

export default function AllBooksPage() {
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
		<div className='lg:ml-96 px-4 py-20 lg:px-0 lg:py-8 max-w-7xl flex flex-col'>
			{/* <TableBook /> */}
			<DataTable columns={columns} data={books} />
		</div>
	);
}
