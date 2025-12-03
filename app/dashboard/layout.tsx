import { ReactNode } from 'react';
import { Metadata } from 'next';
import { unauthorized } from 'next/navigation';

import Sidebar from './_component/Sidebar';
import { Toaster } from '@/components/ui/sonner';

import { getServerSession } from '@/lib/auth-get-sessions';
import { UserProvider } from './_hooks/useContext';

interface DashboardLayout {
	children: ReactNode;
}

export const metadata: Metadata = {
	title: {
		default: 'Dashboard | YourApp',
		template: '%s | YourApp'
	},
	description: 'Access your dashboard analytics and insights.'
};

export default async function DashboardLayout({ children }: DashboardLayout) {
	const session = await getServerSession();
	const user = session?.user;

	if (!user) unauthorized();

	return (
		<UserProvider user={user}>
			<div className='bg-blue-50 min-h-dvh'>
				<Sidebar user={user} />
				{children}
				<Toaster />
			</div>
		</UserProvider>
	);
}
