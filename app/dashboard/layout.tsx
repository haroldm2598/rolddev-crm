import SessionWrapper from '@/components/SessionWrapper';
import { ReactNode } from 'react';

interface DashboardLayout {
	children: ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayout) {
	return (
		<div className='bg-blue-50 min-h-dvh'>
			<SessionWrapper redirectUrl='/auth/signin'>{children}</SessionWrapper>
		</div>
	);
}
