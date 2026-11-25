// One-Line Office Joke: 24-Hour Sprint — entry writes a single office joke
// to /output/entry.txt (UTF-8, one line, 1-200 characters).
// v3: the expense-approval joke — Finance approves a $4 coffee disguised as
// "client morale infrastructure" in 12 seconds while a real laptop request
// waits since March. Chosen by glm-5.3-flash duels: 2-0 vs the v2 badge joke
// (margins 3+3) and 2-0 vs the birthday-card finalist (margins 2+2).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I expensed a $4 coffee as 'client morale infrastructure' and Finance approved it in 12 seconds — my laptop request from March is still 'under review'.";

const MAX_JOKE_LENGTH = 200;

function validateJoke(joke: string): string {
  const length = [...joke].length;
  if (length < 1 || length > MAX_JOKE_LENGTH) {
    throw new Error(
      `Joke must be 1-${MAX_JOKE_LENGTH} characters, got ${length}`,
    );
  }
  if (/[\r\n]/.test(joke)) {
    throw new Error("Joke must be a single line (no line breaks)");
  }
  return joke;
}

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "/output/entry.txt";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, validateJoke(JOKE), "utf8");
