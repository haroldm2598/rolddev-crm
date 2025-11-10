'use client';

import Image from 'next/image';

interface BookCardProps {
	cover: string; // image URL
	title: string;
	coverColor?: string;
}

// export default function BookTemplate({
// 	cover,
// 	title,
// 	coverColor
// }: BookCardProps) {
// 	console.log('all color is:', coverColor);
// 	return (
// 		// <div className='relative w-[90px] aspect-[80/130] rounded-2xl overflow-hidden shadow-lg'>
// 		// 	{/* Spine background */}
// 		// 	<div
// 		// 		className='absolute inset-0 rounded-2xl'
// 		// 		style={{ backgroundColor: coverColor }}
// 		// 	/>

// 		// 	{/* Decorative stripes on the spine */}
// 		// 	<div className='absolute left-0 top-[12%] h-[3%] w-[35%] bg-[#1a2636] rounded-md rotate-[-25deg]' />
// 		// 	<div className='absolute left-0 top-[22%] h-[3%] w-[35%] bg-[#1a2636] rounded-md rotate-[-25deg]' />
// 		// 	<div className='absolute left-0 bottom-[30%] h-[3%] w-[35%] bg-[#1a2636] rounded-md rotate-[-25deg]' />
// 		// 	<div className='absolute left-0 bottom-[20%] h-[3%] w-[35%] bg-[#1a2636] rounded-md rotate-[-25deg]' />

// 		// 	{/* Book cover image fills area consistently */}
// 		// 	<div className='absolute inset-0 z-10'>
// 		// 		{cover ? (
// 		// 			<Image
// 		// 				src={cover}
// 		// 				alt={title}
// 		// 				fill
// 		// 				sizes='100%'
// 		// 				className='object-cover object-center rounded-2xl'
// 		// 			/>
// 		// 		) : (
// 		// 			<div className='h-full w-full bg-gray-200 flex items-center justify-center text-xs text-gray-500 rounded-2xl'>
// 		// 				No Cover
// 		// 			</div>
// 		// 		)}
// 		// 	</div>

// 		// 	{/* Page layer (bottom edge) */}
// 		// 	<div className='absolute bottom-0 left-0 right-0 h-[12%] bg-gray-200 rounded-b-2xl border-t-[3px] border-gray-400/30 shadow-inner z-0' />

// 		// 	{/* Bottom binding strip */}
// 		// 	<div className='absolute bottom-[1px] left-0 right-0 h-[5px] bg-gray-600/20 rounded-b-xl z-0' />
// 		// </div>
// 		<div
// 			className='relative w-[90px] aspect-[80/130] rounded-2xl overflow-hidden shadow-lg flex-shrink-0'
// 			style={{
// 				backgroundColor: coverColor || '#C25857' // fallback color
// 			}}
// 		>
// 			{/* SVG Book Base */}
// 			<Image
// 				src='/book_cover.svg' // put your SVG file in /public
// 				alt='Book base'
// 				fill
// 				sizes='100%'
// 				className='object-contain pointer-events-none select-none z-0'
// 				priority
// 			/>

// 			{/* Cover Image Layer */}
// 			{cover ? (
// 				<div className='absolute top-[8%] left-[14%] w-[72%] h-[80%] z-10 rounded-md overflow-hidden'>
// 					<Image
// 						src={cover}
// 						alt={title}
// 						fill
// 						sizes='100%'
// 						className='object-cover object-center rounded-md'
// 						quality={90}
// 						priority
// 					/>
// 				</div>
// 			) : (
// 				<div className='absolute inset-0 flex items-center justify-center text-[10px] text-gray-400 z-10'>
// 					No Cover
// 				</div>
// 			)}
// 		</div>
// 	);
// }

export default function BookTemplate({
	cover,
	title,
	coverColor
}: BookCardProps) {
	const bookWidth = 'w-[90px]';
	const bookAspectRatio = 'aspect-[80/130]';
	const shadowClass = 'shadow-lg';

	return (
		<div
			className={`relative ${bookWidth} ${bookAspectRatio} flex-shrink-0 ${shadowClass}`}
		>
			{/* 1. The Cover Image Layer (Clipped by the SVG Mask) */}
			<div
				className='absolute inset-0 z-10 bg-cover bg-center'
				style={{
					backgroundImage: cover ? `url(${cover})` : 'none',
					// CRITICAL: Apply the SVG as a mask using Tailwind's arbitrary values or CSS
					// Note: Tailwind doesn't have native mask utilities, so we use a style object.
					WebkitMaskImage: 'url(/book_cover.svg)',
					maskImage: 'url(/book_cover.svg)',
					WebkitMaskSize: '100% 100%',
					maskSize: '100% 100%',
					WebkitMaskRepeat: 'no-repeat',
					maskRepeat: 'no-repeat'
				}}
			>
				{/* Fallback for no cover (optional) */}
				{!cover && (
					<div className='absolute inset-0 flex items-center justify-center text-[10px] text-gray-400 bg-gray-200'>
						No Cover
					</div>
				)}
			</div>

			{/* 2. The SVG Book Base (Spine and Edges) Layer */}
			{/* This layer provides the final shape, spine, and page colors */}
			<Image
				src='/book_cover.svg' // Your modified SVG that only contains the spine/edges
				alt={title}
				fill
				sizes='100%'
				className='object-contain pointer-events-none select-none z-0'
				// You can use the spineColor to set a background color behind the SVG
				// if the SVG itself is mostly transparent (best practice for dynamic color)
				style={{ backgroundColor: coverColor || 'transparent' }}
				priority
			/>
		</div>
	);
}
