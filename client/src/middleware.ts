import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const protectedRoutes = ["/", "/profile", "/chat", "/notification"];
const authRoutes = ["/login", "/register", "/forgot-password"];

export default function middleware(req: NextRequest) {
  const isAuthenticated = !!req.cookies.get("sub");

  if (isAuthenticated && authRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  const url = new URL(req.url);
  const origin = url.origin;
  const pathname = url.pathname;
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-url", req.url);
  requestHeaders.set("x-origin", origin);
  requestHeaders.set("x-pathname", pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
