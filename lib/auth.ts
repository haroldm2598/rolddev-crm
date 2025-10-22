import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { nextCookies } from 'better-auth/next-js';
import prisma from './prisma';

export const auth = betterAuth({
	database: prismaAdapter(prisma, { provider: 'postgresql' }),
	emailAndPassword: {
		enabled: true
	},
	socialProviders: {
		github: {
			clientId: '',
			clientSecret: ''
		},
		google: {
			clientId: '',
			clientSecret: ''
		}
	},
	user: {
		additionalFields: {
			role: {
				type: 'string',
				input: false
			}
		}
	}
	// plugins: [nextCookies()]
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
