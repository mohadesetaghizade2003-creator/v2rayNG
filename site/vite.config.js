import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The Base44 preview proxy forwards the sandbox host in the Host header
// (e.g. 3000-<sandbox-id>.<domain>), and the sandbox id changes whenever the
// environment is recreated. Vite refuses unknown hosts, so the allowlist is
// extended only inside preview mode and only with the rotating wildcard domain.
const previewHosts = [];
if (process.env.BASE44_PREVIEW_MODE === '1' && process.env.BASE44_SANDBOX_HOST_DOMAIN) {
  previewHosts.push(`.${process.env.BASE44_SANDBOX_HOST_DOMAIN}`);
}

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts: previewHosts.length
      ? ['localhost', '127.0.0.1', ...previewHosts]
      : undefined,
    // Same-origin API: the contact form posts to /api, proxied to the api service.
    proxy: {
      '/api': { target: process.env.API_URL || 'http://127.0.0.1:4000' },
    },
  },
});
