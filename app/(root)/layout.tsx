import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

interface RootLayoutProps {
	children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
	const session = await auth.api.getSession({
		headers: await headers()
	});

	return (
		<div className='bg-blue-50 min-h-dvh p-4'>
			<Navbar session={session} />
			{children}
		</div>
	);
}
