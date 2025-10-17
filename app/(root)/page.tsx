'use client';

import { Button } from '@/components/ui/button';
import Card from '@/components/Card';
import { useDataStore } from '@/lib/store';

export default function Homepage() {
	const dataCard = useDataStore((state) => state.homeCard);

	return (
		<div className='lg:mx-60 space-y-4 max-w-full'>
			<header className='flex flex-col items-center gap-6 my-4'>
				<div className='text-center'>
					<h1 className='text-5xl font-bold'>Better-Auth</h1>
					<h1 className='text-violet-700 text-5xl font-bold'>
						Authentication Demo
					</h1>
				</div>

				<p className='max-w-xl text-center'>
					Experience the power of better auth with this comprehensive demo
					showcasing social providers, email/password authentication, and
					protected routes
				</p>

				<div className='space-x-2'>
					<Button className='bg-violet-600'>Try Authentication</Button>
					<Button variant='outline'>View Dashboard</Button>
				</div>
			</header>

			<section className='my-6 flex flex-col lg:flex-row justify-between gap-6'>
				{dataCard.map((item, index) => {
					return (
						<Card
							key={index}
							icon={item.icon}
							bgColor={item.bgColor}
							iconColor={item.iconColor}
							title={item.title}
							desc={item.desc}
						/>
					);
				})}
			</section>

			<section className='w-full p-4 text-center bg-white rounded-md shadow-sm space-y-8'>
				<div className='space-y-2'>
					<h1 className='text-3xl font-bold'>Try it Out</h1>
					<p>Experience the authentication flow with our interactive demo</p>
				</div>

				<div className='flex flex-col gap-4 lg:gap-0 lg:flex-row my-2'>
					<div className='flex-1 space-y-2 text-start'>
						<h1 className='text-lg font-semibold'>Authentication Flow</h1>
						<ul className='list-decimal list-inside space-y-2 text-sm text-gray-700'>
							<li>Visit the autentication page</li>
							<li>Choose your preferred sign-in method</li>
							<li>Access the protected dashboard</li>
						</ul>
					</div>

					<div className='flex-1 space-y-2 text-start'>
						<h1 className='text-lg font-semibold'>Available Features</h1>
						<ul className='list-decimal list-inside space-y-2 text-sm text-gray-700'>
							<li>Google OAuth integration</li>
							<li>Github OAuth integration</li>
							<li>Email/password authentication</li>
							<li>Protected routes</li>
							<li>User session management</li>
						</ul>
					</div>
				</div>

				<Button className='bg-violet-600 mt-4'>Start Demo</Button>
			</section>

			<section className='bg-blue-100 text-center rounded-md shadow-sm p-4 space-y-4'>
				<h1 className='text-3xl font-bold'>About Better-Auth</h1>
				<p className='mx-auto my-0 max-w-4xl text-lg'>
					Better-Auth is a modern, flexible authentication libary for Next.js
					that provides a seamless developer experience with built-in security
					and extensive customization options.
				</p>

				<div className='mt-4 space-x-4'>
					<Button variant='secondary'>Learm More</Button>
					<Button variant='secondary'>View on Github</Button>
				</div>
			</section>
		</div>
	);
}
