import { CardProps, MenuItemProps } from '@/app/(root)/_lib/types';
import {
	FaLock,
	FaRegCheckCircle,
	FaShieldAlt,
	FaUser,
	FaUsers
} from 'react-icons/fa';
import { Home, Users, BookOpen, ClipboardList, UserCheck } from 'lucide-react';

import { create } from 'zustand';

interface StoreProps {
	menuItems: MenuItemProps[];
	homeCard: CardProps[];
	dashboardCard: CardProps[];
}

export const useDataStore = create<StoreProps>((set, get) => ({
	menuItems: [
		{ name: 'Home', icon: Home, href: '/dashboard' },
		{ name: 'Analytics', icon: Users, href: '/dashboard/analytics' },
		{ name: 'All Books', icon: BookOpen, href: '/dashboard/books' },
		{ name: 'Borrow Requests', icon: ClipboardList, href: '/dashboard/borrow' },
		{ name: 'Account Requests', icon: UserCheck, href: '/dashboard/user' }
	],
	homeCard: [
		{
			icon: FaUser,
			bgColor: 'bg-blue-200',
			iconColor: 'text-blue-700',
			title: 'Social Authentication',
			desc: 'Seamlessly authenticate users with Google, Github, and other popular social providers. No need to manage passwords or worry about security'
		},
		{
			icon: FaUsers,
			bgColor: 'bg-green-200',
			iconColor: 'text-green-700',
			title: 'Email & Password',
			desc: 'Traditional email and password authentication with secure password hashing, email verfication, and password reset functionality'
		},
		{
			icon: FaShieldAlt,
			bgColor: 'bg-violet-200',
			iconColor: 'text-violet-700',
			title: 'Secure & Protected',
			desc: 'Build-in security functions including, JWT tokens, session management and protected routes that only authenticated users can access'
		}
	],
	dashboardCard: [
		{
			icon: FaRegCheckCircle,
			bgColor: 'bg-blue-200',
			iconColor: 'text-blue-700',
			title: 'Social Login',
			desc: 'Seamlessly authenticate with Github, Google and other social providers'
		},
		{
			icon: FaUser,
			bgColor: 'bg-green-200',
			iconColor: 'text-green-700',
			title: 'User Management',
			desc: 'Manage user accounts, profiles and authentication settings'
		},
		{
			icon: FaLock,
			bgColor: 'bg-violet-200',
			iconColor: 'text-violet-700',
			title: 'Secure Access',
			desc: 'Protected routes and secure authentication flow with better-auth'
		}
	]
}));
