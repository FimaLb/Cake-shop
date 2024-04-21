"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <Dialog defaultOpen={true} onOpenChange={() => router.back()}>
      <DialogContent className='p-[40px]'>{children}</DialogContent>
    </Dialog>
  );
}
