# SparkClean Home Services

A responsive home cleaning services website built with React, TypeScript, and Vite. Business contact details and the service area are centralized in `src/config.ts`.

## Run locally

```sh
pnpm install
pnpm dev
```

Create a production build with `pnpm build`, then preview it with `pnpm preview`.

## Deploy on Render

For the Render Node web service, set the Build Command to:

```sh
pnpm install --frozen-lockfile --prod=false && pnpm run build
```

Set the Start Command to `pnpm exec vite preview --host 0.0.0.0 --port $PORT`. The root `render.yaml` contains these settings. The build also creates page entry files so direct visits to `/services`, `/about`, `/contact`, and `/privacy` work. If your Render service is not managed by a Blueprint, update its Build and Start Commands in the Render dashboard.

## Before launch

- Replace the sample phone, email, service area, and social URLs in `src/config.ts`.
- Replace the sample testimonial and confirm service availability and copy.
- The quote form validates fields and shows a demo confirmation, but does not transmit or store submissions. Connect it to a form service or API before accepting inquiries.
- Update the starter privacy policy to fit the real business and jurisdiction.
- The site uses Pexels-hosted photos and Google Fonts. Verify usage rights and consider hosting optimized images locally before launch.
- Configure hosting rewrites so `/services`, `/about`, `/contact`, and `/privacy` serve `index.html` for direct visits.
