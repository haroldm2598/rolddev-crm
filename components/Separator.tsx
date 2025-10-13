interface SeperatorProps {
	text?: string;
}

export default function Separator({ text }: SeperatorProps) {
	return (
		<div className='flex items-center my-8'>
			<hr className='flex-grow border-t border-gray-300' />
			<span className='mx-4 text-gray-500'>{text}</span>
			<hr className='flex-grow border-t border-gray-300' />
		</div>
	);
}
