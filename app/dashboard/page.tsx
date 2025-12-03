import { Metadata } from 'next';
import Dashboard from './_component/Dashboard';
import HeaderSearch from './_component/HeaderSearch';

export const generateMetadata = async (): Promise<Metadata> => {
	const dummyUserName = 'mikey';

	return {
		title: `Dashboard | ${dummyUserName}`,
		description: `Welcome to dashboard overview ${dummyUserName}.`,
		openGraph: {
			title: `Dashboard | ${dummyUserName}`,
			description: 'Private Dashboard',
			url: 'https://localhost:3000/dashboard',
			siteName: 'rolddev-crm',
			type: 'website'
		}
	};
};

export default async function DashboardPage() {
	return (
		<div className='lg:ml-96 px-4 py-20 lg:px-0 lg:py-8 max-w-7xl flex flex-col'>
			<HeaderSearch />
			<Dashboard />
		</div>
	);
}
