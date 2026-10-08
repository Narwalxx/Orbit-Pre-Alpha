# Orbit Release Ops

Static interactive mockup for the Orbit release manager.

## Share on GitHub Pages

1. Create an empty GitHub repository.
2. Upload `index.html`, `README.md`, and `.nojekyll` to its root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/(root)` folder, then save.
6. GitHub displays the public site URL after deployment.

The app has no build step and no external backend. The single `index.html` file contains the HTML, CSS, and JavaScript.

## Run locally

Open `index.html` in a browser. Or run:

```powershell
node server.mjs
```

Then browse to `http://127.0.0.1:8080/`.

## Demo data

Changes made in the mockup are stored only in that browser's local storage. They do not sync across devices and are not sent to distributors.
