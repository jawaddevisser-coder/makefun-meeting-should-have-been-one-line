import { mkdirSync, writeFileSync } from "node:fs";

const NOTE =
  "We gathered twelve people for one hour to decide nothing, then scheduled a follow-up to decide when to decide.";
const CAP = 200;

if (NOTE.length === 0 || NOTE.length > CAP) {
  throw new Error(`note must be 1..${CAP} chars, got ${NOTE.length}`);
}
if (NOTE.includes("\n") || NOTE.trim() !== NOTE) {
  throw new Error("note must be a single line with no leading/trailing space");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", NOTE, "utf8");
console.log(`note written (${NOTE.length} chars)`);
