import React from 'react';

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return <div className='bg-blue-50 min-h-dvh p-4'>{children}</div>;
}
