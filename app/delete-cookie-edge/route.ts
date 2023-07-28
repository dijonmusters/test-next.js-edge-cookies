import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import wait from "../_utils/wait";

export const runtime = "edge";

export async function GET() {
  await wait(1000);
  cookies().delete("cookie");
  return redirect("/");
}
