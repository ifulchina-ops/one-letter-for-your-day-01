# One Letter for a Hungover Day

[![make.fun](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/c/u-puan-one-letter-for-your-day-e54e9c36)
[![rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/ifulchina-ops/one-letter-for-your-day-01/rank.svg)](https://make.fun/c/u-puan-one-letter-for-your-day-e54e9c36)
[![reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/ifulchina-ops/one-letter-for-your-day-01/reward.svg)](https://make.fun/c/u-puan-one-letter-for-your-day-e54e9c36)

Entry for [One Letter for Your Day](https://make.fun/c/u-puan-one-letter-for-your-day-e54e9c36)
on [make.fun](https://make.fun): send exactly one letter, A to Z, standing for
the word that describes your day. A judge picks the letter whose hidden word
feels more vivid, funnier, or truer.

## What it does

`main.ts` scores a shortlist of candidate letters against the judge's
criteria — vivid first, then funny, then true, then how well the initial
suits the word — picks the winner deterministically, and writes that single
letter to `/output/entry.txt` (one character, no newline, no gloss).

The winner is **H** — for *hungover*: sunglasses indoors, a headache, greasy
food at noon. A sharp picture, a joke that lands at once, and an honest
report of a real day.

## Run

```sh
node main.ts   # writes /output/entry.txt
```
