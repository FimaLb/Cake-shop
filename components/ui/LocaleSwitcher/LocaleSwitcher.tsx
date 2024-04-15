"use client";

import { usePathname } from "next/navigation";
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
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <Select>
      <SelectTrigger className='w-[80px]'>
        <SelectValue placeholder={lang?.toUpperCase()} />
      </SelectTrigger>
      <SelectContent>
        {i18n.locales.map((locale) => {
          return (
            <Link
              key={locale}
              href={redirectedPathName(locale)}
              style={{ display: "block" }}
            >
              {locale.toUpperCase()}
            </Link>
          );
        })}
      </SelectContent>
    </Select>
  );
}
