import { Metadata } from "next";
import { unauthorized } from "next/navigation";

import { getServerSession } from "@/lib/auth-get-sessions";
import Dashboard from "./_component/Dashboard";
import HeaderSearch from "./_component/HeaderSearch";

export const generateMetadata = async (): Promise<Metadata> => {
    const dummyUserName = "mikey";

    return {
        title: `Dashboard | ${dummyUserName}`,
        description: `Welcome to dashboard overview ${dummyUserName}.`,
        openGraph: {
            title: `Dashboard | ${dummyUserName}`,
            description: "Private Dashboard",
            url: "https://localhost:3000/dashboard",
            siteName: "rolddev-crm",
            type: "website",
        },
    };
};

export default async function DashboardPage() {
    const session = await getServerSession();
    const user = session?.user;

    if (!user) unauthorized();

    return (
        // lalagyan ko ng max-width iba kasi yung size ng laptop ko at kay mami HEADERSEARCH at DASHBOARD
        <div className="lg:ml-72 px-4 py-20 lg:px-0 lg:py-8 max-w-6xl flex flex-col">
            <HeaderSearch user={user} />
            <Dashboard />
        </div>
    );
}
