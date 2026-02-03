export {}
// export const runtime = "nodejs";

import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { safeParseJson, stripDangerousHtml } from "@/lib/security";
import { sendSchema } from "@/lib/apiSchemas";

// export async function GET() {
//   return NextResponse.json({ message: "Hello API is working" });
// }

export async function POST(request: Request) {
  try {
    const body = await safeParseJson<Record<string, unknown>>(request);
    if (!body) {
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }

    const parsed = sendSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Missing or invalid required fields" },
        { status: 400 }
      );
    }

    const { subject, template, text } = parsed.data;
    const safeHtml = stripDangerousHtml(template);

    sgMail.setApiKey(process.env.SEND_GRID_KEY!);

    const msg = {
      to: ["bolddusk@gmail.com"],
      from: {
        name: "MacSafety",
        email: "nixn@macintel.io",
      },
      subject,
      text,
      html: safeHtml,
    };

    const status = await sgMail.send(msg);
    return NextResponse.json({ status, message: "Email sent" });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
