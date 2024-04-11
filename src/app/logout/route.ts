"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const GET = () => {
  cookies().delete(process.env.TOKEN_COOKIE_NAME);

  return redirect("/");
};
