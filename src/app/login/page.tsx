"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { useFormState } from "react-dom";
import { loginAction } from "./actions";

const LoginPage = () => {
  const [, login] = useFormState(loginAction, null);

  return (
    <>
      <div className="absolute inset-0 bg-black/5 blur -z-10"></div>
      <div className="relative max-w-96 mx-auto w-full p-6 rounded-md bg-white shadow">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full flex justify-end h-3">
            <Link href="/">
              <svg
                width="16px"
                height="16px"
                strokeWidth="1.5"
                viewBox="4 4 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="text-2xl font-bold mb-6 mt-3">로그인</div>
        </div>
        <form action={login} className="flex flex-col gap-6">
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
