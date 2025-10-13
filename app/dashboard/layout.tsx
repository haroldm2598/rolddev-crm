import { ReactNode } from 'react';

interface DashboardLayout {
	children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayout) {
	return <div>{children}</div>;
}
