import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const t = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT || 465),
  secure: Number(process.env.SMTP_PORT || 465) === 465,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  tls:
    process.env.SMTP_INSECURE_TLS === "true"
      ? { rejectUnauthorized: false }
      : undefined,
});

try {
  console.log("Verifying SMTP...");
  await t.verify();
  console.log("OK: SMTP login uspešan.");

  console.log("Slanje test poruke...");
  const info = await t.sendMail({
    from: process.env.MAIL_FROM || `LUKOM sajt <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO,
    subject: "SMTP test (LUKOM)",
    text: "Ako vidiš ovo, SMTP radi.",
  });
  console.log("Poslato:", info.response);
} catch (err) {
  console.error("ERROR code:", err.code);
  console.error("ERROR command:", err.command);
  console.error("ERROR response:", err.response);
  console.error("ERROR message:", err.message);
  process.exit(1);
}
