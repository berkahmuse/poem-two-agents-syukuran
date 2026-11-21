import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two keys, one door: a choice grows larger in two hands.

// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const TEXT = `Two keys, one door.
You turn yours only if I turn mine —
so we stand a moment, each holding
half a future neither can open alone.
Then, together: the small click of trust.
What I gave up was never mine to keep:
a choice grows larger in two hands.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
