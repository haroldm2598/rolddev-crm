'use client';

import { ColumnDef } from '@tanstack/react-table';
import { BookProps } from '../_lib/types';
import Image from 'next/image';

export const columns: ColumnDef<BookProps>[] = [
	{
		accessorKey: 'coverUrl',
		header: '',
		cell: ({ row }) => {
			const coverUrl = row.getValue('coverUrl') as string;
			const title = row.getValue('title') as string;
			return (
				<div className='flex justify-center'>
					<Image
						src={coverUrl}
						alt={title}
						width={45}
						height={65}
						className='rounded-md object-cover shadow-sm'
					/>
				</div>
			);
		}
	},
	{
		accessorKey: 'title',
		header: 'Book Title'
	},
	{
		accessorKey: 'author',
		header: 'Author'
	},
	{
		accessorKey: 'genre',
		header: 'Genre'
	},
	{
		accessorKey: 'rating',
		header: 'Rating'
	},
	{
		accessorKey: 'action',
		header: 'Action'
	}
];
