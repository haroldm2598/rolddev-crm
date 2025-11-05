import { cache } from 'react';
import prisma from '@/lib/prisma';

export const fetchBookById = cache(async (id: string) => {
	const books = await prisma.book.findUnique({
		where: { id }
	});

	if (!books) throw new Error('Books not found');

	return books;
});
