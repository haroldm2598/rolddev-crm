import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputLabelProps {
	title: string;
	id: string;
	type?: string;
}

export default function InputLabel({ title, id, type }: InputLabelProps) {
	return (
		<div className='grid w-full max-w-sm items-center gap-3'>
			<Label htmlFor={id}>{title}</Label>
			<Input type={type} id={id} placeholder={title} />
		</div>
	);
}
