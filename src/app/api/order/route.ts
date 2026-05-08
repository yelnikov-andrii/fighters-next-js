import { NextResponse } from "next/server";
import db from "@/app/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { items, name, lastName, phone, address, email } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ message: "Cart is empty" }, { status: 400 });
    }

    if (!name || !phone || !address || !email) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    const total = items.reduce(
      (acc: number, item: any) => acc + item.price * item.quantity,
      0,
    );

    const order = await db.sportproducts_order.create({
      data: {
        name,
        lastName,
        phone,
        address,
        total,
        email,

        items: {
          create: items.map((item: any) => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    return NextResponse.json(order, {
      status: 201,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
