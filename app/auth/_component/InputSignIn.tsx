"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormValues, SignInSchema } from "../_lib/auth-zod";
import { authClient } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

// import { signIn } from '@/lib/actions/auth-actions';

export default function InputSignIn() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter();

    const form = useForm<SignInFormValues>({
        resolver: zodResolver(SignInSchema), // RHF will use Zod's rules for validation
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // add enter key event when pressing that
    async function onSubmit(values: SignInFormValues) {
        setError(null);
        setLoading(true);

        // await signIn(values.email, values.password);
        const { email, password } = values;
        const { error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/dashboard",
        });

        setLoading(false);
        if (error) {
            setError(error.message || "something went wrong");
            toast.warning("sign in failed");
        } else {
            toast.success("sign in successfully");
            router.push("/dashboard");
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your email..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Enter your password..."
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter") {
                                            // Prevent the default behavior (in case it submits twice or you
                                            // want to control the flow completely)
                                            event.preventDefault();

                                            // Manually trigger the form submission via react-hook-form
                                            form.handleSubmit(onSubmit)();
                                        }
                                    }}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage>
                                {error && error.includes("password")
                                    ? "Invalid password. Please try again."
                                    : ""}
                            </FormMessage>
                        </FormItem>
                    )}
                />
                <Button
                    disabled={loading ? true : false}
                    type="submit"
                    className="w-full"
                >
                    {loading ? (
                        <>
                            <Spinner /> Sign in
                        </>
                    ) : (
                        "Sign In"
                    )}
                </Button>
            </form>
        </Form>
    );
}
