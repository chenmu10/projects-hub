---
title: Tel Aviv Parking Lots
description: Live parking-lot availability for Tel Aviv's Ahuzot HaHof lots, on a map.
status: live
started: 2026-08
tech: [JavaScript, Leaflet, MapLibre, Vercel]
liveUrl: https://tlv-parking.vercel.app/
repo: chenmu10/tel-aviv-parking-map
cover: /covers/tel-aviv-parking-lots.jpg
order: 2
titleHe: חניוני אחוזת החוף
taglineHe: באיזה חניון בתל אביב יש עכשיו מקום?
icon: /icons/tel-aviv-parking-lots.png
screenshot: /screens/tel-aviv-parking-lots.jpg
---

A static site showing live availability for Tel Aviv's Ahuzot HaHof coastal
parking lots, color-coded by status (available / few spaces / full / status unknown).
Hebrew-first UI.

## What it does

- Live map with color-coded status pins and a resident-discount badge where a
  discount applies
- Each popup shows address, status, freshness (with a stale-data warning),
  tariffs, capacity, and the 3 nearest not-full lots
- One-tap navigation via Waze or Google Maps, and shareable `#lot=<id>` deep links
- Freshness pill with manual refresh and an explicit outage state

## How it's built

No build step at all — plain HTML, CSS, and native ES modules served as-is
from Vercel, with Leaflet/MapLibre for the map. The availability data
comes from the city's public GIS feed.
