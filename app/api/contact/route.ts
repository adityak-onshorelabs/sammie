import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Nodemailer needs the Node runtime (not edge).
export const runtime = "nodejs";

// Hosted white wordmark for the dark email header. Referenced by <img src> (NOT attached),
// so it never shows as an attachment chip. Override with MAIL_LOGO_URL if the asset moves.
const MAIL_LOGO_URL =
  process.env.MAIL_LOGO_URL?.trim() ||
  "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/Social%20Samosa/SAMMIE/Logo/marketing-pulse-white.png";

// Every enquiry, regardless of type, goes to this single inbox.
const CONTACT_TO = "events@socialsamosa.com";

function recipientsFor(_type: string): string[] {
  // Testing override: when set, every enquiry goes here instead of the real recipient.
  const testTo = process.env.CONTACT_TEST_TO?.trim();
  if (testTo) return [testTo];

  return [CONTACT_TO];
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Shared email shell: dark header with the logo/wordmark + a title, then a white card body.
function shell(title: string, bodyHtml: string): string {
  const logo = MAIL_LOGO_URL
    ? `<img src="${MAIL_LOGO_URL}" alt="The Marketing Pulse Summit" width="180" style="display:block;width:180px;max-width:70%;height:auto;margin:0 auto" />`
    : `<div style="color:#c9a24a;font-size:13px;letter-spacing:3px;text-transform:uppercase;font-weight:600">The Marketing Pulse Summit</div>`;

  return `<!doctype html>
<html>
  <body style="margin:0;background:#f4f4f2;padding:24px;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e6e6e2;border-radius:12px;overflow:hidden">
      <tr>
        <td align="center" style="background:#111111;padding:26px 24px">
          ${logo}
          <div style="color:#ffffff;font-size:15px;font-weight:600;margin-top:16px">${escapeHtml(title)}</div>
        </td>
      </tr>
      <tr>
        <td style="padding:24px">${bodyHtml}</td>
      </tr>
    </table>
  </body>
</html>`;
}

// Internal notification to the team.
function renderNotification(f: {
  name: string;
  email: string;
  phone: string;
  company: string;
  type: string;
  message: string;
}): string {
  const row = (label: string, value: string) =>
    `<tr>
      <td style="padding:6px 16px 6px 0;color:#8a8a8a;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td>
      <td style="padding:6px 0;color:#1a1a1a;font-size:14px">${value}</td>
    </tr>`;

  const body = `
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
      ${row("Name", escapeHtml(f.name))}
      ${row("Email", `<a href="mailto:${escapeHtml(f.email)}" style="color:#c9a24a;text-decoration:none">${escapeHtml(f.email)}</a>`)}
      ${f.phone ? row("Phone", `<a href="tel:${escapeHtml(f.phone)}" style="color:#1a1a1a;text-decoration:none">${escapeHtml(f.phone)}</a>`) : ""}
      ${f.company ? row("Company", escapeHtml(f.company)) : ""}
      ${row("Enquiry", escapeHtml(f.type))}
    </table>
    <div style="margin-top:16px;padding-top:16px;border-top:1px solid #eeeeec;color:#1a1a1a;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(f.message)}</div>`;

  return shell(`New ${f.type}`, body);
}

// Acknowledgement to the person who filled the form.
function renderAck(): string {
  const p =
    "margin:0 0 14px;color:#1a1a1a;font-size:15px;line-height:1.6";
  const body = `
    <p style="${p}">Thank you for your interest in SAMMIE – The Marketing Pulse Summit.</p>
    <p style="${p}">Your enquiry has been successfully received. We appreciate you reaching out and will carefully review your submission. A member of our team will get in touch with you soon regarding your enquiry.</p>
    <p style="${p}">Thank you once again, and we look forward to connecting with you.</p>
    <p style="margin:14px 0 0;color:#1a1a1a;font-size:15px;line-height:1.6">Warm regards,<br/>Team Social Samosa</p>`;

  return shell("We&rsquo;ve Received Your Enquiry", body);
}

export async function POST(request: Request) {
  const { SMTP_USER, SMTP_PASS, MAIL_FROM, ACK_FROM } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("contact: SMTP_USER / SMTP_PASS not configured");
    return NextResponse.json(
      { ok: false, error: "Email is not configured." },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const company = String(body.company ?? "").trim();
  const type = String(body.type ?? "Speaker and General Queries").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, phone and message are required." },
      { status: 400 },
    );
  }
  // Basic email sanity + guard against header injection via the address.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const to = recipientsFor(type);
  if (to.length === 0) {
    console.error("contact: no recipients resolved for type", type);
    return NextResponse.json(
      { ok: false, error: "Could not route your message." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const from = MAIL_FROM || SMTP_USER;
  // Acknowledgement "From". We authenticate as SMTP_USER but want the ack to appear
  // from team@socialsamosa.com. That address cannot have its own app password, so it
  // must be added as a verified "Send mail as" alias in the SMTP_USER Gmail account —
  // otherwise Gmail rewrites this back to SMTP_USER. Defaults to team@socialsamosa.com.
  const ackFrom = ACK_FROM || "team@socialsamosa.com";

  const notificationText = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    company ? `Company: ${company}` : null,
    `Enquiry: ${type}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  // 1) Notify the team — this one is critical; failure returns an error to the user.
  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: `${name} <${email}>`,
      subject: `[${type}] SAMMIE Summit enquiry from ${name}`,
      text: notificationText,
      html: renderNotification({ name, email, phone, company, type, message }),
    });
  } catch (err) {
    console.error("contact: notification sendMail failed", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send. Please try again." },
      { status: 502 },
    );
  }

  // 2) Acknowledge the sender — best-effort; don't fail the request if it bounces.
  try {
    await transporter.sendMail({
      from: `Social Samosa <${ackFrom}>`,
      to: `${name} <${email}>`,
      replyTo: ackFrom,
      subject:
        "We've Received Your Enquiry for SAMMIE - The Marketing Pulse Summit",
      text: `Thank you for your interest in SAMMIE – The Marketing Pulse Summit.\n\nYour enquiry has been successfully received. We appreciate you reaching out and will carefully review your submission. A member of our team will get in touch with you soon regarding your enquiry.\n\nThank you once again, and we look forward to connecting with you.\n\nWarm regards,\nTeam Social Samosa`,
      html: renderAck(),
    });
  } catch (err) {
    console.error("contact: acknowledgement sendMail failed", err);
  }

  return NextResponse.json({ ok: true });
}
