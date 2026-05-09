/**
 * Iz PNG-a u assets pravi public/lukom-logo.png (+ favicon/PWA).
 * Tekst u headeru je u Layout.jsx — ovde je SAMO ikona brojača.
 * Ako izvor ima ravnu crnu pozadinu, skida se (bez diranja narandžastog brojača).
 */
import sharp from "sharp";
import { copyFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outPath = join(root, "public", "lukom-logo.png");
const outGaugeSrc = join(root, "public", "lukom-gauge-source.png");
const outFavicon = join(root, "public", "favicon-lukom.png");

/** Trenutni Adobe export — samo logo, bez teksta */
const ASSET_LOGO = join(
  "C:",
  "Users",
  "Admin",
  ".cursor",
  "projects",
  "c-Users-Admin-Lukomprojekat",
  "assets",
  "c__Users_Admin_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Adobe_Express_-_file-d8888973-2233-4457-bef4-ee72b20c328d.png"
);

const SRC_CANDIDATES = [ASSET_LOGO, outGaugeSrc];

const src = SRC_CANDIDATES.find((p) => existsSync(p));
if (!src) {
  console.error("Nema PNG izvora (Adobe assets ili public/lukom-gauge-source.png).");
  process.exit(1);
}

function stripFlatBlackBackground(data) {
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    if (a < 4) continue;

    const maxC = Math.max(r, g, b);
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    const sat = maxC < 1 ? 0 : (maxC - Math.min(r, g, b)) / maxC;

    if (maxC <= 52 && lum <= 56) {
      data[i + 3] = 0;
      continue;
    }
    if (maxC <= 68 && lum <= 62 && sat < 0.07) {
      const fade = Math.max(0, Math.min(1, (maxC - 52) / 16));
      data[i + 3] = Math.round(a * fade);
    }
  }
}

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

stripFlatBlackBackground(data);

await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png({ compressionLevel: 9 })
  .toFile(outPath);

copyFileSync(outPath, outGaugeSrc);

const opts = { fit: "inside", withoutEnlargement: true };
await sharp(outPath).ensureAlpha().resize(48, 48, opts).png().toFile(outFavicon);
await sharp(outPath)
  .ensureAlpha()
  .resize(192, 192, opts)
  .png()
  .toFile(join(root, "public", "pwa-192.png"));
await sharp(outPath)
  .ensureAlpha()
  .resize(512, 512, opts)
  .png()
  .toFile(join(root, "public", "pwa-512.png"));

const meta = await sharp(outPath).metadata();
console.log("OK:", outPath, `${meta.width}x${meta.height}`);
