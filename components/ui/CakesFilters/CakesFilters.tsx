"use client";
import { ShapesEntity } from "@/db-types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../input";
import { Label } from "../label";

export default function CakesFilters({
  shapes,
}: {
  shapes: ShapesEntity[] | null;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentShape = searchParams.get("shape");
  const currentWeight = searchParams.get("weight");
  const router = useRouter();

  console.log("shapes", shapes);

  const createQueryString = useCallback(
    (name: string, value: string | null) => {
      const param = new URLSearchParams(searchParams.toString());
      value && param.set(name, value);
      return param.toString();
    },
    [searchParams]
  );

  const onChangeShape = (shape: string) => {
    if (shape === currentShape) return;
    router.replace(`${pathname}?${createQueryString("shape", shape)}`);
  };
  const onChangeWeight = (event: React.FormEvent<HTMLInputElement>) => {
    const weight = event?.currentTarget?.value;
    if (weight === currentWeight) return;
    router.replace(`${pathname}?${createQueryString("weight", weight)}`);
  };

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='font-black'>Filters</h2>
      <Label htmlFor='shape'>Picture</Label>
      <Select onValueChange={onChangeShape}>
        <SelectTrigger id='shape' className='w-[180px] gap-5'>
          <SelectValue placeholder='Default' />
        </SelectTrigger>
        <SelectContent>
          {shapes?.map((shape) => {
            return (
              <SelectItem key={shape.id} value={shape.id}>
                {shape.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='weight'>Weight</Label>
        <Input
          onChange={onChangeWeight}
          className='w-[180px] gap-5'
          id='weight'
          type='number'
          max='3000'
        />
      </div>
    </div>
  );
}
