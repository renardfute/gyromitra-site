import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2).max(200),
  email: z.string().email().max(200),
  company: z.string().max(200).optional().or(z.literal("")),
  message: z.string().min(10).max(5000),
  website: z.string().optional().or(z.literal("")), // honeypot
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
    const { name, email, company, message, website } = parsed.data;

    // Honeypot - if filled, it's a bot
    if (website && website.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM || "noreply@gyromitra.com";

    if (!to || !process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    const subject = `New inquiry — Gyromitra.com (${name})`;
    const html = `
      <div style=\"font-family:Arial,Helvetica,sans-serif;line-height:1.5\">
        <h2>New website inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "—"}</p>
        <p><strong>Message:</strong><br/>${message.replace(/</g, "&lt;").replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    await resend.emails.send({ from, to, replyTo: email, subject, html });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
