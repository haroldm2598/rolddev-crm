import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

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
