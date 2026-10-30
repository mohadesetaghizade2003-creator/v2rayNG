#!/usr/bin/env python3
"""Sandbox preview page for v2rayNG.

v2rayNG is a native Android app: it has no web UI, so the preview port serves the
state of the sandbox APK build plus the built artifacts for download.
"""
import html
import os
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(os.environ.get("REPO_ROOT", "/src"))
BUILD_DIR = ROOT / "V2rayNG" / "app" / "build"
APK_DIR = BUILD_DIR / "outputs" / "apk"
LOG_FILE = BUILD_DIR / "base44-build.log"
PORT = int(os.environ.get("PORT", "3000"))


def find_apks():
    if not APK_DIR.is_dir():
        return []
    return sorted(p for p in APK_DIR.rglob("*.apk") if p.is_file())


def log_tail(lines=40):
    try:
        text = LOG_FILE.read_text(errors="replace").splitlines()
    except FileNotFoundError:
        return "Build log not created yet."
    return "\n".join(text[-lines:]) or "Build log is empty."


def status(apks):
    tail = log_tail(60)
    if apks:
        return "done", "APK built"
    if "FAILURE" in tail or "error:" in tail.lower():
        return "failed", "Build failed"
    if "build started" in tail:
        return "running", "Build in progress"
    return "waiting", "Waiting for build to start"


def page():
    apks = find_apks()
    state, label = status(apks)
    colors = {
        "done": ("#0f5132", "#d1e7dd"),
        "failed": ("#842029", "#f8d7da"),
        "running": ("#664d03", "#fff3cd"),
        "waiting": ("#41464b", "#e2e3e5"),
    }
    fg, bg = colors[state]
    rows = "".join(
        f'<li><a href="/files/{html.escape(p.relative_to(APK_DIR).as_posix())}">'
        f"{html.escape(p.name)}</a> <span class=\"muted\">{p.stat().st_size // 1024} KB</span></li>"
        for p in apks
    ) or '<li class="muted">No APK yet.</li>'
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>v2rayNG — sandbox build</title>
<style>
  body {{ margin:0; background:#101316; color:#e7ebef;
         font:15px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; }}
  main {{ max-width:860px; margin:0 auto; padding:32px 24px 56px; }}
  h1 {{ font-size:20px; margin:0 0 4px; }}
  .muted {{ color:#9aa5b1; }}
  .badge {{ display:inline-block; padding:4px 10px; border-radius:999px;
            font-size:13px; font-weight:600; }}
  section {{ margin-top:28px; }}
  h2 {{ font-size:14px; text-transform:uppercase; letter-spacing:.06em;
        color:#9aa5b1; margin:0 0 10px; }}
  pre {{ background:#171b1f; border:1px solid #262c33; border-radius:8px;
         padding:14px; overflow:auto; max-height:340px; font-size:12.5px;
         line-height:1.5; margin:0; }}
  ul {{ list-style:none; padding:0; margin:0; }}
  li {{ padding:8px 0; border-bottom:1px solid #1e242a; }}
  a {{ color:#7cc4ff; text-decoration:none; }}
  a:hover {{ text-decoration:underline; }}
</style>
</head>
<body>
<main>
  <h1>v2rayNG</h1>
  <p class="muted">Native Android app (Kotlin + Jetpack Compose). No web UI exists,
     so this page reports the containerized APK build instead.</p>
  <p><span class="badge" style="color:{fg};background:{bg}">{html.escape(label)}</span></p>

  <section>
    <h2>Built APKs</h2>
    <ul>{rows}</ul>
    <p class="muted">Install on a device or emulator:
       <code>adb install &lt;file.apk&gt;</code></p>
  </section>

  <section>
    <h2>Build log (tail)</h2>
    <pre>{html.escape(log_tail())}</pre>
  </section>
</main>
</body>
</html>"""


class Handler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def _send(self, code, body, content_type="text/html; charset=utf-8"):
        data = body.encode() if isinstance(body, str) else body
        self.send_response(code)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self):
        path = unquote(self.path.split("?")[0])
        if path == "/health":
            return self._send(200, "ok", "text/plain; charset=utf-8")
        if path == "/":
            return self._send(200, page())
        if path.startswith("/files/"):
            rel = path[len("/files/"):]
            target = (APK_DIR / rel).resolve()
            if APK_DIR.resolve() not in target.parents or not target.is_file():
                return self._send(404, "not found", "text/plain; charset=utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/vnd.android.package-archive")
            self.send_header("Content-Length", str(target.stat().st_size))
            self.send_header(
                "Content-Disposition", f'attachment; filename="{target.name}"'
            )
            self.end_headers()
            with target.open("rb") as fh:
                while chunk := fh.read(262144):
                    self.wfile.write(chunk)
            return
        return self._send(404, "not found", "text/plain; charset=utf-8")

    def log_message(self, fmt, *args):
        print(f"{time.strftime('%H:%M:%S')} {fmt % args}", flush=True)


if __name__ == "__main__":
    print(f"preview server on :{PORT}, serving {APK_DIR}", flush=True)
    ThreadingHTTPServer(("0.0.0.0", PORT), Handler).serve_forever()
