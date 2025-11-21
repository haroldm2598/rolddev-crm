"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormValues, SignUpSchema } from "../_lib/auth-zod";

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
// import { signup } from '@/lib/actions/auth-actions';
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

export default function InputSignUp() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const form = useForm<SignUpFormValues>({
        resolver: zodResolver(SignUpSchema), // RHF will use Zod's rules for validation
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: SignUpFormValues) => {
        setError(null);
        setLoading(true);
        // this way using SERVER ACTION
        // await signup(values.name, values.email, values.password);
        const { name, email, password } = values;
        // callbackUrl must replace "email-verified path" is the page of that is done
        const { error } = await authClient.signUp.email({
            name,
            email,
            password,
            callbackURL: "/dashboard",
        });

        setLoading(false);
        if (error) {
            setError(error.message || "something went wrong");
        } else {
            toast.success("sign up successfully");
            router.push("/dashboard");
        }
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Fullname</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your Fullname"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your email"
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
                                    placeholder="Enter your password"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {error && (
                    <div role="alert" className="text-sm text-red-600">
                        {error}
                    </div>
                )}

                {/* <Button type='submit' className='w-full'>
					Sign Up
				</Button> */}
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
