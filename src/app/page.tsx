"use client";

import { useUser } from "@/hooks/useUser";
import Link from "next/link";

export default function Home() {
  const user = useUser();

  return (
    <main>
      {user?.email}
      <h1>블로그</h1>
      <Link href="/login">로그인</Link>
    </main>
  );
}
