import type { Route } from "./+types/home";
import { authClient } from "~/lib/auth-client";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Better Auth Template for React Router" },
    { name: "description", content: "Welcome to Better Auth Template for React Router!" },
  ];
}

export default function Home() {
  const { data: session, isPending } = authClient.useSession();

  return (
    <>
      {!isPending && (
        session ? (
          <button onClick={() => authClient.signOut()}>
            Logout
          </button>
        ) : (
          <button onClick={() => authClient.signIn.social({
            provider: "google",
            // callbackURL: "/",
          })}>
            Sign in with Google
          </button>
        )
      )}
    </>
  )
}
