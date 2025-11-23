"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const session = authClient.useSession();
  if (session.isPending) {
    return (
      <div className="flex flex-col gap-4 p-8">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-10 w-32" />
      </div>
    );
  }
  if (session.data?.user) {
    return (
      <div className="p-8">
        <p className="text-lg">Signed in as {session.data.user.name}</p>
      </div>
    );
  }
  return (
    <div className="p-8">
      <Button onClick={() => authClient.signIn.social({ provider: "github" })}>
        Sign in with Github
      </Button>
    </div>
  );
}
