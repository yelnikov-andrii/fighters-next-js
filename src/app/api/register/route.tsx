import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import db from "@/app/lib/db"; // Импортируй свою настройку базы данных

interface RegisterRequest {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const { name, lastName, email, password }: RegisterRequest = await request.json();

  // Проверка на существующего пользователя
  const existingUser = await db?.user_sportproducts.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );
  }

  // Хешируем пароль
  const hashedPassword = await bcrypt.hash(password, 10);

  // Сохраняем пользователя в базе данных
  const newUser = await db.user_sportproducts.create({
    data: {
      name,
      lastName,
      email,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  return NextResponse.json(newUser, { status: 201 });
}
