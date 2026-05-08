import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import db from "@/app/lib/db";
import { mailer } from "@/app/lib/mailer";

interface RegisterRequest {
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

export async function POST(request: Request) {
  const { name, lastName, email, password, phone }: RegisterRequest =
    await request.json();

  const existingUser = await db?.sportproducts_user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 },
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const activationToken = Math.floor(
    100000 + Math.random() * 900000,
  ).toString();

  const newUser = await db.sportproducts_user.create({
    data: {
      name,
      lastName,
      email,
      phone,
      password: hashedPassword,
      activationToken,
    },
  });

  await mailer.sendActivationToken(activationToken, email);

  return NextResponse.json(newUser, { status: 201 });
}
