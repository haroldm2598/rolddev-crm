import React from 'react';

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function AuthLayout({ children }: RootLayoutProps) {
	return <div className='bg-blue-50 min-h-dvh'>{children}</div>;
}
