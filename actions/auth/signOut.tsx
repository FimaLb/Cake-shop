"use server";
import { signOut } from "@/auth";

export default async function signOutAction(formData: FormData) {
  return await signOut();
}
