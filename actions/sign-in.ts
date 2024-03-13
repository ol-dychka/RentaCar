"use server";

import { signIn, signOut } from "@/utils/auth";

export async function googleSignIn() {
  return signIn("google");
}

export async function googleSignOut() {
  return signOut();
}
