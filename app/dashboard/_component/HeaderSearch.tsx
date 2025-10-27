import { User } from '@/lib/auth';

interface HeaderSearchProps {
	user: User[];
}

export default function HeaderSearch({ user }: HeaderSearchProps) {
	return (
		<div className='flex items-center justify-between px-4 py-3 w-full'>
			<section>
				<h1 className='font-semibold text-2xl'>welcome {user?.name}</h1>
			</section>
		</div>
	);
}
