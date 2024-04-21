"use client";
import { useSession } from "next-auth/react";
import { Button } from "../button";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import { Textarea } from "../textarea";
import { commentsAction } from "@/actions/comments/comments";
import { v4 as uuidv4 } from "uuid";

interface CommentFormProps {
  action: commentsAction;
}

export default function CommentForm({ action }: CommentFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [state, formAction] = useFormState(action, {});
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status) {
      setIsLoading(false);
      toast({
        title: "Comments Page",
        description: state?.message,
      });
      formRef.current?.reset();
    }
  }, [state]);

  const clickHandler = () => {
    !isLoading && setIsLoading(true);
  };
  const { data: session } = useSession();
  console.log(session?.user);
  return (
    <div className='rounded-lg border bg-card p-5 text-card-foreground shadow-sm flex flex-col'>
      <h1>Send comment to our team</h1>
      <form
        className='flex flex-col gap-10 w-96'
        ref={formRef}
        action={formAction}
      >
        <input type='hidden' value={uuidv4()} name='id' />
        <input type='hidden' value={session?.user?.id} name='userId' />
        <Textarea name='message' required maxLength={200} />
        <div>
          <Button onClick={clickHandler} type='submit'>
            {isLoading ? <SpinnerLoading text={"Loading..."} /> : "Send"}
          </Button>
        </div>
      </form>
    </div>
  );
}
