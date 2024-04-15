import { signIn } from "@/auth";
import { Button } from "../button";
import { redirect } from "next/navigation";

export default function GitLoginButton({
  searchParams,
}: {
  searchParams: {
    callbackUrl: string;
  };
}) {
  const gitLogin = async () => {
    "use server";
    await signIn("github");
    redirect(searchParams.callbackUrl ?? "/");
  };

  return (
    <form className='flex flex-col gap-10 w-96 pt-10' action={gitLogin}>
      <div>
        <Button type='submit'>Github</Button>
      </div>
    </form>
  );
}
