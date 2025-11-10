export interface BookProps {
	id: string;
	title: string;
	author: string;
	genre?: string;
	rating: number;
	user?: string;
	date?: string;
	coverUrl?: string;
	coverColor: string;
	description?: string;
	summary?: string;
}
