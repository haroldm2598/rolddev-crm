import { ReactNode } from 'react';

interface DashboardLayout {
	children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayout) {
	return <div className='bg-blue-50 min-h-dvh'>{children}</div>;
}
