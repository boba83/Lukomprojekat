/**
 * Encodes a full-res source to a lighter file for the Kategorija banner.
 * Output: public/videos/engine-top-view-854.mp4 (~480p height, H.264, faststart, no audio)
 *
 * Put source as public/videos/engine-top-view-full.mp4 (optional), else uses engine-top-view.mp4.
 * Run: npm run assets:engine-video
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dir = path.join(root, "public", "videos");
const preferred = path.join(dir, "engine-top-view-full.mp4");
const fallback = path.join(dir, "engine-top-view.mp4");
const input = fs.existsSync(preferred) ? preferred : fallback;
const output = path.join(dir, "engine-top-view-854.mp4");

let ffmpegPath;
try {
  const mod = await import("ffmpeg-static");
  ffmpegPath = mod.default;
} catch {
  console.error(
    "Missing ffmpeg-static. Run: npm install ffmpeg-static --save-dev",
  );
  process.exit(1);
}

if (!ffmpegPath || !fs.existsSync(ffmpegPath)) {
  console.error("ffmpeg binary not found.");
  process.exit(1);
}

if (!fs.existsSync(input)) {
  if (fs.existsSync(output)) {
    console.log(
      "No high-res source found; output already exists:\n ",
      output,
      "\nTo re-encode, add public/videos/engine-top-view-full.mp4 (or engine-top-view.mp4).",
    );
    process.exit(0);
  }
  console.error("No source video found. Add one of:\n ", preferred, "\n ", fallback);
  process.exit(1);
}

const args = [
  "-y",
  "-i",
  input,
  "-vf",
  "scale=854:-2",
  "-c:v",
  "libx264",
  "-crf",
  "28",
  "-preset",
  "medium",
  "-movflags",
  "+faststart",
  "-an",
  output,
];

console.log("Encoding", path.basename(input), "→", path.basename(output), "…");
const r = spawnSync(ffmpegPath, args, { stdio: "inherit" });
if (r.status !== 0) {
  process.exit(r.status ?? 1);
}

const before = fs.statSync(input).size;
const after = fs.statSync(output).size;
console.log(
  `Done. source ${(before / 1e6).toFixed(2)} MB → output ${(after / 1e6).toFixed(2)} MB`,
);
