import registration from "@/actions/auth/registration";
import RegisterForm from "@/components/ui/RegisterForm/RegisterForm";
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
      <RegisterForm action={registration} />
    </Modal>
  );
}
