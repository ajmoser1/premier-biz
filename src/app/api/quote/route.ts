import { NextResponse } from "next/server";
import { Resend } from "resend";

type QuotePayload = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  serviceType?: string;
  propertyType?: string;
  urgency?: string;
  details?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatField(label: string, value: string | undefined) {
  return `<p><strong>${label}:</strong> ${escapeHtml(value?.trim() || "Not provided")}</p>`;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.QUOTE_TO_EMAIL;
  const fromEmail = process.env.QUOTE_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  let payload: QuotePayload;
  try {
    payload = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = payload.name?.trim();
  const phone = payload.phone?.trim();
  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New quote request from ${name}`,
      replyTo: payload.email?.trim() || undefined,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${payload.email?.trim() || "Not provided"}`,
        `City/ZIP: ${payload.city?.trim() || "Not provided"}`,
        `Service Type: ${payload.serviceType?.trim() || "Not provided"}`,
        `Property Type: ${payload.propertyType?.trim() || "Not provided"}`,
        `Urgency: ${payload.urgency?.trim() || "Not provided"}`,
        `Details: ${payload.details?.trim() || "Not provided"}`,
      ].join("\n"),
      html: `
        <h2>New quote request</h2>
        ${formatField("Name", name)}
        ${formatField("Phone", phone)}
        ${formatField("Email", payload.email)}
        ${formatField("City or ZIP", payload.city)}
        ${formatField("Service Type", payload.serviceType)}
        ${formatField("Property Type", payload.propertyType)}
        ${formatField("Urgency", payload.urgency)}
        ${formatField("Details", payload.details)}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
