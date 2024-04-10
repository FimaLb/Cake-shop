"use client";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function NavigationMenuTop() {
  //   const { data: session } = useSession();
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <NavigationMenu className='flex justify-between w-full pb-5'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <Link href='/'>
              <Image src={`/Logo.webp`} width={50} height={50} alt='Logo' />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <Link href={`/ua/catalog/`}>Catalog</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
