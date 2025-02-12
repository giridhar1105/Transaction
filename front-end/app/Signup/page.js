"use client";

import { signIn, signOut, useSession, SessionProvider } from "next-auth/react";

export default function Signup() {
    const { data: session } = useSession();

    const handleSignIn = () => {
        signIn();
    };

    const handleSignOut = () => {
        signOut();
    };

    return (
        <div className="border-b px-2 py-2 flex justify-between">
            <div className="text-xl font-bold flex flex-col justify-center">
                DCEX
            </div>
            <div>
                {session?.user ? (
                    <button 
                        onClick={handleSignOut}
                        className="bg-red-500 text-white py-2 px-4 rounded"
                    >
                        Logout
                    </button>
                ) : (
                    <button 
                        onClick={handleSignIn}
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        Signin
                    </button>
                )}
            </div>
        </div>
    );
}