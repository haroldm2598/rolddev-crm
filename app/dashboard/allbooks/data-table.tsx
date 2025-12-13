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
import { Suspense, useMemo } from 'react';
import { useFetchBooks } from '../_lib/useBooks';
import SkeletonTable from '../_component/skeleton/SkeletonTable';

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
}

export function DataTable<TData extends object, TValue>({
	columns
}: DataTableProps<TData, TValue>) {
	const { data: bookData, error } = useFetchBooks();

	const typeBooks = useMemo(() => (bookData || []) as TData[], [bookData]);

	const table = useReactTable({
		data: typeBooks,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel()
	});

	// ✅ Added error UI states
	if (error)
		return <div className='p-4 text-red-500'>Error: {error?.message}</div>;

	return (
		<Suspense fallback={<SkeletonTable columns={columns.length} />}>
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
		</Suspense>
	);
}
