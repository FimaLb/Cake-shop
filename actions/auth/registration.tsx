"use server";
import { getUserByCredentials } from "@/loaders/users";
import signInCredentials from "@/actions/auth/signInCredentials";
import { redirect } from "next/navigation";

export default async function registration(formData: FormData) {
  const data = {
    id: formData.get("id"),
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    image: "image",
    provider: "credential",
    isAdmin: false,
  };

  try {
    const user = await getUserByCredentials(data.email, data.password);
    if (!user?.id) {
      const res = await fetch(`${process.env.API_BASE_PATH}/users`, {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        console.log("The user is added!");
        await signInCredentials(formData);
        // redirect("/");
      }
    } else {
      console.log("The user is already registered!");
    }
  } catch (error) {
    console.log("registration error", error);
  }
}
