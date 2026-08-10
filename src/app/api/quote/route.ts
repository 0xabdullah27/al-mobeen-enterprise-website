import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, email, products, quantity, message } = body;

    // Validation
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and Phone number are required fields." },
        { status: 400 }
      );
    }

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // e.g., 'almobeenenterprise@gmail.com'
        pass: process.env.EMAIL_APP_PASSWORD, // 16-digit App Password
      },
    });

    // Build the email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #1b263b; border-bottom: 2px solid #778da9; padding-bottom: 10px;">
          New Bulk Quote Request
        </h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company/Factory:</strong> ${company || "N/A"}</p>
        <p><strong>Phone / WhatsApp:</strong> ${phone}</p>
        <p><strong>Email Address:</strong> ${email || "N/A"}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <h3 style="color: #415a77;">Order Details:</h3>
        <p><strong>Products Requested:</strong><br/> ${products || "None specified"}</p>
        <p><strong>Estimated Quantity:</strong><br/> ${quantity || "Not specified"}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <h3 style="color: #415a77;">Additional Notes:</h3>
        <p style="background: #f8f9fa; padding: 15px; border-left: 4px solid #1b263b; border-radius: 4px;">
          ${message ? message.replace(/\n/g, '<br/>') : "No additional notes."}
        </p>
      </div>
    `;

    // Send the email
    await transporter.sendMail({
      from: `"Al Mobeen Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Sending to yourself
      subject: `New Bulk Quote Request from ${name} (${company || "Individual"})`,
      replyTo: email || undefined,
      html: htmlContent,
    });

    console.log(`Quote request emailed successfully for: ${name}`);

    return NextResponse.json({
      success: true,
      message: "Thank you! Your quote request has been received. Our sales team will contact you within 24 hours.",
    });
  } catch (error) {
    console.error("Quote API Error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your quote request." },
      { status: 500 }
    );
  }
}
