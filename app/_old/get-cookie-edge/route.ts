import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import wait from "../_utils/wait";
import getInstance from "../_utils/instance";

export const runtime = "edge";

export async function GET() {
  const cookieInstance = getInstance({ cookies });
  await wait(1000);
  console.log(cookieInstance.getCookie("cookie"));
  return redirect("/");
}
