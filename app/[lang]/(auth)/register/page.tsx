import registration from "@/actions/auth/registration";
import RegisterForm from "@/components/ui/RegisterForm/RegisterForm";

export default function Register({
  searchParams,
}: {
  searchParams: {
    callbackUrl: string;
  };
}) {
  return (
    <>
      <RegisterForm action={registration} />
    </>
  );
}
