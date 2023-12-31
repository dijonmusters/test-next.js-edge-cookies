import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function Page() {
  const cookieStore = cookies();

  const supabase = createRouteHandlerClient({
    cookies: () => cookieStore,
  });

  const { data, error } = await supabase.from("tests").select();

  console.log({ data, error });

  return <pre>{JSON.stringify({ data, error }, null, 2)}</pre>;
}
