import { NextResponse } from "next/server";
import { isValidEmail, subscribeEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const email =
      body && typeof body === "object" && "email" in body
        ? (body as { email?: unknown }).email
        : undefined;

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    await subscribeEmail(email);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[subscribe]", error);

    if (error instanceof Error && error.message.includes("not configured")) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 503 }
      );
    }

    return NextResponse.json({ error: "Subscribe failed" }, { status: 500 });
  }
}
