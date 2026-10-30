#!/usr/bin/env bash
# Sandbox build of the Play Store debug APK, reproducing .github/workflows/build.yml:
# submodules -> libv2ray.aar (matching the AndroidLibXrayLite gitlink) -> HEV native libs -> Gradle.
set -euo pipefail

REPO_ROOT="${REPO_ROOT:-/src}"
cd "${REPO_ROOT}"
git config --global --add safe.directory '*'

LOG="${REPO_ROOT}/V2rayNG/app/build/base44-build.log"
mkdir -p "$(dirname "${LOG}")"
: > "${LOG}"

run_build() {
    echo "== v2rayNG sandbox build started $(date -u +%Y-%m-%dT%H:%M:%SZ)"

    echo "== 1/4 initializing submodules"
    git submodule update --init --recursive

    echo "== 2/4 fetching libv2ray.aar"
    mkdir -p V2rayNG/app/libs
    if [ ! -s V2rayNG/app/libs/libv2ray.aar ]; then
        local tag
        tag="$(git -C AndroidLibXrayLite describe --tags --abbrev=0)"
        echo "   AndroidLibXrayLite tag: ${tag}"
        curl -fsSL -o V2rayNG/app/libs/libv2ray.aar \
            "https://github.com/2dust/AndroidLibXrayLite/releases/download/${tag}/libv2ray.aar"
    else
        echo "   already present"
    fi

    echo "== 3/4 building HEV native libraries"
    if [ ! -d libs ]; then
        bash compile-hevtun.sh
    else
        echo "   already present"
    fi
    cp -r libs/. V2rayNG/app/libs/

    echo "== 4/4 assembling Play Store debug APK"
    cd V2rayNG
    echo "sdk.dir=${ANDROID_HOME}" > local.properties
    chmod +x gradlew
    ./gradlew --no-daemon --stacktrace :app:assemblePlaystoreDebug

    echo "== build finished $(date -u +%Y-%m-%dT%H:%M:%SZ)"
    find app/build/outputs/apk -name '*.apk' -printf '%p (%s bytes)\n' 2>/dev/null || true
}

run_build 2>&1 | tee -a "${LOG}"
exit "${PIPESTATUS[0]}"
