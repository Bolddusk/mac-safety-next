export const runtime = "nodejs";

import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { emailTemplate } from "../emailtemplate";
import { safeParseJson } from "@/lib/security";
import { messageSchema } from "@/lib/apiSchemas";

const capitalizeWords = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

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

    const parsed = messageSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid inquiry data" },
        { status: 400 }
      );
    }

    const { serviceName, ...rest } = parsed.data;
    const emailData = Object.entries(rest)
      .filter(([, v]) => v != null && v !== "")
      .map(([key, value]) => ({
        label: capitalizeWords(key),
        value: capitalizeWords(String(value)),
      }));

    const email = emailTemplate(serviceName, emailData);

    const sendGridKey = process.env.SEND_GRID_KEY;
    if (!sendGridKey) {
      if (process.env.NODE_ENV === "development") {
        console.error("[POST /api/message] SEND_GRID_KEY is not set in .env");
      }
      return NextResponse.json(
        { message: "Something went wrong. Please try again later." },
        { status: 500 }
      );
    }
    sgMail.setApiKey(sendGridKey);

    const msg = {
      to: ["bolddusk@gmail.com"],
      from: {
        name: process.env.FROM_NAME ?? "MacSafety",
        email: process.env.FROM_EMAIL ?? "nixn@macintel.io",
      },
      subject: serviceName,
      text: "Mac Safety",
      html: email,
    };

    const status = await sgMail.send(msg);
    return NextResponse.json({ status, message: "Email sent" });
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error("[POST /api/message]", err);
    }
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
