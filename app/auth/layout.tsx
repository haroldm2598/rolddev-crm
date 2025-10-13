import React from 'react';

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function AuthLayout({ children }: RootLayoutProps) {
	return <div>{children}</div>;
}
