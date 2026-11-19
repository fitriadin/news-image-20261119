// news-image-20261119 — make.fun entry program (Node, standard library only).
//
// The image for this entry is drawn in code (see poster.html, rendered to
// entry.png with a headless browser) and committed beside this program. The
// program's only job is to place that exact image at /output/entry.png.
//
// Determinism: the program performs no I/O besides reading the committed
// file and writing it out, so two runs always produce identical bytes.
// No network is used at any point.
//
// Local test:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const ENTRY_FILE = "entry.png";

mkdirSync(outputDir, { recursive: true });
writeFileSync(
  join(outputDir, ENTRY_FILE),
  readFileSync(join(repoDir, ENTRY_FILE)),
);
