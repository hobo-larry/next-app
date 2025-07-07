//import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";//import and export the default middleware from next-auth

// export function middleware(request: NextRequest){
//     return NextResponse.redirect(new URL('/new-page', request.url));
// }



export const config = {
  // *: zero or more characters
  //+: one or more characters
  //?: zero or one character
  matcher: [
    // Apply middleware to all routes except those listed below
    "/((?!api/auth|_next/static|_next/image|favicon.ico|signin|signup|$).*)",
  ],
};