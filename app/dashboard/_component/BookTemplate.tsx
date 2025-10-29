'use client';

import Image from 'next/image';

interface BookCardProps {
	cover: string; // image URL
	title: string;
}

export default function BookTemplate({ cover, title }: BookCardProps) {
	return (
		<div className='relative w-full aspect-[2/2] rounded-t-2xl overflow-hidden bg-white shadow-xl'>
			{/* Decorative stripes */}
			<div className='absolute left-[0] top-[10%] h-[3%] w-[40%] bg-[#1a2636] rounded-md rotate-[-25deg]' />
			<div className='absolute left-[0] top-[20%] h-[3%] w-[40%] bg-[#1a2636] rounded-md rotate-[-25deg]' />

			<div className='absolute left-[0] bottom-[30%] h-[3%] w-[40%] bg-[#1a2636] rounded-md rotate-[-25deg]' />
			<div className='absolute left-[0] bottom-[20%] h-[3%] w-[40%] bg-[#1a2636] rounded-md rotate-[-25deg]' />

			{/* Book cover image */}
			<div className='absolute top-0 left-[20%] right-[1%] bottom-[15%] overflow-hidden'>
				<Image
					src={cover}
					alt={title}
					fill
					sizes='(max-width: 120px) 100vw, 33vw'
					className='object-cover object-center'
				/>
			</div>

			{/* Pages (bottom area) */}
			<div className='absolute bottom-0 left-0 right-0 h-[12%] bg-gray-200 rounded-b-2xl border-t-[4px] border-gray-600/20 shadow-inner' />

			{/* Red bottom strip */}
			<div className='absolute bottom-[1px] left-0 right-0 h-[5px] bg-gray-600/20 rounded-b-xl' />
		</div>
	);
}
