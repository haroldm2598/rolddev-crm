import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { BookProps } from './types';
// Using Tanstack Query for Server State
// fetch all data
export function useFetchBooks() {
	const {
		data: bookData,
		isLoading,
		isError,
		error,
		refetch
	} = useQuery({
		queryKey: ['books'],
		queryFn: async () => {
			const res = await fetch('/api/book', { cache: 'no-store' });
			const result = await res.json();
			return result.data;
		},
		staleTime: 1000 * 60 * 5, // ✅ Added: 5 minutes cache freshness
		gcTime: 1000 * 60 * 30, // ✅ Added: keep in cache for 30 minutes
		refetchOnWindowFocus: false, // ✅ Added: don't refetch when switching tabs
		refetchOnReconnect: true // ✅ Added: refetch when user regains connection
	});

	return { data: bookData ?? [], isLoading, isError, error, refetch };
}

// create data
export function useBooks() {
	const queryClient = useQueryClient();

	const { data: books, isLoading } = useQuery({
		queryKey: ['books'],
		queryFn: async () => {
			const res = await fetch('/api/book');
			const result = await res.json();
			return result.data;
		}
	});

	const addBook = useMutation({
		mutationFn: async (bookData: {
			title: string;
			author: string;
			genre: string;
			rating: number;
			coverUrl: string;
			coverColor: string;
			description: string;
			summary: string;
		}) => {
			const res = await fetch('/api/book', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(bookData)
			});
			const result = await res.json();
			return result.data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['books'] });
		}
	});

	return { books, isLoading, addBook };
}

// fetch single data
export function useBook(id: string, initialData?: BookProps) {
	return useQuery({
		queryKey: ['book', id],
		queryFn: async () => {
			const res = await fetch(`/api/book/${id}`);
			if (!res.ok) throw new Error('Book not found');
			const data: BookProps = await res.json();
			return data;
		},
		initialData,
		enabled: !!id,
		staleTime: 1000 * 60 * 5 // cache for 5 min
	});
}

// update single data
export function useUpdateBook() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (bookData: BookProps) => {
			const { id, ...rest } = bookData;
			const res = await fetch(`/api/book/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(rest)
			});
			const result = await res.json();
			return result.data as BookProps;
		},
		onSuccess: (data) => {
			// ✅ Update both cache entries for smoother UX
			queryClient.setQueryData(['book', data.id], data);
			queryClient.invalidateQueries({ queryKey: ['books'] });
		}
	});
}

// delete single data
export function useDeleteBook() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: string) => {
			const res = await fetch(`/api/book/${id}`, {
				method: 'DELETE'
			});

			const result = await res.json();
			return result.data;
		},
		onSuccess: (data) => {
			// ✅ Update both cache entries for smoother UX
			queryClient.removeQueries({ queryKey: ['book', data.id] });
			queryClient.invalidateQueries({ queryKey: ['books'] });
		}
	});
}
