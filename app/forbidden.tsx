import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Forbidden() {
	return (
		<main className='flex grow items-center justify-center px-4 text-center'>
			<div className='space-y-8'>
				<section className='space-y-2'>
					<h1 className='text-2xl font-semibold'>403- Forbidden</h1>
					<p className='text-muted-foreground'>
						You don&apos;t, have access to this page .
					</p>
				</section>
				<section>
					<Button asChild>
						<Link href='/dashboard'>Dashboard</Link>
					</Button>
				</section>
			</div>
		</main>
	);
}
