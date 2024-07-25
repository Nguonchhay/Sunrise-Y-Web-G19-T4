"use server";

import { signOut } from "@/services/AuthService";

export const signOutUser = async () => {
    await signOut();
}