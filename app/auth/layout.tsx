import { ReactNode } from 'react';

import { unauthorized } from 'next/navigation';

import { getServerSession } from '@/lib/auth-get-sessions';

import SessionSigInWrapper from '@/components/SessionSignInWrapper';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/Navbar';

interface RootLayoutProps {
	children: ReactNode;
}

export default async function AuthLayout({ children }: RootLayoutProps) {
	const session = await getServerSession();

	return (
		<div className='bg-blue-50 min-h-dvh'>
			<SessionSigInWrapper redirectUrl='/dashboard'>
				<Navbar session={session} />
				{children}
				<Toaster />
			</SessionSigInWrapper>
		</div>
	);
}
