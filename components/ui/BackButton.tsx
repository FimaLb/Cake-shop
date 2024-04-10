"use client";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Button } from "./button";
export default function BackButton({
  children,
  css,
}: {
  children: string;
  css?: string;
}) {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.back();
      }}
      className={css}
    >
      <ChevronLeftIcon className='h-4 w-4' />
      {children}
    </Button>
  );
}
