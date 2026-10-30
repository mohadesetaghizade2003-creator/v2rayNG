#!/usr/bin/env bash
# Dev-mode builder: keeps the Play Store debug APK in sync with the working tree.
# Rebuilds when Android sources or Gradle files change and reports state to
# V2rayNG/app/build/base44-builder-status.json (read by the preview page and the healthcheck).
set -uo pipefail

REPO_ROOT="${REPO_ROOT:-/src}"
STATUS="${REPO_ROOT}/V2rayNG/app/build/base44-builder-status.json"
mkdir -p "$(dirname "${STATUS}")"

write_status() { # $1 = state
    printf '{"state":"%s","at":"%s"}\n' "$1" "$(date -u +%Y-%m-%dT%H:%M:%SZ)" > "${STATUS}"
}

source_stamp() {
    find \
        "${REPO_ROOT}/V2rayNG/app/src" \
        "${REPO_ROOT}/V2rayNG/gradle" \
        "${REPO_ROOT}/V2rayNG/app/build.gradle.kts" \
        "${REPO_ROOT}/V2rayNG/build.gradle.kts" \
        "${REPO_ROOT}/V2rayNG/settings.gradle.kts" \
        "${REPO_ROOT}/V2rayNG/gradle.properties" \
        "${REPO_ROOT}/V2rayNG/gradle/wrapper" \
        "${REPO_ROOT}/compile-hevtun.sh" \
        -type f -printf '%T@ %p\n' 2>/dev/null | sort | md5sum | cut -d' ' -f1
}

state=""
last=""
while true; do
    current="$(source_stamp)"
    if [ "${current}" != "${last}" ]; then
        write_status building
        bash "${REPO_ROOT}/.base44/build-apk.sh" &
        build_pid=$!
        while kill -0 "${build_pid}" 2>/dev/null; do
            write_status building
            sleep 5
        done
        if wait "${build_pid}"; then
            state=ok
        else
            state=failed
        fi
        last="${current}"
    fi
    write_status "${state:-building}"
    sleep 5
done
