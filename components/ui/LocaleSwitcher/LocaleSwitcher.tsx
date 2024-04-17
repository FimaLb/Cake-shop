"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../../i18n-config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LocaleSwitcher({ lang }: { lang?: Locale }) {
  const pathName = usePathname();
  const router = useRouter();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const onChange = (locale: Locale) => {
    if (locale === lang) return;
    const newPath = redirectedPathName(locale);
    router.push(newPath);
  };

  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className='w-[80px]'>
        <SelectValue placeholder={lang?.toUpperCase()} />
      </SelectTrigger>
      <SelectContent>
        {i18n.locales.map((locale) => {
          return (
            <SelectItem key={locale} value={locale}>
              {locale.toUpperCase()}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
