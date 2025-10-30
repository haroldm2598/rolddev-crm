export interface BookProps {
	id: string;
	title: string;
	author: string;
	genre?: string | null;
	rating?: number | null;
	user: string;
	date?: string;
	coverUrl: string;
	coverColor?: string | null;
	description?: string | null;
	summary?: string | null;
}
