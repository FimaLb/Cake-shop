import signInCredentials from "@/actions/auth/signInCredentials";
import GitLoginButton from "@/components/ui/GitLoginButton/GitLoginButton";
import LoginForm from "@/components/ui/LoginForm/LoginForm";
import Modal from "@/components/ui/Modal/Modal";

export default function Login({
  searchParams,
}: {
  searchParams: {
    callbackUrl: string;
  };
}) {
  return (
    <Modal>
      <LoginForm action={signInCredentials} />
      <GitLoginButton searchParams={searchParams} />
    </Modal>
  );
}
