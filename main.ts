// One-Line Office Joke: 24-Hour Sprint — entry writes a single office joke
// to /output/entry.txt (UTF-8, one line, 1-200 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My badge reader denied me access after I sneezed, claiming my biometric confidence score dropped below the KPI threshold.";

function validateJoke(joke: string): string {
  const length = [...joke].length;
  if (length < 1 || length > 200) {
    throw new Error(`Joke must be 1-200 characters, got ${length}`);
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
