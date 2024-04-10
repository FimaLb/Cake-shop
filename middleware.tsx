import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { pathToRegexp } from "path-to-regexp";
import { i18n, type DefaultLocale } from "@/i18n-config";
// import { auth } from "auth";
const langs = ["de", "en"];

const protectedPages = ["/protected"];
const guiestOnlyPages = ["/login"];
const defaultLocale = i18n.defaultLocale;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log("pathname", pathname);

  // const isLangPageRegx = pathToRegexp("/:lang");
  // console.log("isLangPageRegx", isLangPageRegx);
  //   console.log("test", isLangPageRegx.test(pathname));
  //   console.log("exec", isLangPageRegx.exec(pathname));

  // if (
  //   request.nextUrl.pathname.startsWith("/") ||
  //   request.nextUrl.pathname.startsWith(`/${defaultLocale}`) ||
  //   request.nextUrl.pathname.startsWith("/en")
  // ) {
  // return NextResponse.redirect(
  //   new URL(`/${defaultLocale}/homepage`, request.url)
  // );
  // }

  const resp = NextResponse.next();

  //   resp.headers.set("x-hello-from-middleware", "hello");

  return resp;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
