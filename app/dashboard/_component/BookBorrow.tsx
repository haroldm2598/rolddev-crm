"use client";

import Image from "next/image";

import { Eye, Calendar, Plus } from "lucide-react";
import { ImFileEmpty } from "react-icons/im";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookProps } from "../_lib/types";
import BookTemplate from "./BookTemplate";
import { useDataStore } from "@/lib/store";
import { useFetchBooks } from "../_lib/useBooks";
import { useEffect } from "react";

interface BookBorrowProps {
    title: string;
    createBook: boolean;
    // books: BookProps[];
    limit?: number;
}

export function BookBorrow({
    title,
    createBook,
    // books,
    limit,
}: BookBorrowProps) {
    const { setBooks } = useDataStore();
    const books = useDataStore((state) => state.bookData);
    const { data: bookData } = useFetchBooks();

    useEffect(() => {
        if (bookData.length > 0) setBooks(bookData);
    }, [bookData, setBooks]);

    return (
        <Card className="bg-white w-full h-full border-none shadow-sm rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-800">
                    {title}
                </CardTitle>
                <Button
                    variant="secondary"
                    className="text-sm text-gray-500 hover:text-blue-700 hover:bg-blue-50"
                >
                    View all
                </Button>
            </CardHeader>

            <CardContent className="relative overflow-hidden space-y-3">
                {createBook && (
                    <div className="flex items-center gap-2 px-3 py-5 bg-gray-50 hover:bg-gray-100 rounded-xl transition">
                        <Plus className="bg-white size-8 rounded-full" />

                        <h1 className="text-lg font-medium text-gray-800">
                            Add New Book
                        </h1>
                    </div>
                )}

                {/* CHANGE THIS INTO DATA COZ IM USING JSON ONLY */}
                {limit !== 0 ? (
                    books.slice(0, limit).map((book) => (
                        <div
                            key={book.id}
                            className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition"
                        >
                            {/* Left side: book image and info */}
                            <div className="flex items-center gap-3">
                                {/* <Image
									src={book.coverUrl}
									alt={book.title}
									width={45}
									height={65}
									className='rounded-md object-cover'
								/> */}
                                <BookTemplate
                                    cover={book.coverUrl}
                                    title={book.title}
                                    coverColor={book.coverColor}
                                />

                                <div className="flex flex-col">
                                    <h3 className="text-sm font-semibold text-gray-900">
                                        {book.title}
                                    </h3>
                                    <p className="text-xs text-gray-500">
                                        By {book.author} • {book.genre}
                                    </p>
                                    {/* <div className='flex items-center gap-2 mt-1'>
									<Image
										src={book.userAvatar}
										alt={book.user}
										width={20}
										height={20}
										className='rounded-full'
									/>
									<span className='text-xs text-gray-600'>{book.user}</span>
									<span className='flex items-center gap-1 text-xs text-gray-500'>
										<Calendar className='w-3 h-3' />
										{book.date}
									</span>
								</div> */}
                                </div>
                            </div>

                            {/* Right side: eye icon */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-blue-100 text-gray-500"
                            >
                                <Eye className="w-5 h-5" />
                            </Button>
                        </div>
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center gap-4 h-full">
                        <div className="size-28 bg-blue-200/10 flex items-center justify-center rounded-full">
                            <ImFileEmpty className="size-18 text-gray-700/20" />
                        </div>

                        <h1 className="font-semibold text-lg">
                            No Pending Books
                        </h1>
                        <p className="text-sm text-gray-400/90">
                            There are no borrow book requests awaiting your
                            review at this time.
                        </p>
                    </div>
                )}

                {limit !== 0 ? (
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
                ) : (
                    <></>
                )}
            </CardContent>
        </Card>
    );
}
