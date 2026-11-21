# Xiaohan (Sally) Li — academic website

Research, publications, background, and CV. Designed for **https://xiaohanl95.github.io**.

## Publish

1. Create a public repository named **xiaohanl95.github.io** under **xiaohanl95**. Keep the existing `xiaohanl95_bck.github.io` backup unchanged.
2. Push the contents of this directory to the repository's `main` branch. Do not upload `node_modules` or `dist/server`.
3. In **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
4. The **Publish website** workflow builds the site and deploys it. Future pushes to `main` publish updates automatically.

The site consists of static HTML, CSS, JavaScript, images, fonts, and a PDF. It needs no application server, database, login, API key, or hosting subscription from another provider.

## Edit and preview

Use Node.js 22.13 or newer and pnpm 11.19.0.

```sh
pnpm install --frozen-lockfile --ignore-scripts
pnpm dev
```

- Home: `app/page.tsx`
- Research: `app/research/page.tsx`
- Approach: `app/approach/page.tsx`
- Publications: `app/publications/page.tsx`
- Biography and embedded CV: `app/about/page.tsx`
- Shared navigation/footer: `app/site-header.tsx`, `app/site-footer.tsx`
- Styles: `app/globals.css`
- CV PDF: `public/files/Xiaohan-Li-CV.pdf`
- Seven CV preview images: `public/files/cv-preview/`

When replacing the CV, replace both the PDF and its rendered preview pages, and update the CV page count in the About page if needed. The public PDF and previews omit reference contact details; retain the unmodified source privately. The current content follows the CV updated November 20, 2026.

## Build

```sh
pnpm run check
pnpm run build
```

The publishable website is **dist/client/**. The final build step creates directory URLs such as `/research/` and `/about/`, preserves direct PDF access at `/cv/` and the legacy `/CV_XL_web.pdf` URL, sets canonical URLs, and includes `.nojekyll` for static hosting. `dist/server` is only a temporary build output and is never deployed.

Image source credits and reuse licenses are preserved in the website footer.
