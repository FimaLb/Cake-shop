"use client";
import { Button } from "../button";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "../input";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { signInCredentialsAction } from "@/actions/auth/signInCredentials";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";

interface LoginFormProps {
  action: signInCredentialsAction;
}

export default function LoginForm({ action }: LoginFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [state, formAction] = useFormState(action, {});
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status) {
      setIsLoading(false);
      toast({
        title: "Login Page",
        description: state?.message,
      });
      formRef.current?.reset();
      // router.push("/");
    }
  }, [state]);

  const clickHandler = () => {
    !isLoading && setIsLoading(true);
  };

  return (
    <div className='rounded-lg border bg-card p-5 text-card-foreground shadow-sm flex flex-col'>
      <h1>Login page</h1>
      <form
        className='flex flex-col gap-10 w-96'
        ref={formRef}
        action={formAction}
      >
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
