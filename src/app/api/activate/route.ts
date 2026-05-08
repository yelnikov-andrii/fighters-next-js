import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import db from "@/app/lib/db";

interface RegisterRequest {
  code: string;
  email: string;
}

export async function POST(request: Request) {
  const { code, email }: RegisterRequest = await request.json();

  const existingUser = await db?.sportproducts_user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    return NextResponse.json(
      { message: "User does not exist" },
      { status: 400 },
    );
  }

  if (existingUser.activationToken !== code) {
    return NextResponse.json({ message: "Invalid code" }, { status: 400 });
  }

  await db.sportproducts_user.update({
    where: { email },
    data: {
      activationToken: null,
    },
  });

  return NextResponse.json(
    { message: "Account activated successfully" },
    { status: 200 },
  );
}
