import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import wait from "../_utils/wait";

export async function GET() {
  await wait(1000);
  console.log(cookies().getAll());
  return redirect("/");
}
