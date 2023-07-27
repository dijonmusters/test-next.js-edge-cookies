import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET() {
  console.log(cookies().getAll());
  return redirect("/");
}
