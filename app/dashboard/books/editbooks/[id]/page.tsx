import ButtonPrevious from '@/app/dashboard/_component/ButtonPrevious';
import EditBook from './EditBook';

export default function EditBookPage() {
	return (
		<div className='lg:ml-96 px-4 py-20 lg:px-0 lg:py-8 max-w-5xl flex flex-col gap-4'>
			<div className='w-20'>
				<ButtonPrevious />
			</div>

			<EditBook />
		</div>
	);
}
