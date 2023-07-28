import { cookies } from "next/headers";
import wait from "../_utils/wait";
import getInstance from "../_utils/instance";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST() {
  const cookieInstance = getInstance({ cookies });
  const value = await cookieInstance.getCookie("cookie");
  console.log(value);
  return NextResponse.redirect(
    "https://test-next-js-edge-cookies.vercel.app/",
    {
      status: 301,
    }
  );
}
