// app/api/login/route.ts

import { NextResponse } from 'next/server';
import db from '@/app/lib/db';
import bcryptjs from 'bcryptjs'; // Для хеширования паролей

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Найти пользователя по email
  const user = await db.user_sportproducts.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  // Проверка пароля
  const isValidPassword = await bcryptjs.compare(password, user.password);
  if (!isValidPassword) {
    return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
  }

  // Здесь можно добавить логику для создания сессии или токена

  return NextResponse.json({ message: 'Login successful' });
}
