import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    await resend.emails.send({
      from: "TAYB <onboarding@resend.dev>",
      to: process.env.STORE_EMAIL!,
      subject: "New Newsletter Subscriber",
      html: `
        <h2>New Subscriber</h2>
        <p>Email: ${email}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed" },
      { status: 500 }
    );
  }
}