"use client";

import { Loader2 } from "lucide-react";
import { SignInWithGitHub } from "./components/oauth-forms/sign-in-with-github";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { UserMenu } from "./components/sign-out-button";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthLoading>
        <Loader2 className="animate-spin size-10" />
        
      </AuthLoading>
      <Unauthenticated>
        <SignInWithGitHub />
      </Unauthenticated>
      <Authenticated>
        Your Authenticated
        <UserMenu><h1>Chris</h1></UserMenu>
      </Authenticated>
    </main>
  );
}
