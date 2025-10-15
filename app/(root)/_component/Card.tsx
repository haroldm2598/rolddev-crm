import { CardProps } from '../_lib/types';

export default function Card({
	icon: Icon,
	bgColor,
	iconColor,
	title,
	desc
}: CardProps) {
	return (
		<div className='max-w-md space-y-3 px-3 py-5 bg-white rounded-md shadow-sm'>
			<div className={`${bgColor} w-8 h-8 p-2 rounded-sm`}>
				<Icon className={iconColor} />
			</div>
			<h1 className='font-semibold text-xl'>{title}</h1>
			<p className='leading-5'>{desc}</p>
		</div>
	);
}
