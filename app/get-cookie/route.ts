import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET() {
  console.log(cookies().getAll());
  return redirect("/");
}
