export const runtime = "nodejs";

import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { emailTemplate } from "../emailtemplate";

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
    const { serviceName, ...rest } = await request.json();

    const emailData = Object.entries(rest).map((el) => ({
      label: capitalizeWords(el[0]),
      value: capitalizeWords(el[1] as string),
    }));

    const email = emailTemplate(serviceName, emailData);

    sgMail.setApiKey("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");

    const msg = {
      to: [
        "kevin@macsafety.us",
        "chris@macsafety.us",
        "hamzajamil.easycode@gmail.com",
      ],
      from: {
        name: "MacSafety",
        email: "nixn@macintel.io",
      },
      subject: serviceName,
      text: "Mac Safety",
      html: email,
    };

    const status = await sgMail.send(msg);
    return NextResponse.json({ status, message: "Email sent" });
  } catch (error) {
    return NextResponse.json({ status: "Invalid inquiry data", error });
  }
}
