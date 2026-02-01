import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    console.log("ENV LOADED:", !!process.env.EMAIL_PASSWORD);

    const {
      name,
      email,
      phone,
      message,
      city,
      subject,
    } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "mail.zamexo.in",
      port: 587,
      secure: false,
      auth: {
        user: "info@zamexo.in",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"ZAMEXO Website" <info@zamexo.in>`,
      to: "info@zamexo.in",
      replyTo: email,
      subject: subject || "New Website Enquiry",
      html: `
        <h3>New Lead</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>City: ${city}</p>
        <p>Message: ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("SMTP ERROR:", err);
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
