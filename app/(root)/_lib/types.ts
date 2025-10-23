import { IconType } from 'react-icons';

export interface MenuItemProps {
	name: string;
	icon: IconType;
	href: string;
}

export interface CardProps {
	icon: IconType;
	cardColor?: string;
	bgColor: string;
	iconColor: string;
	title: string;
	desc: string;
}
