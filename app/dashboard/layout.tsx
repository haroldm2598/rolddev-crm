import SessionWrapper from '@/components/SessionWrapper';
import { Toaster } from '@/components/ui/sonner';
import { ReactNode } from 'react';

interface DashboardLayout {
	children: ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayout) {
	return (
		<div className='bg-blue-50 min-h-dvh'>
			<SessionWrapper redirectUrl='/auth/signin'>
				{children}
				<Toaster />
			</SessionWrapper>
		</div>
	);
}
