---
title: Tel Aviv Parking Lots
description: Live parking-lot availability for Tel Aviv's Ahuzot HaHof lots, on a map.
status: live
started: 2026-08
tech: [JavaScript, Leaflet, MapLibre, GitHub Pages]
liveUrl: https://chenmu10.github.io/tel-aviv-parking-map/
repo: chenmu10/tel-aviv-parking-map
cover: /covers/tel-aviv-parking-lots.png
order: 1
---

A static site showing live availability for Tel Aviv's Ahuzot HaHof coastal
parking lots, color-coded by status (available / few spaces / full / closed).
Hebrew-first UI, built for the way people actually use it: check before you
drive, navigate with one tap.

## What it does

- Live map with color-coded status pins and a resident-discount badge per lot
- Each popup shows address, status, freshness (with a stale-data warning),
  tariffs, capacity, and the 3 nearest not-full lots
- One-tap navigation via Waze or Google Maps, and shareable `#lot=<id>` deep links
- Freshness pill with manual refresh and an explicit outage state

## How it's built

No build step at all — plain HTML, CSS, and native ES modules served as-is
from GitHub Pages, with Leaflet/MapLibre for the map. The availability data
comes from the city's public GIS feed.

*(Write-up in progress — more on the process of building this with Claude soon.)*
