# Base44 development environment — AGENVO studio website

The AGENVO marketing site lives in [`../site`](../site) and is served by
`docker-compose.base44.yml` at the repository root. It is a standalone Vite + React
front end plus a small Node contact API; nothing else in this repository (the Android
app) is involved.

## What runs

| Service | Image | Port | Purpose |
| --- | --- | --- | --- |
| `web` | `node:22-bookworm-slim` (source bind-mounted) | host `3000` | Vite dev server with hot reload |
| `api` | `node:22-bookworm-slim` (source bind-mounted) | internal `4000` | `POST /api/contact`, `GET /api/health` |

`site/` is mounted into both services, so every edit is live — there is no image build
step and no prebuilt bundle involved. `npm install` runs on container start against the
committed `site/package-lock.json`; `node_modules` lives in the `site_node_modules`
volume so restarts stay fast.

## Commands

```sh
docker compose -f docker-compose.base44.yml up -d --build   # start
docker compose -f docker-compose.base44.yml logs -f web     # dev-server log
docker compose -f docker-compose.base44.yml exec -T web npm run build   # production build check
docker compose -f docker-compose.base44.yml down            # stop
```

The contact form posts to `/api/contact`; Vite proxies `/api` to the `api` service, so the
site stays single-origin (no CORS, cookies keep working). Inquiries are appended as JSON
lines to `site/server/data/inquiries.jsonl`, which is git-ignored and lives on the bind
mount, so they survive a container restart.

## Sandbox-specific behaviour

`BASE44_PREVIEW_MODE` is passed through to the `web` service as a bare Compose entry (the
platform sets it to `1` in the sandbox). It is used in exactly one place,
`site/vite.config.js`:

- **`BASE44_PREVIEW_MODE=1`** — `server.allowedHosts` is extended with
  `.${BASE44_SANDBOX_HOST_DOMAIN}` (a wildcard because the sandbox id changes on every
  recreation), so the preview proxy's Host header is accepted.
- **unset or any other value** — `allowedHosts` stays `undefined`, i.e. Vite's own default
  (localhost and IP literals). Shared configuration keeps its original behaviour.

No authentication, CSRF or TLS verification is relaxed anywhere. `HOST`/`ORIGIN` checks are
otherwise untouched, and no `BASE44_*` value is hardcoded in the repository.

## Verifying a change

1. `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/` → `200`.
2. `curl -s http://localhost:3000/api/health` → `{"ok":true}`.
3. Load the page and check the section you touched; the enquiry form can be exercised end
   to end against the local API, then remove the test line from
   `site/server/data/inquiries.jsonl`.
