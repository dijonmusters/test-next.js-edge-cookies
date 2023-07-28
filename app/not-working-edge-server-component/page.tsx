import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function Page() {
  const supabase = createServerComponentClient({
    cookies,
  });

  const { data, error } = await supabase.from("tests").select();

  console.log({ data, error });

  return <pre>{JSON.stringify({ data, error }, null, 2)}</pre>;
}
