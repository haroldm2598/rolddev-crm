import { ReactNode } from "react";
import { Metadata } from "next";

import { unauthorized } from "next/navigation";

import { getServerSession } from "@/lib/auth-get-sessions";

import SessionSigInWrapper from "@/components/SessionSignInWrapper";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";

interface RootLayoutProps {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: {
        default: "Welcome to BetterAuth",
        template: "%s | BetterAuth.js",
    },
    description: "Hello dynamic and responsive friendly.",
};

export default async function AuthLayout({ children }: RootLayoutProps) {
    const session = await getServerSession();

    return (
        <div className="bg-blue-50 min-h-dvh">
            <SessionSigInWrapper redirectUrl="/dashboard">
                <Navbar session={session} />
                {children}
                <Toaster />
            </SessionSigInWrapper>
        </div>
    );
}
