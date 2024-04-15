import { UsersEntity } from "@/db-types";

export async function getUserByCredentials(
  email: string | FormDataEntryValue | null,
  password: string | FormDataEntryValue | null
): Promise<UsersEntity | null> {
  const params = new URLSearchParams();

  if (!(email && password)) {
    return null;
  }

  const res = await fetch(
    `${process.env.API_BASE_PATH}/users?email=${email}&password=${password}`
  );

  if (!res.ok) {
    return null;
  }
  const user = await res.json();

  return user?.length ? user[0] : null;
}

export async function createUserByCredentials(
  email: string,
  password: string
): Promise<UsersEntity | null> {
  const params = new URLSearchParams();

  if (!(email && password)) {
    return null;
  }

  const res = await fetch(
    `${process.env.API_BASE_PATH}/users?email=${email}&password=${password}`
  );

  if (!res.ok) {
    return null;
  }
  const user = await res.json();

  return user?.length ? user[0] : null;
}
