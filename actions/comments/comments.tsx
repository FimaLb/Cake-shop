"use server";

export interface commentsState {
  status?: boolean;
  message?: string;
}

export default async function comments(
  state: commentsState,
  formData: FormData
): Promise<commentsState> {
  const data = {
    id: formData.get("id"),
    message: formData.get("message"),
    userId: formData.get("userId"),
    name: "",
    email: "",
  };
  console.log('formData.get("userId")', data.userId);
  try {
    const user = await fetch(
      `${process.env.API_BASE_PATH}/users?id=${formData.get("userId")}`
    );
    if (!user.ok) {
      return {
        status: false,
        message: "User not found.",
      };
    }

    const userData = await user.json();
    // console.log("user", userData);
    data.name = userData[0].name;
    data.email = userData[0].email;

    // console.log("data", data);
    // console.log("JSON.stringify(data)", JSON.stringify(data));
    const res = await fetch(`${process.env.API_BASE_PATH}/customer_message`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      return {
        status: false,
        message: "The comment wasn't send.",
      };
    }
    return {
      status: true,
      message: "The comment was send.",
    };
  } catch (error) {
    return {
      status: false,
      message: "Something went wrong.",
    };
  }
}

export type commentsAction = typeof comments;
