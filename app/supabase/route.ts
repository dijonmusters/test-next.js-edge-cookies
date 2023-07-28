import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET() {
  const cookieStore = cookies();

  const supabase = createRouteHandlerClient({
    cookies: () => cookieStore,
  });

  const { data, error } = await supabase
    .from("test")
    .insert({ title: "working" })
    .select();

  console.log({ data, error });

  return redirect("/");
}
