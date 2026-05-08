import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import db from "@/app/lib/db";
export async function GET() {
  const token = cookies().get("session")?.value;

  if (!token) {
    return Response.json({ user: null });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: number;
    };

    const user = await db.sportproducts_user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        name: true,
        lastName: true,
        phone: true,
      },
    });

    return Response.json({ user });
  } catch {
    return Response.json({ user: null });
  }
}
