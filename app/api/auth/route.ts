import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const correctPassword = process.env.AUTH_PASSWORD;

    if (!correctPassword) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    if (password === correctPassword) {
      // Set a cookie to indicate authentication (expires in 30 days)
      const cookieStore = await cookies();
      cookieStore.set("auth", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });

      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}

export async function GET() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("auth");

  return NextResponse.json({
    authenticated: authCookie?.value === "authenticated",
  });
}

