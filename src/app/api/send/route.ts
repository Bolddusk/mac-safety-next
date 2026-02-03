export {}
// export const runtime = "nodejs";

// import { NextResponse } from "next/server";
// import sgMail from "@sendgrid/mail";

// export async function GET() {
//   return NextResponse.json({ message: "Hello API is working" });
// }

// export async function POST(request: Request) {
//   try {
//     // const { subject, template, text } = await request.json();

//     // sgMail.setApiKey(process.env.SEND_GRID_KEY!);

//     // console.log({ subject, text });

//     // const msg = {
//     //   to: [
//     //     "kevin@macsafety.us",
//     //     "chris@macsafety.us",
//     //     "hamzajamil.easycode@gmail.com",
//     //   ],
//     //   from: {
//     //     name: "MacSafety",
//     //     email: "nixn@macintel.io",
//     //   },
//     //   subject,
//     //   text,
//     //   html: template,
//     // };

//     // const status = await sgMail.send(msg);
//     return NextResponse.json({ status: "success", message: "Email sent" });
//   } catch (error) {
//     return NextResponse.json({ status: "Invalid inquiry data", error });
//   }
// }
