import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { contactInfoEmail } from "./contactInfoEmail";
import { safeParseJson } from "@/lib/security";
import { downloadSchema } from "@/lib/apiSchemas";

export async function GET() {
  return NextResponse.json({ message: "Hello API is working" });
}

export async function POST(request: Request) {
  try {
    const body = await safeParseJson<Record<string, unknown>>(request);
    if (!body) {
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }

    const parsed = downloadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid inquiry data" },
        { status: 400 }
      );
    }

    const email = contactInfoEmail(parsed.data);

    // sgMail.setApiKey(process.env.SEND_GRID_KEY!);

    const msg = {
      to: ["bolddusk@gmail.com"],
      from: {
        name: "MacSafety",
        email: "nixn@macintel.io",
      },
      subject: "Download Pdf",
      text: "Mac Safety",
      html: email,
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
