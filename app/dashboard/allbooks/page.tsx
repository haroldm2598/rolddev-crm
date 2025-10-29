import { Metadata } from 'next';
import { unauthorized } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { columns } from './column';
import { DataTable } from './data-table';

import { getServerSession } from '@/lib/auth-get-sessions';
import HeaderSearch from '../_component/HeaderSearch';

export const generateMetadata = async (): Promise<Metadata> => {
	const dummyUserName = 'mikey';

	return {
		title: `All Books | ${dummyUserName}`,
		description: `Welcome to Analytics overview ${dummyUserName}.`,
		openGraph: {
			title: `All Books | ${dummyUserName}`,
			description: 'Private Analytics',
			url: 'https://localhost:3000/dashboard/analytics',
			siteName: 'rolddev-crm',
			type: 'website'
		}
	};
};

export default async function AllBooksPage() {
	const session = await getServerSession();
	const user = session?.user;

	if (!user) unauthorized();

	return (
		<div className='lg:ml-96 px-4 py-20 lg:px-0 lg:py-8 max-w-7xl flex flex-col'>
			<HeaderSearch user={user} />

			<div className='p-4 bg-white rounded-md'>
				<div className='mb-4 flex items-center justify-between'>
					<h1 className='text-xl text-gray-900 font-semibold'>All Books</h1>

					<div className='flex gap-2'>
						<Button variant='outline' className='cursor-pointer'>
							A/Z
						</Button>
						<Button className='bg-blue-900 cursor-pointer'>
							Create New Book
						</Button>
					</div>
				</div>

				<DataTable columns={columns} />
			</div>
		</div>
	);
}
