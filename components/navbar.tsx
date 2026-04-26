"use client";

import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-slate-200 font-medium text-base">
        NextAuth Lab
      </Link>

      {session ? (
        <button
          onClick={() => signOut()}
          className="text-sm text-red-400 bg-red-950 border border-red-900 rounded-md px-3 py-1.5 hover:bg-red-900 transition-colors"
        >
          Sign out
        </button>
      ) : (
        <Link
          href="/login"
          className="text-sm text-slate-400 bg-slate-800 border border-slate-700 rounded-md px-3 py-1.5 hover:bg-slate-700 transition-colors"
        >
          Sign in
        </Link>
      )}
    </nav>
  );
}
