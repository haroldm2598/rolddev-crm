'use client';

import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable
} from '@tanstack/react-table';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table';

import { Button } from '@/components/ui/button';
import { useDataStore } from '@/lib/store';
import { useEffect, useMemo } from 'react';
import { useFetchBooks } from '../_lib/useBooks';

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	// data: TData[];
}

export function DataTable<TData extends object, TValue>({
	columns
}: DataTableProps<TData, TValue>) {
	const { setBooks } = useDataStore();
	const books = useDataStore((state) => state.bookData);
	const { data: bookData, isLoading, isError, error } = useFetchBooks();

	useEffect(() => {
		if (bookData.length > 0) setBooks(bookData);
	}, [bookData, setBooks]);

	// const typeBooks = books as TData[];
	const typeBooks = useMemo(() => (books || []) as TData[], [books]);

	const table = useReactTable({
		data: typeBooks,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel()
	});

	// ✅ Added loading + error UI states
	if (isLoading)
		return <div className='p-4 text-gray-500'>Loading books...</div>;
	if (isError)
		return <div className='p-4 text-red-500'>Error: {error?.message}</div>;

	return (
		<div>
			<div className='overflow-hidden rounded-sm'>
				<Table className='border-0'>
					<TableHeader className='bg-blue-50'>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id} className='border-0'>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead
											key={header.id}
											className='border-b border-gray-200 font-semibold text-gray-600 bg-blue-50'
										>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
												  )}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody className='bg-white'>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}
									className='border-0 hover:bg-gray-50 transition-colors'
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell
											key={cell.id}
											className='border-b border-b-gray-200'
										>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className='h-24 text-center'
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			<div className='flex items-center justify-end space-x-2 py-4'>
				<Button
					variant='outline'
					size='sm'
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					Previous
				</Button>
				<Button
					variant='outline'
					size='sm'
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
