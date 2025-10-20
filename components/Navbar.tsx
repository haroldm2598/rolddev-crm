import { auth } from '@/lib/auth';
import Link from 'next/link';

type Session = typeof auth.$Infer.Session;

interface NavbarProps {
	session: Session | null;
}

export default function Navbar({ session }: NavbarProps) {
	return (
		<nav className='lg:mx-60 p-4 shadow-sm'>
			<div className='flex justify-between items-center'>
				<h1 className='font-bold text-2xl'>
					<Link href='/'>Better Auth</Link>
				</h1>

				<ul className='flex gap-4'>
					<li>
						<Link href='/'>Home</Link>
					</li>
					{session && (
						<li>
							<Link href='/dashboard'>Dashboard</Link>
						</li>
					)}
					{!session && (
						<li>
							<Link href='/auth/signin'>Sign In</Link>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
}
