import { BookProps } from '@/app/dashboard/_lib/types';
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // ensure fresh fetch if called from client

export async function GET(
	req: Request,
	{ params }: { params: { id: string } }
) {
	const book = await prisma.book.findUnique({
		where: { id: params.id }
	});

	if (!book) return NextResponse.json({ error: 'Not found' }, { status: 404 });
	return NextResponse.json(book);
}

export async function PUT(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	try {
		const body: Partial<BookProps> = await req.json();

		const updatedBook = await prisma.book.update({
			where: { id: params.id },
			data: {
				title: body.title,
				author: body.author,
				genre: body.genre,
				rating: body.rating,
				coverUrl: body.coverUrl,
				coverColor: body.coverColor,
				description: body.description,
				summary: body.summary,
				updatedAt: new Date()
			}
		});

		return NextResponse.json({ success: true, data: updatedBook });
	} catch (error) {
		console.error('Error updating book:', error);
		return NextResponse.json(
			{ success: false, error: 'Failed to update book' },
			{ status: 500 }
		);
	}
}
