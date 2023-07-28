import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET() {
  const supabase = createRouteHandlerClient({
    cookies,
  });

  const { data, error } = await supabase
    .from("test")
    .insert({ title: "not working" })
    .select();

  console.log({ data, error });

  return redirect("/");
}
