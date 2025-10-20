import { ReactNode } from 'react';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { auth } from '@/lib/auth';

interface SessionWrapperProps {
	children: ReactNode;
	redirectUrl: string;
}

export default async function SessionWrapper({
	children,
	redirectUrl
}: SessionWrapperProps) {
	const session = await auth.api.getSession({
		headers: await headers()
	});

	// if user is log this page will not be routed
	if (!session) {
		redirect(redirectUrl);
	}
	return <div>{children}</div>;
}
