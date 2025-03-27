import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function GET() {
  const cookie = serialize("session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: -1,
    path: "/",
  });

  const response = NextResponse.json({ message: "Logged out" });
  response.headers.set("Set-Cookie", cookie);
  return response;
}
