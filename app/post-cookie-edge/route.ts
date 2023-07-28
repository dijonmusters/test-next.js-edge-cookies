import { cookies } from "next/headers";
import wait from "../_utils/wait";
import getInstance from "../_utils/instance";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST() {
  const cookieInstance = getInstance({ cookies });
  await wait(1000);
  console.log(cookieInstance.getCookie("cookie"));
  return NextResponse.redirect("http://localhost:3000/", {
    status: 301,
  });
}
