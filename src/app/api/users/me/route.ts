"use server";

import apiAxios from "@/lib/apiAxios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  const token = cookies().get(process.env.TOKEN_COOKIE_NAME);

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const { data } = await apiAxios.get("/users/me");
    return NextResponse.json({ data });
  } catch (error: any) {
    return NextResponse.json(error.response.data, {
      status: error.response.status,
    });
  }
};
