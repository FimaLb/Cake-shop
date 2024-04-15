import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByCredentials } from "./loaders/users";

const credentialsConfig = CredentialsProvider({
  name: "Credentials",
  credentials: {
    email: {
      label: "Email",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },
  async authorize(credentials) {
    const { email, password }: { email: string; password: string } | any =
      credentials;
    const user = await getUserByCredentials(email, password);

    if (user !== null) {
      return {
        name: user.name,
      };
    }
    return null;
  },
});
export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [GitHub, Google, credentialsConfig],
});
