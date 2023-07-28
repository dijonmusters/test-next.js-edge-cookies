export const runtime = "edge";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form action="set-cookie">
        <button>Set cookie</button>
      </form>
      <form action="get-cookie">
        <button>Get cookie</button>
      </form>
      <form action="delete-cookie">
        <button>Delete cookie</button>
      </form>
      <form action="set-cookie-edge">
        <button>Set cookie edge</button>
      </form>
      <form action="get-cookie-edge">
        <button>Get cookie edge</button>
      </form>
      <form action="delete-cookie-edge">
        <button>Delete cookie edge</button>
      </form>
    </main>
  );
}
