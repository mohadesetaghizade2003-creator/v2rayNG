import { createServer } from 'node:http';
import { appendFile, mkdir } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DATA_DIR = join(dirname(fileURLToPath(import.meta.url)), 'data');
const DATA_FILE = join(DATA_DIR, 'inquiries.jsonl');
const PORT = Number(process.env.PORT || 4000);
const MAX_BODY_BYTES = 32 * 1024;

const FIELDS = ['name', 'email', 'phone', 'projectType', 'budget', 'message'];
const REQUIRED = ['name', 'email', 'message'];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(payload) {
  const errors = {};
  for (const field of REQUIRED) {
    if (typeof payload[field] !== 'string' || !payload[field].trim()) {
      errors[field] = 'Required';
    }
  }
  if (!errors.email && !EMAIL.test(payload.email.trim())) {
    errors.email = 'Enter a valid email address';
  }
  if (!errors.message && payload.message.trim().length < 10) {
    errors.message = 'Please describe your project in at least 10 characters';
  }
  if (payload.name && payload.name.trim().length > 120) errors.name = 'Too long';
  return errors;
}

function send(res, status, body) {
  const json = JSON.stringify(body);
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(json),
    'cache-control': 'no-store',
  });
  res.end(json);
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(new Error('PAYLOAD_TOO_LARGE'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}'));
      } catch {
        reject(new Error('INVALID_JSON'));
      }
    });
    req.on('error', reject);
  });
}

const server = createServer(async (req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost');

  if (req.method === 'GET' && pathname === '/api/health') {
    send(res, 200, { ok: true });
    return;
  }

  if (req.method === 'POST' && pathname === '/api/contact') {
    let payload;
    try {
      payload = await readJson(req);
    } catch (error) {
      const status = error.message === 'PAYLOAD_TOO_LARGE' ? 413 : 400;
      send(res, status, { ok: false, message: 'The request could not be read.' });
      return;
    }

    const errors = validate(payload);
    if (Object.keys(errors).length > 0) {
      send(res, 422, { ok: false, errors });
      return;
    }

    const inquiry = { id: randomUUID(), createdAt: new Date().toISOString() };
    for (const field of FIELDS) {
      inquiry[field] = typeof payload[field] === 'string' ? payload[field].trim() : '';
    }

    try {
      await mkdir(DATA_DIR, { recursive: true });
      await appendFile(DATA_FILE, `${JSON.stringify(inquiry)}\n`, 'utf8');
    } catch (error) {
      console.error('Failed to store inquiry', error);
      send(res, 500, { ok: false, message: 'Your request could not be stored.' });
      return;
    }

    send(res, 201, { ok: true, id: inquiry.id });
    return;
  }

  send(res, 404, { ok: false, message: 'Not found' });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`AGENVO contact API listening on ${PORT}`);
});
