"use strict";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method === "POST") {
    const formData = await req.formData();
    const _subject = formData.get("subject");
    const _text = formData.get("text");
    const _to = formData.get("to");

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_EMAIL_USERNAME,
        pass: process.env.NEXT_EMAIL_PASSWORD,
      },
    });

    // Send email
    try {
      console.log({
        from: process.env.NEXT_EMAIL_USERNAME,
        to: _to as string,
        subject: _subject as string,
        text: _text as string,
      });
      await transporter.sendMail({
        from: process.env.NEXT_EMAIL_USERNAME,
        to: _to as string,
        subject: _subject as string,
        text: _text as string,
      });

      return NextResponse.json({
        status: 200,
        message: "Email sent successfully",
      });
    } catch (error) {
      console.log(error);
      return NextResponse.json({
        status: 500,
        message: "Error sending email: " + error,
      });
    }
  } else {
    return NextResponse.json({
      status: 405,
      message: "Method not allowed",
    });
  }
}
