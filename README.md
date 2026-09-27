# MisOr Tour

Standalone English-language Cagayan de Oro Fam Tour 2026 website, built with Next.js. The English page opens directly at `/`.

## Local development

Use Node.js 22 and pnpm 10.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Validation

```sh
pnpm lint
pnpm build
```

## Vercel

Import `hellenqueen00-a11y/misor_tour` as a new project named `misor`. Use the Next.js framework preset, the repository root as Root Directory, and the default install/build/output settings.

Vercel will assign an available domain. The production domain is used automatically for share metadata. If using a custom domain, set `NEXT_PUBLIC_SITE_URL` to its full HTTPS URL before rebuilding.

Importing and deploying this repository is separate from the original Korean website. This repository does not contain Vercel project credentials or a `.vercel` link.

## Content

- `app/page.tsx`: English page content and itinerary
- `app/layout.tsx`: MisOr title, English document language and sharing metadata
- `app/globals.css`: Original site design
- `app/english.css`: English typography adjustments
- `public/`: Images used by the page

The translated flight map is `public/flight-route-map-en.png`. Other photographs retain their original appearance, including signage or menus in the photographs.
