"use client";
import { getUserByCredentials } from "@/loaders/users";
import signInCredentials from "@/actions/auth/signInCredentials";

export interface registrationCredentialsState {
  status?: boolean;
  message?: string;
}

export default async function registration(
  state: registrationCredentialsState,
  formData: FormData
): Promise<registrationCredentialsState> {
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
    const state = {};

    if (!user?.id) {
      const res = await fetch(`${process.env.API_BASE_PATH}/users`, {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        await signInCredentials(state, formData);
        return {
          status: true,
          message: "The user is added!",
        };
      }

      return {
        status: false,
        message: "Something went wrong!",
      };
    } else {
      return {
        status: false,
        message: "The user is already registered!",
      };
    }
  } catch (error) {
    return {
      status: false,
      message: "registration error",
    };
  }
}

export type registrationCredentialsAction = typeof registration;
