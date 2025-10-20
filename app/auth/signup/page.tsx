import Link from 'next/link';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import Separator from '@/components/Separator';
import { Button } from '@/components/ui/button';
import HeaderTitle from '../_component/HeaderTitle';
import InputSignUp from '../_component/InputSignUp';

export default function SignupPage() {
	return (
		<div className='flex justify-center items-center md:pt-10 pt-20'>
			<div className='p-4 max-w-lg space-y-6'>
				<HeaderTitle
					title='Create Account'
					subTitle='Sign up to get started with better auth'
				/>

				<section className='space-y-4'>
					<Button className='w-full' variant='outline'>
						<FaGoogle /> Continue with Google
					</Button>
					<Button className='w-full'>
						<FaGithub /> Continue with Github
					</Button>
				</section>

				<Separator text='or continue with' />

				<section>
					<InputSignUp />
				</section>

				<section className='text-center'>
					<Link href='/auth/signin'>Already have an account? Sign in</Link>
				</section>
			</div>
		</div>
	);
}
