"use server";

import Link from "next/link";
import { getSession, logout } from "@/lib/session";

export default async function Gnb() {
  const { id, email } = await getSession();

  return (
    <nav className="navbar">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Home
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {id ? (
            <>
              <li>
                <div>{email}</div>
              </li>
              <li>
                <Link href={"/posts/create"}>New Post</Link>
              </li>
              <li>
                <form action={logout}>
                  <button type="submit">Logout</button>
                </form>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href={"/login"}>Log in</Link>
              </li>
              <li>
                <Link href={"/auth/join"}>Sign up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
