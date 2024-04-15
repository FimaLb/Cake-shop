import registration from "@/actions/auth/registration";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";

export default function Register({
  searchParams,
}: {
  searchParams: {
    callbackUrl: string;
  };
}) {
  return (
    <div>
      <h1>Register page</h1>
      <form className='flex flex-col gap-10 w-96' action={registration}>
        <input type='hidden' value={uuidv4()} name='id' />
        <div>
          <label>Name:</label>
          <Input name='name' required />
        </div>
        <div>
          <label>Email:</label>
          <Input name='email' required />
        </div>
        <div>
          <label>Password::</label>
          <Input name='password' type='password' required />
        </div>
        <div>
          <Button type='submit'>Login</Button>
        </div>
      </form>
    </div>
  );
}
