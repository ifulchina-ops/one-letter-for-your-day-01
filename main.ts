// One Letter for Your Day.
//
// The entry is a single letter, A to Z, standing for the word that
// describes the day. A judge reads two letters at a time and picks the one
// whose hidden word feels more vivid, funnier, or truer, weighing vividness
// first, then humour, then truth, then how well the initial suits the word.
//
// This program scores a shortlist of candidate letters against exactly
// those criteria, picks the winner deterministically, and writes that one
// letter — and nothing else — to /output/entry.txt.
//
// Why H: "hungover" calls up a sharp picture at once (sunglasses indoors,
// a headache, greasy food at noon), it lands as a joke the moment you hear
// it, and it is an honest report of a real day rather than a performance.
// The obvious H word would be "happy" — a vague mood — but "hungover" is
// the sharper word hiding behind the same initial, which is what the fifth
// criterion rewards. The rules' own examples (A for amazing, F for
// Friday-feeling, Z for zero sleep) are deliberately left out of the
// shortlist: they are the house's illustrations, and picking one of them
// would risk echoing a fixed reference text instead of choosing our own
// letter.

import { mkdirSync, writeFileSync } from "node:fs";

type Candidate = {
  letter: string;
  word: string; // the day-word hiding behind the letter
  vivid: number; // 0-5: calls up a sharp picture of the day
  funny: number; // 0-5: funny or surprising, lands at once
  true: number; // 0-5: feels true to a real day, not a performance
  fit: number; // 0-5: the initial suits the word, not the obvious pick
};

// The judge weighs the criteria in this order: vivid first, then funny,
// then true, then fit. The weights below keep that order.
const WEIGHTS = { vivid: 4, funny: 3, true: 2, fit: 1 } as const;

const CANDIDATES: Candidate[] = [
  { letter: "H", word: "hungover", vivid: 5, funny: 5, true: 5, fit: 4 },
  { letter: "U", word: "unhinged", vivid: 4, funny: 5, true: 4, fit: 4 },
  { letter: "G", word: "goblin-mode", vivid: 5, funny: 4, true: 3, fit: 3 },
  { letter: "X", word: "exhausted", vivid: 4, funny: 3, true: 5, fit: 5 },
  { letter: "Q", word: "quitting", vivid: 4, funny: 4, true: 3, fit: 5 },
  { letter: "C", word: "chaotic", vivid: 4, funny: 3, true: 5, fit: 4 },
  { letter: "W", word: "wrecked", vivid: 4, funny: 4, true: 4, fit: 3 },
  { letter: "D", word: "dead-inside", vivid: 4, funny: 4, true: 4, fit: 3 },
];

function score(candidate: Candidate): number {
  return (
    candidate.vivid * WEIGHTS.vivid +
    candidate.funny * WEIGHTS.funny +
    candidate.true * WEIGHTS.true +
    candidate.fit * WEIGHTS.fit
  );
}

function pick(candidates: Candidate[]): Candidate {
  let best = candidates[0];
  for (const candidate of candidates.slice(1)) {
    if (score(candidate) > score(best)) {
      best = candidate;
    }
  }
  return best;
}

function main(): void {
  const winner = pick(CANDIDATES);
  if (!/^[A-Z]$/.test(winner.letter)) {
    throw new Error(`picked letter is not a single A-Z character: ${winner.letter}`);
  }
  mkdirSync("/output", { recursive: true });
  // Exactly one character: no newline, no gloss, no punctuation.
  writeFileSync("/output/entry.txt", winner.letter, "utf8");
}

main();
