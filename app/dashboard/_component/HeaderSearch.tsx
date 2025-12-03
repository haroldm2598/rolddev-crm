'use client';

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useUser } from '../_hooks/useContext';

export default function HeaderSearch() {
	const user = useUser();

	return (
		<div className='flex flex-col lg:flex-row items-start lg:items-center justify-between py-3'>
			<section className='space-y-2'>
				<h1 className='font-semibold text-2xl'>
					Welcome {user?.name?.split(' ')[0]}
				</h1>
				<h2 className='text-gray-400'>Monitor your progress and user</h2>
			</section>

			<section className='relative w-full max-w-sm'>
				<Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
				<Input
					type='text'
					placeholder='Search books, user and author'
					className='pl-9 h-10'
				/>
			</section>
		</div>
	);
}
