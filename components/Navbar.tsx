"use client";
import { SignOutButton, UserButton, useClerk, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Icon = () => (
  <span className="text-[#7209b7] text-3xl mr-2 drop-shadow-lg">★</span>
);

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  return (
    <nav className="glass-card mx-4 mt-4 px-6 py-2 flex items-center justify-between shadow-xl border-b border-[#3a0ca3]/30">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center">
          <Icon />
          <h1 className="font-bold text-3xl retro-glow tracking-widest">NotesApp</h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-5">
        {isSignedIn ? (
          <>
            <button className="w-[100px] bg-gradient-to-r from-[#3a0ca3] to-[#7209b7] text-white font-semibold p-2 rounded-md text-center shadow-md hover:scale-105 transition-transform">
              <SignOutButton />
            </button>
            <UserButton afterSignOutUrl="/" appearance={{ elements: { userButtonAvatarBox: 'ring-2 ring-[#7209b7] ring-offset-2' } }} />
          </>
        ) : (
          <div className="flex items-center gap-x-5">
            <Link href="/sign-in">
              <button className="w-[100px] bg-gradient-to-r from-[#3a0ca3] to-[#7209b7] text-white font-semibold p-2 rounded-md text-center shadow-md hover:scale-105 transition-transform">
                Sign in
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="w-[100px] bg-gradient-to-r from-[#7209b7] to-[#3a0ca3] text-white font-semibold p-2 rounded-md text-center shadow-md hover:scale-105 transition-transform">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
