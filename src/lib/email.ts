import { Resend } from "resend";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email.trim());
}

export async function subscribeEmail(rawEmail: string): Promise<void> {
  const email = rawEmail.trim().toLowerCase();
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "CurXor <updates@curxor.ai>";

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  if (!audienceId) {
    throw new Error("RESEND_AUDIENCE_ID is not configured");
  }

  const resend = new Resend(apiKey);

  try {
    await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message.toLowerCase() : String(error);

    if (!message.includes("already") && !message.includes("exist")) {
      throw error;
    }
  }

  await resend.emails.send({
    from: fromEmail,
    to: email,
    subject: "You're on the CurXor launch list",
    html: `
      <div style="font-family: monospace; background: #000; color: #fff; padding: 32px;">
        <p style="color: #BF5AF2; letter-spacing: 0.2em; font-size: 12px;">CURXOR SYSTEMS</p>
        <h1 style="font-size: 24px; font-weight: 700;">You're on the list.</h1>
        <p style="color: #aaa; line-height: 1.6;">
          Thanks for subscribing. We'll send pre-order updates, firmware drops, and launch news
          for the Sovereign Edge Nexus.
        </p>
        <p style="color: #666; font-size: 12px; margin-top: 32px;">
          Designed for the edge. · <a href="https://curxor.ai" style="color: #BF5AF2;">curxor.ai</a>
        </p>
      </div>
    `,
  });
}
