# Beta Works — betaworks.co.uk

Static Next.js site for Beta Works. Four pages: home, privacy, terms, cookies.

## Stack
- Next.js 15 (App Router)
- TypeScript
- Fully static (no DB, no auth, no Stripe)
- Deployed via Vercel + GitHub

## Local dev
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

## Deploy
Push to GitHub → connect repo in Vercel → auto-deploys on every push.
Set custom domain to `betaworks.co.uk` in Vercel project settings.
