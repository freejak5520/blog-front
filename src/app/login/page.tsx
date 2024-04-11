"use client";

import Input from "@/components/Input";
import { loginAction } from "./actions";
import Button from "@/components/Button";
import Link from "next/link";
import { useFormState } from "react-dom";

const LoginPage = () => {
  const [status, login, pending] = useFormState(loginAction, null);

  return (
    <>
      <div className="absolute inset-0 bg-black/5 blur-sm"></div>
      <div className="max-w-96 mx-auto w-full p-6 rounded-md bg-white z-10 shadow">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full flex justify-end h-3">
            <Link href="/">
              <svg
                width="16px"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
              >
                <path
                  fill="#3E4042"
                  fillRule="evenodd"
                  d="M.203.203c.27-.27.708-.27.979 0L6 5.02 10.818.203c.27-.27.709-.27.98 0 .27.27.27.708 0 .979L6.978 6l4.818 4.818c.27.27.27.709 0 .98-.27.27-.709.27-.979 0L6 6.978l-4.818 4.818c-.27.27-.709.27-.98 0-.27-.27-.27-.709 0-.979L5.022 6 .203 1.182c-.27-.27-.27-.709 0-.98z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="text-2xl font-bold mb-6 mt-3">Logo</div>
        </div>
        <form action={login} className="flex flex-col gap-6">
          {pending && <div className="">Loading...</div>}
          <div className="flex flex-col gap-3">
            <Input
              type="text"
              name="email"
              placeholder="이메일"
              autoComplete="username"
            />
            <Input
              type="password"
              name="password"
              placeholder="비밀번호"
              autoComplete="current-password"
            />
          </div>
          <Button type="submit">로그인</Button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
