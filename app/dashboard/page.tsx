import { getServerSession } from '@/lib/auth-get-sessions';
import Dashboard from './_component/Dashboard';

export default async function DashboardPage() {
	const session = await getServerSession();
	const user = session?.user;

	return <Dashboard user={user} />;
}
