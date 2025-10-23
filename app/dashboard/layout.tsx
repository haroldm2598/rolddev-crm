import { Toaster } from '@/components/ui/sonner';
import { ReactNode } from 'react';
import Sidebar from './_component/Sidebar';
import { getServerSession } from '@/lib/auth-get-sessions';
import { unauthorized } from 'next/navigation';

interface DashboardLayout {
	children: ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayout) {
	const session = await getServerSession();
	const user = session?.user;

	if (!user) unauthorized();

	return (
		<div className='bg-blue-50 min-h-dvh'>
			<Sidebar user={user} />
			{children}
			<Toaster />
		</div>
	);
}
