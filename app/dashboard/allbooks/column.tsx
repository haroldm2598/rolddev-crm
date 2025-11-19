'use client';

import { ColumnDef } from '@tanstack/react-table';
import { BookProps } from '../_lib/types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2, ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useDeleteBook } from '../_lib/useBooks';

const ActionCell = ({ bookId }: { bookId: string }) => {
	const router = useRouter();
	const { mutateAsync: deleteBook } = useDeleteBook();

	const handleView = () => {
		router.push(`/dashboard/books/${bookId}`);
		console.log('View ', bookId);
	};

	// const handleEdit = () => {
	// 	console.log('Edit ', bookId);
	// };

	const handleDelete = async () => {
		await deleteBook(bookId);
		console.log('Delete ', bookId);
	};

	return (
		<div className='flex items-center gap-1'>
			<Button variant='ghost' size='icon' onClick={handleView}>
				<ExternalLink className='h-4 w-4 text-blue-500' />
			</Button>
			{/* <Button variant='ghost' size='icon' onClick={handleEdit}>
				<Pencil className='h-4 w-4 text-blue-500' />
			</Button> */}
			<Button variant='ghost' size='icon' onClick={handleDelete}>
				<Trash2 className='h-4 w-4 text-red-500' />
			</Button>
		</div>
	);
};

export const columns: ColumnDef<BookProps>[] = [
	{
		accessorKey: 'coverUrl',
		header: '',
		cell: ({ row }) => {
			const coverUrl = row.getValue('coverUrl') as string;
			const title = row.getValue('title') as string;
			return (
				<div className='flex justify-center h-full'>
					{coverUrl ? (
						<Image
							src={coverUrl}
							alt={title}
							width={80}
							height={100}
							className='rounded-md object-cover shadow-sm'
						/>
					) : (
						<div className='w-[60px] h-[80px] bg-gray-200 flex items-center justify-center text-xs text-gray-500'>
							No Cover
						</div>
					)}
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
		header: 'Action',
		cell: ({ row }) => {
			const book = row.original;

			return <ActionCell bookId={book.id} />;
		}
	}
];
