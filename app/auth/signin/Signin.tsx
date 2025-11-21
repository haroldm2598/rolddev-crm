"use client";
import Link from "next/link";

import { FaGithub, FaGoogle } from "react-icons/fa";

import Separator from "@/components/Separator";
import { Button } from "@/components/ui/button";

import HeaderTitle from "../_component/HeaderTitle";
import InputSignIn from "../_component/InputSignIn";
import { signInSocial } from "@/lib/actions/auth-actions";

export default function Signin() {
    const handleSocialAuth = async (provider: "google" | "github") => {
        await signInSocial(provider);
    };

    return (
        <div className="flex justify-center items-center md:pt-10 pt-20">
            <div className="p-4 max-w-lg space-y-6">
                <HeaderTitle
                    title="Welcome back"
                    subTitle="Sign in your account to continue"
                />

                <section className="space-y-4">
                    <Button
                        onClick={() => handleSocialAuth("google")}
                        className="w-full"
                        variant="outline"
                    >
                        <FaGoogle /> Continue with Google
                    </Button>
                    <Button
                        onClick={() => handleSocialAuth("github")}
                        className="w-full"
                    >
                        <FaGithub /> Continue with Github
                    </Button>
                </section>

                <Separator text="or continue with" />

                <section>
                    <InputSignIn />
                </section>

                <section className="text-center">
                    <Link href="/auth/signup">
                        Dont have an account? Sign up
                    </Link>
                </section>

                <section className="bg-white p-2 space-y-2 outline-1 outline-gray-400 rounded-lg">
                    <h6 className="font-medium">Better Auth Integration</h6>
                    <p className="leading-5">
                        this page uses real better-auth authentication. Make
                        sure you have the backend server running on
                        localhost:3001 and have configured your OAuth providers
                    </p>
                </section>
            </div>
        </div>
    );
}
