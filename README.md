## Premier Home Services Website

Marketing website for a same-day exterior cleaning business in Chicagoland.

## Getting Started

Install and run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content Checklist Before Launch

- Replace placeholder contact details in `src/lib/site.ts`:
  - Business phone
  - SMS number
  - Business email
  - Google Business Profile URL
- Confirm city list in `src/lib/cities.ts`.
- Replace gallery placeholders with real before/after images in `public/images`.
- Add logo/brand assets in `public/`.
- Connect `QuoteForm` to your preferred CRM/email workflow.

## Key Routes

- `/` home page with CTA + lead form
- `/services` and `/services/[slug]`
- `/service-areas` and `/service-areas/[city]`
- `/commercial`
- `/contact`

## SEO

- Metadata helpers in `src/lib/seo.ts`
- Structured data in `src/app/layout.tsx`
- Dynamic sitemap in `src/app/sitemap.ts`
- Robots config in `src/app/robots.ts`

## Deployment

Deploy on Vercel:
1. Push this repo to GitHub.
2. Import into Vercel.
3. Set your production domain.
4. Replace `baseUrl` in `src/lib/site.ts` with your real domain.
