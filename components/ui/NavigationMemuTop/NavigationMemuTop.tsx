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
import { Locale } from "@/i18n-config";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import { ModeToggle } from "../ModeToggle";
import SingOut from "../SignOut";

export default function NavigationMenuTop({ lang }: { lang?: Locale }) {
  const { data: session } = useSession();

  return (
    <NavigationMenu className='flex justify-between w-full pb-5'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={`/${lang}/homepage/`}>
            <Image src={`/Logo.webp`} width={50} height={50} alt='Logo' />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <Link href={`/${lang}/catalog/`}>Catalog</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {!session || !session.user ? (
          <>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href={`/${lang}/login/`}>Login</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href={`/${lang}/register/`}>Register</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </>
        ) : (
          <NavigationMenuItem>
            {session.user.name}
            {/* <SingOut /> */}
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
      <LocaleSwitcher lang={lang} />
      <ModeToggle></ModeToggle>
    </NavigationMenu>
  );
}
