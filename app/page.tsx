import Link from "next/link";

export const runtime = "edge";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link href="/working-node-route-handler">Working Node Route Handler</Link>
      <Link href="/working-node-server-component">
        Working Node Server Component
      </Link>
      <Link href="/working-edge-route-handler">Working Edge Route Handler</Link>
      <Link href="/working-edge-server-component">
        Working Edge Server Component
      </Link>
      <Link href="/not-working-edge-route-handler">
        Not Working Edge Route Handler
      </Link>
      <Link href="/not-working-edge-server-component">
        Not Working Edge Server Component
      </Link>
    </main>
  );
}
