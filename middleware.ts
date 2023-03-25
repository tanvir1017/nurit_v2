import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const cookie = req.cookies.get("u-auth");
  return NextResponse.next();
};

export const config = {
  matcher: "/",
};
