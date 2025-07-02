//import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";//import and export the default middleware from next-auth

// export function middleware(request: NextRequest){
//     return NextResponse.redirect(new URL('/new-page', request.url));
// }



export const config = {
    // *: zero or more characters
    //+: one or more characters
    //?: zero or one character
    matcher: '/users/:id*', // This middleware will only run for requests to /old-page
};