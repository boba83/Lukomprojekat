import nodemailer from "nodemailer";

const escapeHtml = (input = "") =>
  String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

let transporter;
function getTransporter() {
  if (transporter) return transporter;
  const port = Number(process.env.SMTP_PORT || 465);
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return transporter;
}

async function readJson(req) {
  if (req.body && typeof req.body === "object") return req.body;
  return await new Promise((resolve) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        resolve({});
      }
    });
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed." });
  }

  const body = await readJson(req);
  const { name = "", email = "", phone = "", message = "" } = body || {};

  if (!String(name).trim() || !String(message).trim()) {
    return res
      .status(400)
      .json({ success: false, message: "Nedostaje ime ili poruka." });
  }

  if (email && !isEmail(email)) {
    return res
      .status(400)
      .json({ success: false, message: "Neispravan e-mail format." });
  }

  const { SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO } = process.env;

  if (!SMTP_USER || !SMTP_PASS) {
    return res.status(500).json({
      success: false,
      message: "Mail server nije konfigurisan.",
    });
  }

  const subject = `Nova poruka sa sajta — ${String(name).trim()}`;
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
    await getTransporter().sendMail({
      from: MAIL_FROM || `LUKOM sajt <${SMTP_USER}>`,
      to: MAIL_TO || "lukom@mts.rs",
      subject,
      text,
      html,
      replyTo: email || undefined,
    });
    return res.status(200).json({ success: true, message: "Poruka je poslata." });
  } catch (error) {
    console.error("[mail] greška:", error);
    return res.status(500).json({
      success: false,
      message: "Greška pri slanju e-maila.",
    });
  }
}
