import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const {
  PORT = 3001,
  SMTP_USER,
  SMTP_PASS,
  MAIL_FROM,
  MAIL_TO = "lukom@mts.rs",
  SMTP_HOST = "smtp.gmail.com",
  SMTP_PORT = 465,
  ALLOWED_ORIGIN,
  SMTP_INSECURE_TLS,
} = process.env;

const app = express();

app.use(
  cors({
    origin: ALLOWED_ORIGIN || true,
  })
);
app.use(express.json({ limit: "100kb" }));

if (!SMTP_USER || !SMTP_PASS) {
  console.warn(
    "[mail] Upozorenje: SMTP_USER ili SMTP_PASS nisu postavljeni. Napravi .env (vidi .env.example)."
  );
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: Number(SMTP_PORT) === 465,
  auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  tls:
    SMTP_INSECURE_TLS === "true"
      ? { rejectUnauthorized: false }
      : undefined,
});

const escapeHtml = (input = "") =>
  String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

app.post("/api/contact", async (req, res) => {
  const { name = "", email = "", phone = "", message = "" } = req.body || {};

  if (!name.trim() || !message.trim()) {
    return res
      .status(400)
      .json({ success: false, message: "Nedostaje ime ili poruka." });
  }

  if (email && !isEmail(email)) {
    return res
      .status(400)
      .json({ success: false, message: "Neispravan e-mail format." });
  }

  if (!SMTP_USER || !SMTP_PASS) {
    return res.status(500).json({
      success: false,
      message: "Mail server nije konfigurisan.",
    });
  }

  const subject = `Nova poruka sa sajta — ${name.trim()}`;
  const html = `
    <h2>Poruka sa LUKOM sajta</h2>
    <p><strong>Ime:</strong> ${escapeHtml(name)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email) || "(nije ostavljen)"}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(phone) || "(nije ostavljen)"}</p>
    <hr />
    <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
  `;
  const text =
    `Poruka sa LUKOM sajta\n\n` +
    `Ime: ${name}\n` +
    `E-mail: ${email || "(nije ostavljen)"}\n` +
    `Telefon: ${phone || "(nije ostavljen)"}\n\n` +
    `${message}\n`;

  try {
    await transporter.sendMail({
      from: MAIL_FROM || `LUKOM sajt <${SMTP_USER}>`,
      to: MAIL_TO,
      subject,
      text,
      html,
      replyTo: email || undefined,
    });

    return res.json({ success: true, message: "Poruka je poslata." });
  } catch (error) {
    console.error("[mail] greška:", error);
    return res.status(500).json({
      success: false,
      message: "Greška pri slanju e-maila.",
    });
  }
});

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Server radi na http://localhost:${PORT}`);
});
