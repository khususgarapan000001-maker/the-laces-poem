import { mkdirSync, writeFileSync } from "node:fs";

const poem = `Laces
May I tie your shoes?
I used to, without asking.
Now my hands shake,
and you can do it —
so I ask.
You lift your foot.
Asking is not always
the weak begging the strong.
Sometimes the strong ask
to still be allowed to give.
Your yes is the knot
that holds me.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem);
