interface HeaderTitleProps {
	title: string;
	subTitle: string;
}

export default function HeaderTitle({ title, subTitle }: HeaderTitleProps) {
	return (
		<section className='leading-5 text-center'>
			<h1 className='font-bold text-2xl'>{title}</h1>
			<h2 className='font-medium text-gray-500'>{subTitle}</h2>
		</section>
	);
}
