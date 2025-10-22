export type AuthUser = {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	email: string;
	emailVerified: boolean;
	name: string;
	image?: string | null;
};
