import { Metadata } from 'next';
import Analytics from '../_component/Analytics';

export const generateMetadata = async (): Promise<Metadata> => {
	const dummyUserName = 'mikey';

	return {
		title: `Analytics | ${dummyUserName}`,
		description: `Welcome to Analytics overview ${dummyUserName}.`,
		openGraph: {
			title: `Analytics | ${dummyUserName}`,
			description: 'Private Analytics',
			url: 'https://localhost:3000/dashboard/analytics',
			siteName: 'rolddev-crm',
			type: 'website'
		}
	};
};

export default function AnalyticPage() {
	return <Analytics />;
}
