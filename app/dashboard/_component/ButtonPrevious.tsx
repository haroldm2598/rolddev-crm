'use client';
import { useRouter } from 'next/navigation';
import { IoIosArrowRoundBack } from 'react-icons/io';

import { Button } from '@/components/ui/button';

export default function ButtonPrevious() {
	const router = useRouter();

	const handleBack = () => {
		router.back();
	};

	return (
		<Button variant='outline' onClick={handleBack}>
			<IoIosArrowRoundBack /> Go back
		</Button>
	);
}
