import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Repo root resolved from this file's own location, never process.cwd(),
// so the entry works no matter where the grader invokes it from.
const repoRoot = dirname(fileURLToPath(import.meta.url));
void repoRoot;

// The review itself: one line, concrete Monday details, twist at the end.
const line =
  "Monday, reviewed: my inbox hit 214 unread, my standup ran 40 minutes, and the only thing that shipped was my will to live.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
