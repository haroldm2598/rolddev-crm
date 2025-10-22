// TAKE NOTE
// USING THIS SIDE IF YOU WANT TO USE SERVER COMPONENT

'use server';

import { headers } from 'next/headers';
import { auth } from '../auth';
import { redirect } from 'next/navigation';

export const signup = async (name: string, email: string, password: string) => {
	const result = await auth.api.signUpEmail({
		body: {
			name,
			email,
			password,
			callbackURL: '/dashboard'
		}
	});

	return result;
};

export const signIn = async (email: string, password: string) => {
	const result = await auth.api.signInEmail({
		body: {
			email,
			password,
			callbackURL: '/dashboard'
		}
	});

	return result;
};

export const signInSocial = async (provider: 'github' | 'google') => {
	const { url } = await auth.api.signInSocial({
		body: {
			provider,
			callbackURL: '/dashboard'
		}
	});

	if (url) {
		redirect(url);
	}
};

export const signOut = async () => {
	const result = await auth.api.signOut({ headers: await headers() });

	return result;
};
