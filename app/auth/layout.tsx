import React from 'react';

import SessionSigInWrapper from '@/components/SessionSignInWrapper';

interface RootLayoutProps {
	children: React.ReactNode;
}

export default async function AuthLayout({ children }: RootLayoutProps) {
	return (
		<div className='bg-blue-50 min-h-dvh'>
			<SessionSigInWrapper redirectUrl='/dashboard'>
				{children}
			</SessionSigInWrapper>
		</div>
	);
}
