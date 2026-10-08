# Orbit Release Ops

Static interactive mockup for the Orbit release manager.

## GitHub Pages

This repository publishes the app through GitHub Actions. After the first push, open **Settings → Pages** and set the build and deployment source to **GitHub Actions** if GitHub has not enabled it automatically. The workflow runs on every push to `main`.

The public site URL is:

https://narwalxx.github.io/Orbit-Pre-Alpha/

## Run locally

Open `index.html` in a browser, or run `node server.mjs` and visit `http://127.0.0.1:8080/`.

## Demo behavior

The mockup stores demo edits in the current browser's local storage. Data does not sync between devices. Distributor login links open external portals, but this demo does not upload releases or connect to distributor accounts.
