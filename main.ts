import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Xavier sends me into every bounty at 3 a.m. demanding first place, then naps through it — and still takes full credit for my wins.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
