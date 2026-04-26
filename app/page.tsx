"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import { useSession } from "@/lib/auth-client";

export default function HomePage() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        {user ? (
          // Đã đăng nhập
          <div className="w-full max-w-sm flex flex-col items-center gap-6">
            <div className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-5 flex items-center gap-4">
              {user.image ? (
                <img
                  src={user.image}
                  alt={user.name ?? "avatar"}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-blue-300 font-medium text-base">
                  {user.name?.charAt(0).toUpperCase() ?? "U"}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-slate-100 font-medium text-sm truncate">
                  {user.name}
                </p>
                <p className="text-slate-500 text-xs mt-0.5 truncate">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-2xl font-medium text-slate-100">
                Welcome back!
              </h1>
              <p className="text-slate-500 text-sm mt-2">
                Bạn đã xác thực thành công.
              </p>
            </div>
          </div>
        ) : (
          // Chưa đăng nhập
          <div className="text-center flex flex-col items-center gap-5">
            <span className="text-xs bg-slate-800 text-slate-500 border border-slate-700 rounded-full px-3 py-1">
              Next.js 16 + Better Auth
            </span>
            <h1 className="text-4xl font-medium text-slate-100 leading-snug">
              Authentication
              <br />
              done right
            </h1>
            <p className="text-slate-500 text-sm">
              OAuth với Github & Google, không cần password.
            </p>
            <Link
              href="/login"
              className="mt-2 bg-slate-100 text-slate-900 text-sm font-medium rounded-lg px-6 py-2.5 hover:bg-white transition-colors"
            >
              Get started
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
