"use client";

import { authClient } from "@/lib/auth-client";

export default function Home() {
  const session = authClient.useSession();
  if (session.data?.user) {
    return <div>Signed in as {session.data.user.name}</div>;
  }
  return (
    <div>
      <button onClick={() => authClient.signIn.social({ provider: "github" })}>
        Sign in with Github
      </button>
    </div>
  );
}
