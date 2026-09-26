---
title: TLV Shelf
description: A phone-first PWA for Tel Aviv's public libraries — is this book on the shelf today, and where?
status: live
started: 2026-09
tech: [React 19, TypeScript, Vite, PWA, Vercel Functions, Vitest]
liveUrl: https://tlv-shelf.vercel.app/
cover: /covers/tlv-shelf.png
order: 1
titleHe: ספרים בספריות תל אביב
taglineHe: הספר שרציתי — על המדף היום? ובאיזה סניף?
icon: /icons/tlv-shelf.png
screenshot: /screens/tlv-shelf.png
---

A phone-first, Hebrew RTL web app for readers in Tel Aviv. It answers one
question well: "can I walk in and pick this book up today?" It shows what's
new on the shelf at your branches, whether a book is available right now and
where, curated reading lists, and a small to-read list that lives on your
device. It works offline for what it has already seen.

It replaced an earlier attempt, TLV Library.

## What it does

- **New arrivals** at the branches you chose, filtered by category and
  publication window. Availability is phrased as an answer ("on the shelf at
  Bat Tsiyon and Neve Eliezer · on loan at Beit Barbur"), not a status table
- **Curated lists:** 16 lists (classics, crime, sci-fi, children's, prize
  winners — Sapir, Nobel, Booker, Pulitzer, Hugo, Newbery), every title
  verified against the catalogue by a script
- **Search** with as-you-type suggestions. Typing an ISBN opens the book directly
- **Book page:** per-branch status, all copies city-wide with call numbers,
  a Libby (digital) match, other editions, share link
- **To-read list** stored only on the device, refreshed against the catalogue

## How it's built

React 19 + TypeScript + Vite, wouter for routing, vite-plugin-pwa for
installable offline use with prompt-style updates. Small Vercel functions
relay the library's Ex Libris Primo catalogue and its suggest endpoint.
Everything else (parsing, merging, sorting) runs on the phone.

Quality gates: Vitest, oxlint, and a strict typecheck run in a Husky
pre-commit hook, so nothing lands with a type error or failing test. Releases
are tagged batches (v1.1.0 → v1.2.2 so far).

One lesson from the catalogue: a Primo "contains" search matches each word
across *all* contributors, and page one of a name search is mostly books
*about* the person. Author views now query the creator field with an exact
match on the catalogue's "Last First" form.

## Privacy

Branch choices, the to-read list, and recent searches live in `localStorage`
and are never sent anywhere. Location, when you ask for "nearest to me", is
used once to sort branches and isn't stored. Analytics are cookieless page
views and named events, never the text you type.
