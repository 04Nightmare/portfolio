"use server";

import nodemailer from "nodemailer";

export async function sendMail(formData: {
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}) {
  try {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptionsToMe = {
        from: `"${formData.name}" <${process.env.SMTP_USERNAME}>`,
        to: process.env.MAIL_RECEIVER_ADDRESS,
        replyTo: formData.email,
        subject: formData.subject,
        text: `
            Name: ${formData.name}
            Email: ${formData.email}
            Mobile: ${formData.mobile}
            Message: ${formData.message}
        `,
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Mobile:</strong> ${formData.mobile}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message}</p>
        `,
    }


    const mailOptionsToClient = {
        from: `"Samannyo Pal" <${process.env.SMTP_USERNAME}>`,
        to: formData.email,
        subject: formData.subject,
        text: `
            Name: ${formData.name}
            Email: ${formData.email}
            Mobile: ${formData.mobile}
            Message: ${formData.message}
        `,
        html: `
            <h2>Thank You for contacting Me.</h2>
            <p style="font-size: 15px">Hey <strong>${formData.name}</strong>,</p>
            <p style="font-size: 15px">Thank you for taking your time to check out my website and provide me with your valuable feedback. I truly appreaciate you taking the time to reach out.</p>
            <p style="font-size: 20px"><strong>Copy of the form you filled</strong></p>
            <p><strong style="font-size: 18px">Name:</strong> ${formData.name}</p>
            <p><strong style="font-size: 18px">Email:</strong> ${formData.email}</p>
            <p><strong style="font-size: 18px">Mobile:</strong> ${formData.mobile}</p>
            <p><strong style="font-size: 18px">Subject:</strong> ${formData.subject}</p>
            <p><strong style="font-size: 18px">Message:</strong></p>
            <p>${formData.message}</p>
            <p style="font-size: 18px; margin-top: 70px">Thank you again. Hope to see u in next few days</p>
            <p>Warm regards,</p>
            <p><strong>Samannyo Pal</strong></p>
        `,
    }

    await transporter.sendMail(mailOptionsToMe);
    await transporter.sendMail(mailOptionsToClient);
    
    //console.log("Email sent:", info.messageId);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}