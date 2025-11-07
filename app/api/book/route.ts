import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import type { BookProps } from '@/app/dashboard/_lib/types';

export async function GET() {
	try {
		const books = await prisma.book.findMany({
			orderBy: {
				createdAt: 'desc'
			},
			select: {
				id: true,
				title: true,
				author: true,
				genre: true,
				rating: true,
				coverUrl: true,
				coverColor: true,
				description: true,
				summary: true,
				createdAt: true,
				updatedAt: true
			}
		});

		return NextResponse.json({
			success: true,
			data: books
		});
	} catch (error) {
		console.error(`Error fetching books ${error}`);
		return NextResponse.json(
			{ success: false, error: 'Failed to fetch books' },
			{ status: 500 }
		);
	}
}

export async function POST(req: NextRequest) {
	try {
		const body: BookProps = await req.json();
		const {
			title,
			author,
			genre,
			rating,
			coverUrl,
			coverColor,
			description,
			summary
		} = body;

		const books = await prisma.book.create({
			data: {
				title,
				author,
				genre: genre ?? '',
				rating: rating ?? 0,
				coverUrl,
				coverColor: coverColor ?? '',
				description: description ?? '',
				summary: summary ?? ''
			}
		});

		return NextResponse.json(
			{
				success: true,
				data: books
			},
			{ status: 201 }
		);
	} catch (error) {
		console.error(`Error fetching books ${error}`);
		return NextResponse.json(
			{ success: false, error: 'Failed to fetch books' },
			{ status: 500 }
		);
	}
}
