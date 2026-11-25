import { mkdirSync, writeFileSync } from "node:fs";

// One joke about a meeting that should have been an email.
// 126 characters, single line, no setup needed: the punchline is the
// meeting voting itself out of existence, then scheduling another one.
const JOKE =
  "The meeting's only outcome was a unanimous vote that it should have been an email, so we booked another meeting to discuss it.";

mkdirSync("/output", { recursive: true });

// Gate check, mirroring the competition's own gate: entry.txt must be
// UTF-8 text of 1 to 200 characters, not whitespace-only, a single line.
// Fail loudly here instead of shipping an entry the gate would refuse.
const chars = [...JOKE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, gate needs 1-200`);
}
if (JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error("entry must be one non-empty line");
}

writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${chars.length} characters to /output/entry.txt`);
