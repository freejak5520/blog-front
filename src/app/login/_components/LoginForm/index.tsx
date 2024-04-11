"use client";

import Button from "@/app/_components/Button";
import Input from "@/app/_components/Input";
import { useFormState } from "react-dom";
import { loginAction } from "../../actions";

const LoginForm = () => {
  const [, login] = useFormState(loginAction, null);

  return (
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
  );
};

export default LoginForm;
