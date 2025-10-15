import { Button } from '@/components/ui/button';
import React from 'react';
import { FaUser, FaUsers, FaShieldAlt } from 'react-icons/fa';
import Card from './_component/Card';
import { CardProps } from './_lib/types';

export default function page() {
	// then transfer this dummy data inside zustand
	const dataCard: CardProps[] = [
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
			title: 'Email & Password<',
			desc: 'Traditional email and password authentication with secure password hashing, email verfication, and password reset functionality'
		},
		{
			icon: FaShieldAlt,
			bgColor: 'bg-violet-200',
			iconColor: 'text-violet-700',
			title: 'Secure & Protected',
			desc: 'Build-in security functions including, JWT tokens, session management and protected routes that only authenticated users can access'
		}
	];

	return (
		<div className='lg:mx-60 space-y-4 max-w-full'>
			<header className='space-y-2'>
				<div>
					<h1>Better Auth</h1>
					<h1>Authentication Demo</h1>
				</div>

				<p>
					Experience the power of better auth with this comprehensive demo
					showcasing social providers, email/password authentication, and
					protected routes
				</p>

				<div>
					<Button>Try Authentication</Button>
					<Button variant='secondary'>View Dashboard</Button>
				</div>
			</header>

			<section className=' flex flex-col lg:flex-row justify-between gap-6'>
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

			<section></section>
		</div>
	);
}
