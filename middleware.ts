import { authMiddleware } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

import { verify } from "./util/jwt";

const secret = process.env.ACCESS_TOKEN || "secret";

export default async function middleware(req: NextRequest) {
  authMiddleware();
  const jwt = req.cookies.get("u-auth");
  const jwtValue = jwt?.value;
  const { pathname } = req.nextUrl;

  // Comment: => ignore to load the public folder path
  // Comment: => ignore to load the public folder path
  const PUBLIC_FILE = /\.(.*)$/;
  if (PUBLIC_FILE.test(pathname)) return NextResponse.next();

  if (pathname.startsWith("/auth")) {
    if (jwt) {
      req.nextUrl.pathname = "/";
      return NextResponse.redirect(req.nextUrl);
    }
  } else if (pathname.startsWith("/dashboard")) {
    if (jwt === undefined) {
      req.nextUrl.pathname = "/auth/login";
      return NextResponse.redirect(req.nextUrl);
    }

    try {
      const decode = await verify(jwtValue as string, secret);
      if (decode?.role !== "ADMIN") {
        req.nextUrl.pathname = "/401";
        return NextResponse.redirect(req.nextUrl);
      }
      return NextResponse.next();
    } catch (error) {
      req.nextUrl.pathname = "/auth/login";
      return NextResponse.redirect(req.nextUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
