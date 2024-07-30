"use server";

import { signIn, signOut } from "@/services/AuthService";

export const signOutUser = async () => {
    await signOut();
}

export const signInByCredentials = async (
    email: string, password: string, redirect: boolean = false
) => {
    try {
        const res = await signIn('credentials', {
            email,
            password,
            redirect
        });
        return {
            ok: true,
            message: ''
        }
    } catch(err: any) {
        return {
            ok: false,
            message: 'Invalid credentials'
        }
    }
}