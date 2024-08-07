"use client";

import { useState } from "react";
import GoogleSignInImage from "@/images/google-sign-in.jpg";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { signInByCredentials } from "@/app/actions";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onGoogleSignIn = () => {
        signIn('google');
    }

    const onSubmit = async (formData: FormData) => {
        const res = await signInByCredentials(email, password);
        setError(res.message);
        if (res.ok) {
            router.push('/');
        }
    }

    return (
        <div>
            <h2 className="text-2xl text-red-500 m-5">{error}</h2>
            <form className="space-y-6" action={onSubmit} method="POST">
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required={true}
                        onChange={(e: any) => setEmail(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                        >
                        Password
                        </label>
                        <div className="text-sm">
                        <a
                            href="#"
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                            Forgot password?
                        </a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required={true}
                        onChange={(e: any) => setPassword(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign in
                    </button>
                </div>
            </form>
            <div className="mt-10 text-center text-sm text-gray-500">
                <button onClick={onGoogleSignIn}>
                    <Image src={GoogleSignInImage} width={200} height={200} alt="Sign in with Google"/>
                </button>
            </div>
        </div>
        
    )
}
