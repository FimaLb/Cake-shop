"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export default async function signInCredentials(data: FormData) {
  "use server";
  try {
    await signIn("credentials", {
      redirect: false,
      email: data.get("email"),
      password: data.get("password"),
    });
    redirect("/");
  } catch (error) {
    if (error instanceof AuthError) {
      //   <ShowAuthError error={error} />;
      switch (error.type) {
        case "CredentialsSignin":
          console.log("Invalid credentials.");
          return;
        default:
          console.log("Something went wrong.");
          return;
      }
    }
  }
}
