import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const protectedRoutes = ["/account"];

export default async function middleware(req: NextRequest) {
  console.log('middlewar ', req)
  const path = req.nextUrl.pathname;
  const token = (await cookies()).get("session")?.value;

  if (!protectedRoutes.includes(path)) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    if (!decoded) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/account"],
};
