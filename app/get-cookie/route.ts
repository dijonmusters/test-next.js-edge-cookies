import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import wait from "../_utils/wait";

export async function GET() {
  console.log(cookies().getAll());
  await wait(1000);
  return redirect("/");
}
