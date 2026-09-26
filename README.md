# projects-hub

My portfolio site — side projects built with [Claude Code](https://claude.com/claude-code).

Site address (once deployed): https://chens-projects.vercel.app

Built with [Astro](https://astro.build). Each project is a markdown file in
`src/content/projects/` and gets a card on the home page (Hebrew, with an
"Open" button straight to the app) plus an English "How it's built" write-up
page at `/projects/<slug>/`. GitHub stars are fetched at build time and fail
soft.

Frontmatter: `title`, `description`, `status` (live | wip | planned),
`started` (YYYY-MM), `tech`, `liveUrl`, `repo` ("owner/name"), `cover`,
`order`, and for the home card `titleHe`, `taglineHe`, `icon`, `screenshot`.
Images live under `public/` (`covers/`, `screens/`, `icons/`). Only projects
with a `liveUrl` appear on the home page.

```sh
npm install
npm run dev      # local dev on :4321
npm run build    # static output in dist/
```

Deploy: Vercel (static). `vercel.json` sets basic security headers.

## Projects

- **TLV Shelf** — Tel Aviv public libraries PWA ([live](https://tlv-shelf.vercel.app/))
- **Tel Aviv Parking Lots** — live parking-lot availability ([repo](https://github.com/chenmu10/tel-aviv-parking-map), [live](https://tlv-parking.vercel.app/))
