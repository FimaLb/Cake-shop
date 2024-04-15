import signInCredentials from "@/actions/auth/signInCredentials";
import GitLoginButton from "@/components/ui/GitLoginButton/GitLoginButton";
import LoginForm from "@/components/ui/LoginForm/LoginForm";

export default function Login({
  searchParams,
}: {
  searchParams: {
    callbackUrl: string;
  };
}) {
  return (
    <>
      <LoginForm action={signInCredentials} searchParams={searchParams} />
      <GitLoginButton searchParams={searchParams} />
    </>
  );
}
