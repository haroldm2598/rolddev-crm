'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Menu, X } from 'lucide-react';

import UserProfile from './UserProfile';
import UserSignOut from './UserSignOut';

import { cn } from '@/lib/utils';
import { User } from '@/lib/auth';
import { useDataStore } from '@/lib/store';

interface DashboardProps {
	user: User;
}

export default function Sidebar({ user }: DashboardProps) {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const menuItems = useDataStore((state) => state.menuItems);

	return (
		<>
			{/* Mobile Top Bar */}
			<div className='lg:hidden flex items-center justify-between px-4 py-3 bg-white text-gray-800 shadow-md w-full fixed top-0 z-50'>
				<div className='flex items-center gap-2'>
					<div className='bg-blue-600 rounded-full w-6 h-6' />
					<h1 className='text-lg font-semibold'>BookWise</h1>
				</div>
				<button onClick={() => setOpen(!open)}>
					{open ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
				</button>
			</div>

			{/* Sidebar (Desktop & Mobile Drawer) */}
			<aside
				className={cn(
					'fixed  z-40 top-0 left-0 min-h-screen bg-white text-gray-800 flex flex-col justify-between shadow-lg transition-transform duration-300',
					open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
					'w-64'
				)}
			>
				{/* Sidebar Content */}
				<div className='p-6 mt-12 md:mt-0'>
					{/* Logo */}
					<div className='hidden md:flex items-center gap-2 mb-8'>
						<div className='bg-blue-600 rounded-full w-8 h-8' />
						<h1 className='text-xl font-semibold'>BookWise</h1>
					</div>

					{/* Nav Links */}
					<nav className='flex flex-col space-y-2'>
						{menuItems.map((item) => {
							const isActive = pathname === item.href;

							return (
								<Link
									key={item.name}
									href={item.href}
									onClick={() => setOpen(false)}
									className={cn(
										'flex items-center gap-3 rounded-lg px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition',
										isActive && 'bg-blue-600 text-white hover:bg-blue-700'
									)}
								>
									<item.icon className='w-5 h-5' />
									{item.name}
								</Link>
							);
						})}
					</nav>
				</div>

				{/* Bottom Profile */}
				<div className='p-4 border-t flex items-center justify-between'>
					<UserProfile user={user} />
					<UserSignOut />
				</div>
			</aside>

			{/* Mobile Overlay */}
			{open && (
				<div
					className='fixed inset-0 bg-black/40 z-30 lg:hidden'
					onClick={() => setOpen(false)}
				/>
			)}
		</>
	);
}
