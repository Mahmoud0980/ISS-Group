import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";

acceptLanguage.languages(["en", "ar"]);

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // فقط لما المستخدم يزور "/"
  if (pathname === "/") {
    const lang =
      acceptLanguage.get(request.headers.get("accept-language")) || "ar";
    return NextResponse.redirect(new URL(`/${lang}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"], // ينطبق فقط على المسار /
};
