import { getUser } from "@/actions/userActions";
import Todos from "@/components/Todos";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
  const user: any = await currentUser();
  if (!user)
    return (
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="glass-card p-10 flex flex-col items-center max-w-xl w-full">
          <span className="text-6xl mb-4 retro-glow">★ NotesApp</span>

          <p className="mb-6 text-lg text-gray-300 text-center">
            Organize your thoughts with a fast, secure, and beautifully simple
            app.
            <br />
            <span className="text-[#7209b7]">Sign in to get started!</span>
          </p>
          <div className="flex gap-4 mb-6">
            <Link href="/sign-in">
              <button className="bg-gradient-to-r from-[#3a0ca3] to-[#7209b7] text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform">
                Sign In
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="bg-gradient-to-r from-[#7209b7] to-[#3a0ca3] text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform">
                Sign Up
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-2 w-full mt-2">
            <div className="flex items-center gap-2">
              <span className="text-[#3a0ca3] text-xl">✔</span>
              <span className="text-gray-200">
                Fast and simple todo management
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#7209b7] text-xl">🔒</span>
              <span className="text-gray-200">Secure, private</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#4361ee] text-xl">✨</span>
              <span className="text-gray-200">Retro-inspired, modern UI</span>
            </div>
          </div>
        </div>
      </main>
    );
  const fetchedData = await getUser(user?.id);
  const todos = fetchedData?.[0]?.todos || [];
  return (
    fetchedData && (
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="w-full max-w-xl mb-8">
          <div className="glass-card p-6 flex flex-col items-center mb-4">
            <h2 className="text-3xl font-bold mb-2 retro-glow">
              Welcome,{" "}
              <span className="text-[#7209b7]">
                {user.firstName || user.username || "User"}
              </span>
              !
            </h2>
            <p className="text-lg text-gray-300">
              You have{" "}
              <span className="text-[#3a0ca3] font-bold">{todos.length}</span>{" "}
              todos.
            </p>
          </div>
        </div>
        <Todos todos={todos} user={fetchedData[0]} />
      </main>
    )
  );
}
