import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const supabase = createRouteHandlerClient({
    cookies: cookies,
  });

  const { data, error } = await supabase.from("tests").select();

  console.log({ data, error });

  return NextResponse.json({ data, error });
}
