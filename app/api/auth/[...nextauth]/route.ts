import prisma from "@/app/lib/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async signIn(params) {
            if(!params.user?.email) {
                return false;
            }
            try {
                await prisma.user.create({
                    data: {
                        email: params.user?.email || "",
                        provider: "GOOGLE",
                        name: params.user?.name || "",
                    }
                })
            } catch (error) {
                console.error("Error creating user:", error);
            }

            return true;
        },
        async session({ session, token }) {
            if(session?.user && token?.sub) {
                session.user.id = token.sub;
            }
            return session
        }
    }
});

export { handler as GET, handler as POST };