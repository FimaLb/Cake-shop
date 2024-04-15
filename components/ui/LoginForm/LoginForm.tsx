import { signIn } from "@/auth";
import { Button } from "../button";
import { redirect } from "next/navigation";
import { Input } from "../input";

export default function LoginForm({
  action,
  searchParams,
}: {
  action: (arg0: FormData) => Promise<void>;
  searchParams: {
    callbackUrl: string;
  };
}) {
  return (
    <div className='rounded-lg border bg-card p-5 text-card-foreground shadow-sm flex flex-col'>
      <h1>Login page</h1>
      <form className='flex flex-col gap-10 w-96' action={action}>
        <div>
          <label>Email:</label>
          <Input name='email' required />
        </div>
        <div>
          <label>Password:</label>
          <Input name='password' type='password' required />
        </div>
        <div>
          <Button type='submit'>Login</Button>
        </div>
      </form>
    </div>
  );
}
