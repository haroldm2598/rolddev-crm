import React from 'react';

import SessionSigInWrapper from '@/components/SessionSignInWrapper';
import { Toaster } from '@/components/ui/sonner';

interface RootLayoutProps {
	children: React.ReactNode;
}

export default async function AuthLayout({ children }: RootLayoutProps) {
	return (
		<div className='bg-blue-50 min-h-dvh'>
			<SessionSigInWrapper redirectUrl='/dashboard'>
				{children}
				<Toaster />
			</SessionSigInWrapper>
		</div>
	);
}
