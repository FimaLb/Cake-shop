"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { revalidateTag } from "next/cache";

export interface SignInCredentialsState {
  status?: boolean;
  message?: string;
}

export default async function signInCredentials(
  state: SignInCredentialsState,
  formData: FormData
): Promise<SignInCredentialsState> {
  try {
    await new Promise<undefined>((resolve) =>
      setTimeout(() => resolve(undefined), 4000)
    );
    await signIn("credentials", {
      redirect: false,
      email: formData.get("email"),
      password: formData.get("password"),
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            status: false,
            message: "Invalid credentials.",
          };
        default:
          return {
            status: false,
            message: "Something went wrong.",
          };
      }
    }
  }
  revalidateTag("login");
  return {
    status: true,
    message: "You are now logged in.",
  };
}

export type signInCredentialsAction = typeof signInCredentials;
