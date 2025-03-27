import { baseUrl } from "@/data/url"
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const { fullName, email, message } = await req.json();
        const response = await fetch(`${baseUrl}/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullName, email, message })
        });

        if (response.ok) {
            return NextResponse.json("Created", { status: 201 });
        } else {
            return NextResponse.json("Error can not create", { status: 500 })
        }
    } catch (e: any) {
        console.log(e);
        return NextResponse.json(e?.message, { status: 500 })
    }
}