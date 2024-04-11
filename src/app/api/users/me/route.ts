"use server";

import apiAxios from "@/lib/apiAxios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const GET = async () => {
  const token = cookies().get(process.env.TOKEN_COOKIE_NAME);

  if (!token) {
    cookies().delete(process.env.TOKEN_COOKIE_NAME);
    return redirect("/login");
  }

  try {
    const { data } = await apiAxios.get("/users/me");
    return NextResponse.json(data);
  } catch (error: any) {
    cookies().delete(process.env.TOKEN_COOKIE_NAME);
    return redirect("/login");
  }
};
