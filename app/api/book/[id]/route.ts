import { BookProps } from '@/app/dashboard/_lib/types';
import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // ensure fresh fetch if called from client

interface ParamsIdProps {
	params: { id: string };
}

export async function GET(req: Request, { params }: ParamsIdProps) {
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

export async function DELETE(req: Request, { params }: ParamsIdProps) {
	try {
		const book = await prisma.book.delete({
			where: { id: params.id }
		});

		return NextResponse.json({ success: true, data: book });
	} catch (error) {
		return NextResponse.json(
			{ success: false, error: `Book not found: ${error}` },
			{ status: 404 }
		);
	}
}
