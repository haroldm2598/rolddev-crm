import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Unauthorized() {
	return (
		<main className='min-h-screen flex grow items-center justify-center px-4 text-center'>
			<div className='space-y-8'>
				<section className='space-y-2'>
					<h1 className='text-2xl font-semibold'>401- Unauthorized</h1>
					<p className='text-muted-foreground'>Please sign in to continue.</p>
				</section>
				<section>
					<Button asChild>
						<Link href='/auth/signin'>Sign in</Link>
					</Button>
				</section>
			</div>
		</main>
	);
}
