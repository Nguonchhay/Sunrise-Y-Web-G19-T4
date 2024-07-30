import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    session: {
        strategy: 'jwt',
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", placeholder: "example@example.com"},
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                // @TODO: query from database or call API
                const fakeUser = {
                    email: "test@test.com",
                    password: "12345678"
                };
                let user: any = null;
                if (fakeUser.email === credentials.email && fakeUser.password === credentials.password) {
                    user = {
                        id: 1,
                        email: fakeUser.email,
                        name: "Fake User"
                    };
                }

                return user;
            },
        }),
    ],
    pages: {
        signIn: '/login'
    }
});