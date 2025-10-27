import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DashboardHeaderProps {
	title: string;
	quantity: number;
}

export default function DashboardHeader({
	title,
	quantity
}: DashboardHeaderProps) {
	return (
		<Card className='bg-white w-full h-full border-none shadow-sm rounded-2xl'>
			<CardHeader className='flex flex-row items-center'>
				<CardTitle className='text-lg font-semibold text-[#64748B]'>
					{title}
				</CardTitle>
				<h1 className='font-medium text-green-500'>2</h1>
			</CardHeader>

			<CardContent className='relative overflow-hidden'>
				<h1 className='font-semibold text-[#1E293B] text-3xl'>{quantity}</h1>
			</CardContent>
		</Card>
	);
}
