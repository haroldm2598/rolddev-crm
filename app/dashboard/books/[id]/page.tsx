// app/books/[id]/page.tsx
import prisma from '@/lib/prisma';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
// import { getQueryClient } from "@/lib/queryClient";
import { fetchBookById } from '../../_lib/fetchBookById';
import BookPageClient from './BookPageClient';

interface BookPageProps {
	params: { id: string };
}

// --- Static paths (SSG) ---
export async function generateStaticParams() {
	const books = await prisma.book.findMany({
		select: { id: true },
		take: 100 // 👈 limit for faster builds
	});

	return books.map((book) => ({ id: book.id }));
}

// --- Incremental Static Regeneration (ISR) ---
export const revalidate = 60; // Regenerate page every 60s

// --- Server Component ---
export default async function BookPage({ params }: BookPageProps) {
	// pa edit mo nalang to kasi mayroon nako sa provider nung tanstack chatGPT mo nalng
	const queryClient = getQueryClient();

	// Prefetch once for hydration
	await queryClient.prefetchQuery({
		queryKey: ['book', params.id],
		queryFn: () => fetchBookById(params.id)
	});

	const dehydratedState = dehydrate(queryClient);

	return (
		<HydrationBoundary state={dehydratedState}>
			<BookPageClient id={params.id} />
		</HydrationBoundary>
	);
}
