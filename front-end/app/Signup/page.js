"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Button from "./Button"; // Assuming Button is a custom component

export const Appbar = () => {
    const session = useSession();

    return (
        <div className="border-b px-2 py-2 flex justify-between">
            <div className="text-xl font-bold flex flex-col justify-center">
                DCEX
            </div>
            <div>
                {session.data?.user ? (
                    <Button 
                        onClick={() => signOut()} 
                        className="bg-red-500 text-white py-2 px-4 rounded"
                    >
                        Logout
                    </Button>
                ) : (
                    <Button 
                        onClick={() => signIn()} 
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        Signin
                    </Button>
                )}
            </div>
        </div>
    );
};
