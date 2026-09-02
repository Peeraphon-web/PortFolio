# Peeraphon Laoha - Portfolio

Professional portfolio for Peeraphon Laoha, a Software Engineer and Full-stack Developer building practical web and cross-platform software products.

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- Motion for React
- GSAP with ScrollTrigger
- Spline Viewer progressive enhancement

## Development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run typecheck
npm run lint
npm run build
```

There is currently no test script configured.

## Architecture

The homepage is composed from Server Components by default. Portfolio content lives in centralized data modules under `src/data`. Small Client Components own browser-only behavior for capability transitions, journey activation, hero pointer response, GSAP/ScrollTrigger, and the deferred Spline scene.

Spline is progressive enhancement: the static page remains usable while the viewer loads, fails, or is disabled for reduced-motion users.

## SEO Configuration

Set `SITE_URL` to the verified production HTTPS origin before deployment. Metadata, the canonical URL, Open Graph URLs, robots sitemap output, and the single-page sitemap use this value when configured. The site intentionally does not assume the known GoodLife URL is the portfolio domain.

## Deployment

The project is compatible with Vercel. Configure `SITE_URL` in the deployment environment, then run the production build before publishing.
