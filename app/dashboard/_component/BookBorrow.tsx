'use client';

import Image from 'next/image';
import { Eye, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BorrowRequest } from '../_lib/types';

const borrowRequests: BorrowRequest[] = [
	{
		id: 1,
		title: 'Inside Evil: Inside Evil Series, Book 1',
		author: 'Rachel Heng',
		genres: 'Strategic, Fantasy',
		user: 'Darrell Stewards',
		date: '12/01/24',
		cover: 'https://ik.imagekit.io/pwd17k26p/books/covers/file_aiko1JtEn.png',
		userAvatar: 'https://randomuser.me/api/portraits/men/12.jpg'
	},
	{
		id: 2,
		title: 'Jayne Castle - People in Glass Houses',
		author: 'Rachel Heng',
		genres: 'Strategic, Fantasy',
		user: 'Darrell Stewards',
		date: '12/01/24',
		cover: 'https://ik.imagekit.io/pwd17k26p/books/covers/file_zIgYlIxcY.png',
		userAvatar: 'https://randomuser.me/api/portraits/men/45.jpg'
	},
	{
		id: 3,
		title: 'The Great Reclamation: A Novel',
		author: 'Rachel Heng',
		genres: 'Strategic, Fantasy',
		user: 'Darrell Stewards',
		date: '12/01/24',
		cover: 'https://ik.imagekit.io/pwd17k26p/books/covers/file_1pCoBDI11.png',
		userAvatar: 'https://randomuser.me/api/portraits/men/5.jpg'
	}
];

export function BookBorrow() {
	return (
		<Card className='bg-white max-w-xl border-none shadow-sm rounded-2xl'>
			<CardHeader className='flex flex-row items-center justify-between'>
				<CardTitle className='text-lg font-semibold text-gray-800'>
					Borrow Requests
				</CardTitle>
				<Button
					variant='secondary'
					className='text-sm text-gray-500 hover:text-blue-700 hover:bg-blue-50'
				>
					View all
				</Button>
			</CardHeader>

			<CardContent className='relative overflow-hidden space-y-3'>
				{borrowRequests.map((book) => (
					<div
						key={book.id}
						className='flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition'
					>
						{/* Left side: book image and info */}
						<div className='flex items-center gap-3'>
							<Image
								src={book.cover}
								alt={book.title}
								width={45}
								height={65}
								className='rounded-md object-cover'
							/>
							<div className='flex flex-col'>
								<h3 className='text-sm font-semibold text-gray-900'>
									{book.title}
								</h3>
								<p className='text-xs text-gray-500'>
									By {book.author} • {book.genres}
								</p>
								<div className='flex items-center gap-2 mt-1'>
									<Image
										src={book.userAvatar}
										alt={book.user}
										width={20}
										height={20}
										className='rounded-full'
									/>
									<span className='text-xs text-gray-600'>{book.user}</span>
									<span className='flex items-center gap-1 text-xs text-gray-500'>
										<Calendar className='w-3 h-3' />
										{book.date}
									</span>
								</div>
							</div>
						</div>

						{/* Right side: eye icon */}
						<Button
							variant='ghost'
							size='icon'
							className='hover:bg-blue-100 text-gray-500'
						>
							<Eye className='w-5 h-5' />
						</Button>
					</div>
				))}

				<div className='pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent' />
			</CardContent>
		</Card>
	);
}
