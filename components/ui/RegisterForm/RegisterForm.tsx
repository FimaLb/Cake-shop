"use client";
import registration, {
  registrationCredentialsAction,
} from "@/actions/auth/registration";
import { Button } from "../button";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "../input";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import { v4 as uuidv4 } from "uuid";

interface RegisterFormProps {
  action: registrationCredentialsAction;
}

export default function RegisterForm({ action }: RegisterFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [state, formAction] = useFormState(action, {});
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status) {
      setIsLoading(false);
      toast({
        title: "Register Page",
        description: state?.message,
      });
      formRef.current?.reset();
      router.push("/");
    }
  }, [state]);

  const clickHandler = () => {
    !isLoading && setIsLoading(true);
  };

  return (
    <div className='rounded-lg border bg-card p-5 text-card-foreground shadow-sm flex flex-col'>
      <h1>Register page</h1>
      <form className='flex flex-col gap-10 w-96' action={formAction}>
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
          <label>Password:</label>
          <Input name='password' type='password' required />
        </div>
        <div>
          <Button onClick={clickHandler} type='submit'>
            {isLoading ? <SpinnerLoading text={"Loading..."} /> : "Login"}
          </Button>
        </div>
      </form>
    </div>
  );
}
