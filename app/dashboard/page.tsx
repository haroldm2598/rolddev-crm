import React from 'react';
import UserProfile from './_component/UserProfile';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
	return (
		<div className='px-4 py-8'>
			<div className='p-4 bg-white rounded-md shadow-sm space-y-8'>
				<section className='flex justify-between'>
					<div className='space-y-2'>
						<h1 className='font-bold text-2xl'>Welcome to Your Dashboard!</h1>
						<h2>Manage your account and explore better-auth features</h2>
					</div>

					<div className='flex items-center gap-2'>
						<UserProfile name='John Doe' email='johndoe@testing.com' />
						<Button variant='outline'>Sign Out</Button>
					</div>
				</section>

				<section className='bg-blue-100/50 rounded-md shadow-sm p-4 space-y-4'>
					<h1>Authentication Status</h1>

					<div className='flex'>
						{/* left */}
						<div className='flex-1 flex flex-col gap-4'>
							<div className='flex gap-2'>
								<span>Status:</span>
								<span>Authenticated</span>
							</div>

							<div className='flex gap-2'>
								<span>User ID:</span>
								<span>123456</span>
							</div>
						</div>

						{/* Right */}
						<div className='flex-1 flex flex-col gap-4'>
							<div className='flex gap-2'>
								<span>Provider:</span>
								<span>Better-Auth</span>
							</div>

							<div className='flex gap-2'>
								<span>Email Verified:</span>
								<span>Yes</span>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
