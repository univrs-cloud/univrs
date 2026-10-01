# univrs

Presentation website and blog for univrs and virgoOS, built with [Astro](https://astro.build) and published at [univrs.cloud](https://univrs.cloud).

## Development

```sh
npm install
npm run dev
```

## Languages

English is served at the root and Romanian under `/ro/`. Every page exists in both, and each links to its translation with `hreflang`.

- `src/data/home/` holds the home page copy, one file per language.
- `src/data/ui.ts` holds the navigation, blog and error page strings.

## Blog

Posts are Markdown files in `src/content/blog/<language>/`. A post and its translation share the same file name, which is also the address: `src/content/blog/ro/what-virgoos-is.md` is published at `/ro/blog/what-virgoos-is/`.

```md
---
title: What virgoOS is, and what runs on it
description: One or two sentences, shown in the list, in search results and when the post is shared.
pubDate: 2026-10-01
updatedDate: 2026-10-08
image: ../../../assets/blog/dashboard.png
imageAlt: What the image shows, for people who cannot see it.
tags:
  - virgoOS
draft: false
---
```

`updatedDate`, `image`, `imageAlt`, `tags` and `draft` are optional. The image is the post's feature image: it is shown under the title, on the post's card in the lists and when the post is shared. Images live in `src/assets/blog/`. A draft shows up in `npm run dev` and is left out of the published site.

## Search engines and language models

The build generates these alongside the pages:

- `sitemap-index.xml` and `robots.txt`.
- `rss.xml` and `ro/rss.xml`.
- `llms.txt` and `llms-full.txt`, with Romanian versions under `/ro/`. They are written from the same copy as the home page and from the posts.
- A Markdown version of every post, at the post's address with `.md` in place of the trailing slash.
- A share image for each language, and for each post without a feature image, under `/og/`.

Every page carries its canonical address, Open Graph tags and JSON-LD.

## Deployment

Every push to `main` builds and deploys to GitHub Pages through `.github/workflows/deploy.yml`. In the repository settings, **Pages** has to use **GitHub Actions** as its source, and `univrs.cloud` has to point to GitHub Pages.
