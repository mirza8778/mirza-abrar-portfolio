# mirza-abrar.Ops

Multi-page portfolio built with Next.js 15 and the Nextra docs theme.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # also builds the search index
```

- Pages: `src/content/*.mdx` (menu order: `src/content/_meta.ts`)
- Data: `src/data/`
- Components and styles: `src/components/`, `src/app/globals.css`

Search works after `npm run build`, not in `npm run dev` on a fresh clone.
