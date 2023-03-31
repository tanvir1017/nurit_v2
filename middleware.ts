import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const verify = req.cookies.get("u-auth");
  if (verify && req.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.rewrite(new URL("/404", req.url));
  }
  if (process.env.NODE_ENV === "production") {
    if (
      verify &&
      req.nextUrl.pathname.startsWith("/api") &&
      req.nextUrl.pathname.includes("/api")
    ) {
      return NextResponse.rewrite(new URL("/404", req.url));
    }
  }
}
