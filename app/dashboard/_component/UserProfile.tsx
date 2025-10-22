import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AuthUser } from '@/lib/types/auth';

type UserProfileProps = {
	user: AuthUser | undefined; // Because session can be null
};

export default function UserProfile({ user }: UserProfileProps) {
	return (
		<div className='flex items-center space-x-4'>
			<Avatar className='h-12 w-12'>
				{user?.image ? (
					<AvatarImage src={user?.image} alt={user?.name} />
				) : (
					<AvatarFallback>{user?.name[0]}</AvatarFallback>
				)}
			</Avatar>

			<div className='flex flex-col'>
				<span className='font-semibold'>{user?.name}</span>
				<span className='text-sm text-muted-foreground'>{user?.email}</span>
			</div>
		</div>
	);
}
