import { Metadata } from "next";
import Signin from "./Signin";

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: `Sign up`,
        description: `Welcome to Sign in page of BetterAuth.js practice overview`,
        openGraph: {
            title: `Sign in`,
            description:
                "Welcome to Sign in page of BetterAuth.js practice overview",
            url: "https://localhost:3000/auth/signup",
            siteName: "rolddev-crm",
            type: "website",
        },
    };
};

export default function SigninPage() {
    return <Signin />;
}
