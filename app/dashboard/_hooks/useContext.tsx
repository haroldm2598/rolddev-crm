'use client';

import { User } from '@/lib/auth';
import { createContext, ReactNode, useContext } from 'react';

interface UserProviderProps {
	user: User;
	children: ReactNode;
}
const UserContext = createContext<User | null>(null);

export const UserProvider = ({ user, children }: UserProviderProps) => {
	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = (): User => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useUser must be used within a UserProvider');
	}
	return context;
};
