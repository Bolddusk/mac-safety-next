import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkRateLimit } from "@/lib/security";

/** POST API routes that send email — rate limited in one place */
const RATE_LIMITED_POST_PATHS = [
  "/api/download",
  "/api/forgework",
  "/api/message",
  "/api/send",
] as const;

function isRateLimitedPostRoute(pathname: string): boolean {
  return (RATE_LIMITED_POST_PATHS as readonly string[]).includes(pathname);
}

export function middleware(request: NextRequest) {
  if (request.method !== "POST") {
    return NextResponse.next();
  }

  if (!isRateLimitedPostRoute(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (!checkRateLimit(request)) {
    return NextResponse.json(
      { message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
