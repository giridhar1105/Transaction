// "use client";

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { signIn } from "next-auth/react"; // Import signIn from NextAuth

// export default function Signup() {
//     const [isHovered, setIsHovered] = useState(false);

//     const handleGoogleLogin = () => {
//         // Trigger Google login using NextAuth's signIn method
//         signIn("google");
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-800 to-blue-100 flex items-center justify-center">
//             <motion.div
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-white p-8 rounded-2xl shadow-2xl w-96"
//             >
//                 <motion.div
//                     animate={{ y: [0, -10, 0] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                     className="flex justify-center mb-8"
//                 >
//                     <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
//                         Welcome !!!
//                     </h1>
//                 </motion.div>

//                 <motion.button
//                     onMouseEnter={() => setIsHovered(true)}  // onMouseEnter instead of onHoverStart
//                     onMouseLeave={() => setIsHovered(false)} // onMouseLeave instead of onHoverEnd
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={handleGoogleLogin}  // Trigger Google login on click
//                     className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-700 hover:border-blue-400 transition-all duration-300"
//                 >
//                     <img
//                         src="https://www.google.com/favicon.ico"
//                         alt="Google"
//                         className="w-6 h-6"
//                     />
//                     <span className="font-semibold">Continue with Google</span>
//                 </motion.button>

//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.5 }}
//                     className="mt-6 text-center"
//                 >
//                     <p className="text-gray-600">
//                         Don't have an account?{' '}
//                         <a href="#" className="text-blue-500 hover:text-blue-600 font-semibold">
//                             Sign up
//                         </a>
//                     </p>
//                 </motion.div>
//             </motion.div>
//         </div>
//     );
// }



"use client";
import { signIn, signOut, useSession } from "next-auth/react"

export const Appbar = () => {
    const session = useSession();
    return <div className="border-b px-2 py-2 flex justify-between">
        <div className="text-xl font-bold flex flex-col justify-center">
            DCEX
        </div>
        <div>
            {session.data?.user ? <Button onClick={() => {
                signOut()
            }}>Logout</Button> : <Button onClick={() => {
                signIn()
            }}>Signin</Button>}
        </div>
    </div>
}