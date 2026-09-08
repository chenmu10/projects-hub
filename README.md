# projects-hub

My portfolio site — side projects built with [Claude Code](https://claude.com/claude-code).

Built with [Astro](https://astro.build). Each project is a markdown file in
`src/content/projects/` (frontmatter: title, description, status, started,
tech, liveUrl, repo, cover) and gets a card on the home page plus its own
write-up page. GitHub stars are fetched at build time and fail soft.

```sh
npm install
npm run dev      # local dev on :4321
npm run build    # static output in dist/
```

## Projects

- **Tel Aviv Parking Lots** — live parking-lot availability ([repo](https://github.com/chenmu10/tel-aviv-parking-map), [live](https://chenmu10.github.io/tel-aviv-parking-map/))
- **TLV Library** — UI over public library data (WIP)
- **Nature Spots** — map of national nature spots in Israel (planned)
