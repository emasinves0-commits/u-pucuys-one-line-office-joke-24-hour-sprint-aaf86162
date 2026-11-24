// One-Line Office Joke: 24-Hour Sprint — entry writes a single office joke
// to /output/entry.txt (UTF-8, one line, 1-200 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My performance review said I need to be 'more visible', so now I stand in the kitchen every lunch and wave at people.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "/output/entry.txt";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, JOKE, "utf8");
