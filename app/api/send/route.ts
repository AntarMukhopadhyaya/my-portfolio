import { EmailTemplate } from "@/app/components/email-template";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

import { Resend } from "resend";

type ResponseData = {
  email: string;
  subject: string;
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || "";

export async function POST(
  req: NextRequest,
  res: NextApiResponse<ResponseData>
) {
  const { email, subject, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail ,
      text: subject + "\n\n" + message,
      to: ["mukhopadhyayaantar@gmail.com", email],
      subject: subject,
      react: EmailTemplate({ subject, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
