import { getServerSession } from '@/lib/auth-get-sessions';
import Dashboard from './_component/Dashboard';
import { unauthorized } from 'next/navigation';

export default async function DashboardPage() {
	const session = await getServerSession();
	const user = session?.user;

	if (!user) unauthorized();

	return <Dashboard />;
}
