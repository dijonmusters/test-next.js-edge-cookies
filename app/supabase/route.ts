import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const supabase = createRouteHandlerClient({
    cookies,
  });
  const { data, error } = await supabase
    .from("tests")
    .insert({ title: "outside stream" });

  console.log({ data, error });

  return NextResponse.json({ data, error });
}
