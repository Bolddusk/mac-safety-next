/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { emailTemplate } from "../emailtemplate";

const TO_EMAILS = [
  "kevin@macsafety.us",
  "chris@macsafety.us",
  "hamza@macsafety.us",
];

const FROM_EMAIL = "nixn@macintel.io";
const FROM_NAME = "MacSafety";

const ALLOWED_FIELDS: Array<{
  key: string;
  label: string;
  maxLen: number;
  required?: boolean;
}> = [
  { key: "name", label: "Name", maxLen: 120, required: true },
  { key: "email", label: "Email", maxLen: 254 },
  { key: "company", label: "Company", maxLen: 160, required: true },
  { key: "industry", label: "Industry", maxLen: 120 },
  { key: "service", label: "Service", maxLen: 120 },
  { key: "serviceName", label: "Service Name", maxLen: 120 },
  { key: "message", label: "Message", maxLen: 1000 },
  { key: "type", label: "Type", maxLen: 30 },
  { key: "requestType", label: "Request Type", maxLen: 30 },
  { key: "platform", label: "Platform", maxLen: 30 },
  { key: "phone", label: "Phone", maxLen: 20 },
  { key: "firstName", label: "First Name", maxLen: 50 },
  { key: "lastName", label: "Last Name", maxLen: 50 },
];

// --- Helpers ---
function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeOneLine(input: string): string {
  // Prevent header injection & weird control chars
  return input.replace(/[\r\n\t]+/g, " ").trim();
}

function isValidEmail(email: string): boolean {
  // Simple validation; enough for security + sanity
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const validatePayload = (body: any): any => {
  const missingRequired: string[] = [];
  const emailData: Array<{ label: string; value: string }> = [];

  for (const field of ALLOWED_FIELDS) {
    const raw = body[field.key];

    if (field.required && (typeof raw !== "string" || raw.trim() === "")) {
      missingRequired.push(field.label);
      continue;
    }

    if (typeof raw !== "string") continue;

    // Enforce max length
    const trimmed = raw.trim().slice(0, field.maxLen);

    // Special validation for email
    if (field.key === "email") {
      const email = normalizeOneLine(trimmed);
      if (!isValidEmail(email)) {
        return NextResponse.json({ error: "Invalid email" }, { status: 400 });
      }
      emailData.push({ label: field.label, value: escapeHtml(email) });
      continue;
    }

    // Message can have newlines, but still escape HTML
    if (field.key === "message") {
      const safe = escapeHtml(trimmed).replace(/\n/g, "<br/>");
      emailData.push({ label: field.label, value: safe });
      continue;
    }

    // Everything else: normalize and escape
    const safe = escapeHtml(normalizeOneLine(trimmed));
    if (safe) emailData.push({ label: field.label, value: safe });
  }

  return { missingRequired, emailData };
};

export async function GET() {
  return NextResponse.json({ message: "Hello API is working" });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { missingRequired, emailData } = validatePayload(body);

    if (missingRequired?.length) {
      const piece = missingRequired.length === 1 ? "is" : "are";
      const errroMessage = `${missingRequired.join(", ")} ${piece} missing`;

      return NextResponse.json(
        {
          status: "error",
          message: errroMessage,
        },
        { status: 400 },
      );
    }

    const email = emailTemplate(body.serviceName, emailData);

    sgMail.setApiKey(process.env.SEND_GRID_KEY!);

    const msg = {
      to: TO_EMAILS,
      from: {
        name: FROM_NAME,
        email: FROM_EMAIL,
      },
      subject: body.serviceName,
      text: "Mac Safety",
      html: email,
    };

    const status = await sgMail.send(msg);
    return NextResponse.json({ status, message: "Email sent" });
  } catch (error) {
    return NextResponse.json({ status: "Invalid inquiry data", error });
  }
}

// app/api/sendgrid/route.ts
// ✅ Hardened SendGrid handler: whitelist fields, sanitize, rate-limit (basic), origin check, safe subject
// Works on Next.js App Router (route.ts)

// import { NextResponse } from "next/server";
// import sgMail from "@sendgrid/mail";
// import { emailTemplate } from "../emailtemplate";

// // --- Config ---
// const ALLOWED_ORIGINS = [
//   "https://www.macsafety.com",
//   "https://macsafety.com",
//   // add staging domains if you use them:
//   // "https://staging.macsafety.com",
// ];

// const TO_EMAILS = [
//   "kevin@macsafety.us",
//   "chris@macsafety.us",
//   "hamzajamil.easycode@gmail.com",
// ];

// const FROM_EMAIL = "nixn@macintel.io";
// const FROM_NAME = "MacSafety";

// // Whitelist only the fields you expect from the form.
// // Add/remove keys to match your real forms.
// const ALLOWED_FIELDS: Array<{
//   key: string;
//   label: string;
//   maxLen: number;
//   required?: boolean;
// }> = [
//   { key: "name", label: "Name", maxLen: 120, required: true },
//   { key: "email", label: "Email", maxLen: 254, required: true },
//   { key: "company", label: "Company", maxLen: 160 },
//   { key: "industry", label: "Industry", maxLen: 120 },
//   { key: "serviceName", label: "Service", maxLen: 120 },
//   { key: "message", label: "Message", maxLen: 2000 },
//   { key: "requestType", label: "Request Type", maxLen: 30 },
//   { key: "platform", label: "Platform", maxLen: 30 },
// ];

// // Optional: allow a form type so you can distinguish which form submitted.
// // But do NOT use it directly as subject without validation.
// const ALLOWED_TYPES = new Set(["service", "contact", "Software Service", "demo"]);

// // --- Helpers ---
// function escapeHtml(input: string): string {
//   return input
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#39;");
// }

// function normalizeOneLine(input: string): string {
//   // Prevent header injection & weird control chars
//   return input.replace(/[\r\n\t]+/g, " ").trim();
// }

// function isValidEmail(email: string): boolean {
//   // Simple validation; enough for security + sanity
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// // Basic in-memory rate limit (best effort).
// // NOTE: This only helps within a single Node process. Use Cloudflare rate limiting + Turnstile for real protection.
// const RL_WINDOW_MS = 60_000;
// const RL_MAX_REQ = 10;
// const rateMap: Map<string, { count: number; resetAt: number }> = new Map();

// function rateLimit(ip: string): { ok: boolean; retryAfterSec?: number } {
//   const now = Date.now();
//   const entry = rateMap.get(ip);

//   if (!entry || now > entry.resetAt) {
//     rateMap.set(ip, { count: 1, resetAt: now + RL_WINDOW_MS });
//     return { ok: true };
//   }

//   if (entry.count >= RL_MAX_REQ) {
//     const retryAfterSec = Math.ceil((entry.resetAt - now) / 1000);
//     return { ok: false, retryAfterSec };
//   }

//   entry.count += 1;
//   rateMap.set(ip, entry);
//   return { ok: true };
// }

// function getClientIp(request: Request): string {
//   // Cloudflare / proxies commonly send CF-Connecting-IP.
//   // Fallback to X-Forwarded-For first IP.
//   const cfIp = request.headers.get("cf-connecting-ip");
//   if (cfIp) return cfIp;

//   const xff = request.headers.get("x-forwarded-for");
//   if (xff) return xff.split(",")[0].trim();

//   return "unknown";
// }

// // --- Route Handlers ---
// export async function GET() {
//   return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
// }

// export async function POST(request: Request) {
//   try {
//     // 1) Origin check (prevents most cross-site abuse; not perfect but useful)
//     const origin = request.headers.get("origin");
//     if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
//       return NextResponse.json({ error: "Forbidden" }, { status: 403 });
//     }

//     // 2) Rate limit (best effort)
//     const ip = getClientIp(request);
//     const rl = rateLimit(ip);
//     if (!rl.ok) {
//       return new NextResponse("Too Many Requests", {
//         status: 429,
//         headers: { "Retry-After": String(rl.retryAfterSec ?? 60) },
//       });
//     }

//     // 3) Parse JSON safely
//     const contentType = request.headers.get("content-type") || "";
//     if (!contentType.includes("application/json")) {
//       return NextResponse.json(
//         { error: "Invalid content type" },
//         { status: 415 },
//       );
//     }

//     const body = (await request.json()) as Record<string, unknown>;

//     // Optional type
//     const typeRaw = typeof body.type === "string" ? body.type : "service";
//     const formType = ALLOWED_TYPES.has(typeRaw) ? typeRaw : "service";

//     // 4) Validate + sanitize only whitelisted fields
//     const missingRequired: string[] = [];

//     const emailData: Array<{ label: string; value: string }> = [];

//     for (const field of ALLOWED_FIELDS) {
//       const raw = body[field.key];

//       if (field.required && (typeof raw !== "string" || raw.trim() === "")) {
//         missingRequired.push(field.label);
//         continue;
//       }

//       if (typeof raw !== "string") continue;

//       // Enforce max length
//       const trimmed = raw.trim().slice(0, field.maxLen);

//       // Special validation for email
//       if (field.key === "email") {
//         const email = normalizeOneLine(trimmed);
//         if (!isValidEmail(email)) {
//           return NextResponse.json({ error: "Invalid email" }, { status: 400 });
//         }
//         emailData.push({ label: field.label, value: escapeHtml(email) });
//         continue;
//       }

//       // Message can have newlines, but still escape HTML
//       if (field.key === "message") {
//         const safe = escapeHtml(trimmed).replace(/\n/g, "<br/>");
//         emailData.push({ label: field.label, value: safe });
//         continue;
//       }

//       // Everything else: normalize and escape
//       const safe = escapeHtml(normalizeOneLine(trimmed));
//       if (safe) emailData.push({ label: field.label, value: safe });
//     }

//     if (missingRequired.length > 0) {
//       return NextResponse.json(
//         { error: `Missing required fields: ${missingRequired.join(", ")}` },
//         { status: 400 },
//       );
//     }

//     // 5) Build email on server ONLY (no template/subject from client)
//     const subject = `New ${formType.toUpperCase()} inquiry – MacSafety`;
//     const html = emailTemplate(subject, emailData);

//     // 6) Send via SendGrid
//     const apiKey = process.env.SEND_GRID_KEY;
//     if (!apiKey) {
//       return NextResponse.json(
//         { error: "Server misconfiguration" },
//         { status: 500 },
//       );
//     }

//     sgMail.setApiKey(apiKey);

//     const msg = {
//       to: TO_EMAILS,
//       from: { name: FROM_NAME, email: FROM_EMAIL },
//       subject,
//       text: `New inquiry received (${formType}).`, // plain fallback
//       html,
//     };

//     await sgMail.send(msg);

//     return NextResponse.json({ status: "success", message: "Email sent" });
//   } catch (err) {
//     // Avoid returning raw error object to client (can leak details)
//     return NextResponse.json(
//       { error: "Invalid inquiry data" },
//       { status: 400 },
//     );
//   }
// }
