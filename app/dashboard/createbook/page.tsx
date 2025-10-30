import CreateBook from './createbooks';

export default async function CreateBookPage() {
	return (
		<div className='lg:ml-96 px-4 py-20 lg:px-0 lg:py-8 max-w-5xl flex flex-col'>
			<CreateBook />
		</div>
	);
}
