import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserProfileProps {
	name: string;
	email: string;
	avatarUrl?: string;
}

export default function UserProfile({
	name,
	email,
	avatarUrl
}: UserProfileProps) {
	return (
		<div className='flex items-center space-x-4'>
			<Avatar className='h-12 w-12'>
				{avatarUrl ? (
					<AvatarImage src={avatarUrl} alt={name} />
				) : (
					<AvatarFallback>{name[0]}</AvatarFallback>
				)}
			</Avatar>

			<div className='flex flex-col'>
				<span className='font-semibold'>{name}</span>
				<span className='text-sm text-muted-foreground'>{email}</span>
			</div>
		</div>
	);
}
