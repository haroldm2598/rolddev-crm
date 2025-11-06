import {
	dehydrate,
	HydrationBoundary,
	QueryClient
} from '@tanstack/react-query';
import prisma from '@/lib/prisma';
import BookDetails from './BookDetails';

// this is metadata
// export async function generateMetadata({ params }: { params: { id: string } }) {
// 	const book = await prisma.book.findUnique({ where: { id: params.id } });

// 	if (!book) return { title: 'Book Not Found' };

// 	return {
// 		title: `${book.title} | Book Details`,
// 		description: `Read more about ${book.title} by ${book.author}.`,
// 		openGraph: {
// 			title: book.title,
// 			description: book.summary,
// 			images: [{ url: book.coverUrl }]
// 		}
// 	};
// }

// ✅ Server Component
export default async function BookPage({ params }: { params: { id: string } }) {
	const queryClient = new QueryClient();

	// Prefetch from Prisma (Supabase-backed)
	const book = await prisma.book.findUnique({
		where: { id: params.id }
	});

	if (!book) {
		return (
			<div className='p-8 text-center text-gray-500'>
				<h2 className='text-xl font-semibold'>Book not found</h2>
			</div>
		);
	}

	// Preload for TanStack Query hydration
	await queryClient.prefetchQuery({
		queryKey: ['book', params.id],
		queryFn: async () => book
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<BookDetails id={params.id} initialData={book} />
		</HydrationBoundary>
	);
}
