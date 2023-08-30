import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Auth Routes
const authRoutes = ["/auth/sign-in", "/auth/sign-up"];

// Protected Routes
const protectedRoutes = ["/dashboard/overview", "/dashboard/manage-store"];

export function middleware(request: NextRequest) {
  let token = request.cookies.has("token");
  console.log("token",token)

  //    AUTHENTICATED USER
  if (authRoutes.includes(request.nextUrl.pathname) && token) {
    /*
        If the user is authenticated, its redirected to Dashboard Overview Page
    */
    return NextResponse.redirect(new URL("/dashboard/overview", request.url));
  }

  //    UNAUTHENTICATED USER
  if (protectedRoutes.includes(request.nextUrl.pathname) && !token) {
    /*
        If the user is not authenticated, its redirected to the sign in page
    */
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }

  const response = NextResponse.next();

  return response;
}
