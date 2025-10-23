import React from 'react';
import { BookBorrow } from './BookBorrow';

export default function Dashboard() {
	return (
		<div className='lg:ml-72 lg:mr-10 px-4 py-20 lg:py-8'>
			<section className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-0'>
				<BookBorrow />
				<BookBorrow />
			</section>
		</div>
	);
}
