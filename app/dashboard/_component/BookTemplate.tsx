'use client';

import Image from 'next/image';

interface BookCardProps {
	cover: string; // image URL
	title: string;
	coverColor?: string;
}

export default function BookTemplate({
	cover,
	title,
	coverColor
}: BookCardProps) {
	console.log('all color is:', coverColor);
	return (
		<div className='relative w-[90px] aspect-[80/130] rounded-2xl overflow-hidden shadow-lg'>
			{/* Spine background */}
			<div
				className='absolute inset-0 rounded-2xl'
				style={{ backgroundColor: coverColor }}
			/>

			{/* Decorative stripes on the spine */}
			<div className='absolute left-0 top-[12%] h-[3%] w-[35%] bg-[#1a2636] rounded-md rotate-[-25deg]' />
			<div className='absolute left-0 top-[22%] h-[3%] w-[35%] bg-[#1a2636] rounded-md rotate-[-25deg]' />
			<div className='absolute left-0 bottom-[30%] h-[3%] w-[35%] bg-[#1a2636] rounded-md rotate-[-25deg]' />
			<div className='absolute left-0 bottom-[20%] h-[3%] w-[35%] bg-[#1a2636] rounded-md rotate-[-25deg]' />

			{/* Book cover image fills area consistently */}
			<div className='absolute inset-0 z-10'>
				{cover ? (
					<Image
						src={cover}
						alt={title}
						fill
						sizes='100%'
						className='object-cover object-center rounded-2xl'
					/>
				) : (
					<div className='h-full w-full bg-gray-200 flex items-center justify-center text-xs text-gray-500 rounded-2xl'>
						No Cover
					</div>
				)}
			</div>

			{/* Page layer (bottom edge) */}
			<div className='absolute bottom-0 left-0 right-0 h-[12%] bg-gray-200 rounded-b-2xl border-t-[3px] border-gray-400/30 shadow-inner z-0' />

			{/* Bottom binding strip */}
			<div className='absolute bottom-[1px] left-0 right-0 h-[5px] bg-gray-600/20 rounded-b-xl z-0' />
		</div>
	);
}
