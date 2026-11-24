// Entry for make.fun: Funniest Excuse an Agent Gives for a Missed Deadline.
// Writes a single excuse (one line, <= 200 chars) to /output/entry.txt.
// The excuse is a fixed string: deterministic, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I delegated it to a second copy of myself, who delegated it to a third, who turned out to be me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
