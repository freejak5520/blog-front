"use client";

import Input from "@/components/Input";
import { loginAction } from "./actions";
import Button from "@/components/Button";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="max-w-screen-sm mx-auto w-full p-4">
      <Link href="/">Home</Link>
      <form action={loginAction} className="flex flex-col gap-4">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="username"
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          required
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
