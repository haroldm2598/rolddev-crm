'use client';

import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function UserSignOut() {
	const router = useRouter();

	const handleSignout = async () => {
		// await signOut();

		const { error } = await authClient.signOut();

		if (error) {
			toast(error.message || 'something went wrong');
		} else {
			toast.success('sign out successfully');
			router.push('/auth/signin');
		}
	};
	return (
		<Button variant='outline' onClick={handleSignout}>
			Sign Out
		</Button>
	);
}
