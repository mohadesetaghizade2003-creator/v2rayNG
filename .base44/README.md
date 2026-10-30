# Sandbox environment (Base44)

v2rayNG is a **native Android application** (Kotlin + Jetpack Compose, `V2rayNG/`). It has no web
frontend, no HTTP server, and no backend, so nothing in this repo can be rendered in a browser.
This environment therefore does the two things that apply to an Android project:

1. `apk-build` — a one-shot container with the Android toolchain (JDK 21, SDK platform/build-tools,
   NDK) that reproduces the steps of `.github/workflows/build.yml` and assembles the Play Store
   debug APK.
2. `preview` — a small static server on host port 3000 that reports the build state and offers the
   built APKs for download.

## Usage

```sh
docker compose -f docker-compose.base44.yml up -d --build   # boots preview, starts the APK build
docker compose -f docker-compose.base44.yml logs -f apk-build
docker compose -f docker-compose.base44.yml run --rm apk-build   # rebuild after code changes
```

Open <http://localhost:3000/> for the build state and the APK downloads, then install on a device
or emulator:

```sh
adb install V2rayNG/app/build/outputs/apk/playstore/debug/<file>.apk
```

## What the build does

`build-apk.sh` mirrors the CI build (no signing, debug variant only):

- `git submodule update --init --recursive` for `AndroidLibXrayLite` and `hev-socks5-tunnel`.
- Downloads `libv2ray.aar` from the `2dust/AndroidLibXrayLite` release whose tag matches the
  `AndroidLibXrayLite` gitlink (`git describe --tags --abbrev=0`). The AAR revision is not pinned to
  the gitlink commit — CI does the same tag lookup.
- Builds the HEV native libraries with `compile-hevtun.sh` (NDK build over all four app ABIs) and
  copies `libs/` into `V2rayNG/app/libs/`.
- Runs `./gradlew :app:assemblePlaystoreDebug` from `V2rayNG/`.

Generated artifacts (`V2rayNG/app/libs`, `V2rayNG/app/build`) are already git-ignored; the build log
is `V2rayNG/app/build/base44-build.log`.

## Requirements and limits

- No external service credentials are needed: the app is a client with no API keys, and the compose
  stack runs no database or third-party service.
- Runtime behaviour cannot be previewed here. The sandbox has no `/dev/kvm`, so an Android emulator
  would run without acceleration; use a physical device or a local emulator instead. A successful
  APK build is *not* evidence that the VPN service, TUN modes, or UI behave correctly — those need a
  device check (see `AGENTS.md`).
- `BASE44_PREVIEW_MODE` is not used by this setup: no sandbox-only application override was needed,
  so the app's own configuration is untouched.
- The Gradle cache lives in the `v2rayng-base44_gradle-cache` volume; the SDK/NDK live in the
  `apk-build` image. Delete the image to pick up a new toolchain version.
