'use client';
import { useDataStore } from '@/lib/store';
import UserProfile from './UserProfile';
import UserSignOut from './UserSignOut';
import Card from '@/components/Card';
import { Button } from '@/components/ui/button';
import { AuthUser } from '@/lib/types/auth';

type DashboardProps = {
	user: AuthUser | undefined; // Because session can be null
};

export default function Dashboard({ user }: DashboardProps) {
	const dataCard = useDataStore((state) => state.dashboardCard);

	return (
		<div className='lg:mx-60 px-4 py-8'>
			<div className='p-4 bg-white rounded-md shadow-sm space-y-8'>
				<section className='flex justify-between flex-col md:flex-row'>
					<div className='space-y-2'>
						<h1 className='font-bold text-2xl'>Welcome to Your Dashboard!</h1>
						<h2>Manage your account and explore better-auth features</h2>
					</div>

					<div className='flex items-center gap-2'>
						<UserProfile user={user} />
						<UserSignOut />
					</div>
				</section>

				<section className='bg-blue-100/50 rounded-md shadow-sm p-4 space-y-4'>
					<h1>Authentication Status</h1>

					<div className='flex flex-col md:flex-row gap-4 md:gap-0'>
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

				<section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
					{dataCard.map((item, index) => {
						return (
							<Card
								key={index}
								cardColor='bg-gray-100'
								icon={item.icon}
								bgColor={item.bgColor}
								iconColor={item.iconColor}
								title={item.title}
								desc={item.desc}
							/>
						);
					})}
				</section>

				<section className='bg-gray-100 p-4 rounded-md shadow-sm space-y-2'>
					<h1 className='font-medium'>Try this actions</h1>

					<div className='space-x-4 space-y-4'>
						<Button className='bg-violet-600'>Update Profile</Button>
						<Button variant='outline'>Save Settings</Button>
						<Button variant='outline'>Export Data</Button>
					</div>
				</section>
			</div>
		</div>
	);
}
