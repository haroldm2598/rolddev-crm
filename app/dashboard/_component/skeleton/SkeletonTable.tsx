// SkeletonTable.tsx
// Skeleton loader for the books table
export default function SkeletonTable({ columns = 6, rows = 5 }) {
	return (
		<div className='overflow-hidden rounded-sm'>
			<table className='w-full border-0'>
				<tbody className='bg-white'>
					{Array.from({ length: rows }).map((_, i) => (
						<tr key={i} className='border-0'>
							{Array.from({ length: columns }).map((_, j) => (
								<td key={j} className='p-2'>
									<div className='h-4 bg-gray-100 rounded animate-pulse' />
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
