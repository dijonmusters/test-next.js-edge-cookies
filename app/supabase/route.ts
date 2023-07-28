import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const cookieStore = cookies();

  const supabase = createRouteHandlerClient({
    cookies: () => cookieStore,
  });
  const { data, error } = await supabase
    .from("tests")
    .insert({ title: "outside stream" });

  console.log({ data, error });

  return NextResponse.redirect(requestUrl.origin);
}
