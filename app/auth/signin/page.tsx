import Separator from '@/components/Separator';
import { Button } from '@/components/ui/button';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import InputLabel from '../_component/InputLabel';
import Link from 'next/link';

export default function SigninPage() {
	return (
		<div className='flex justify-center items-center md:pt-10 pt-20'>
			<div className='p-4 max-w-lg space-y-6'>
				<section className='leading-5 text-center'>
					<h1 className='font-bold text-2xl'>Welcome back</h1>
					<h2 className='font-medium text-gray-500'>
						Sign in your account to continue
					</h2>
				</section>

				<section className='space-y-4'>
					<Button className='w-full' variant='outline'>
						<FaGoogle /> Continue with Google
					</Button>
					<Button className='w-full'>
						<FaGithub /> Continue with Github
					</Button>
				</section>

				<Separator text='or continue with' />

				<section className='space-y-4'>
					<InputLabel title='Email address' id='email' type='email' />
					<InputLabel title='Password' id='password' type='password' />
					<Button className='w-full'>Sign In</Button>
				</section>

				<section className='text-center'>
					<Link href='/'>Dont have an account? Sign up</Link>
				</section>

				<section className='bg-white p-2 space-y-2 outline-1 outline-gray-400 rounded-lg'>
					<h6 className='font-medium'>Better Auth Integration</h6>
					<p className='leading-5'>
						this page uses real better-auth authentication. Make sure you have
						the backend server running on localhost:3001 and have configured
						your OAuth providers
					</p>
				</section>
			</div>
		</div>
	);
}
