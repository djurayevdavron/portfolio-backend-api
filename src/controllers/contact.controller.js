import nodemailer from "nodemailer";

const escapeHtml = (unsafe) => {
  if (!unsafe) return "";
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export const sendContactEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // 1. Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields (name, email, subject, message) are required",
      });
    }

    const trimmedName = String(name).trim();
    const trimmedEmail = String(email).trim();
    const trimmedSubject = String(subject).trim();
    const trimmedMessage = String(message).trim();

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      return res.status(400).json({
        success: false,
        message: "Fields cannot be empty or whitespace only",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address format",
      });
    }

    // 2. Nodemailer Configuration
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // 3. Send email with sanitized HTML and safe plain text fallback
    await transporter.sendMail({
      from: `"${escapeHtml(trimmedName)}" <${process.env.SENDER_EMAIL}>`,
      replyTo: trimmedEmail,
      to: process.env.SENDER_EMAIL,
      subject: `Portfolio Contact: ${trimmedSubject}`,
      text: `New Portfolio Message\n\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nSubject: ${trimmedSubject}\n\nMessage:\n${trimmedMessage}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(trimmedEmail)}">${escapeHtml(trimmedEmail)}</a></p>
        <p><strong>Subject:</strong> ${escapeHtml(trimmedSubject)}</p>
        <hr />
        <p style="white-space: pre-wrap;">${escapeHtml(trimmedMessage)}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    // 4. Safe server logging (without exposing secrets to client)
    console.error("Contact email sending error:", error.message || error);

    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
};
