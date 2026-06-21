# ode-website

Official ODE ecosystem portal.

This repository is the intended public hub for:

- landing and product positioning
- runtime library catalog
- release status across registries
- consumer showcase entry points
- documentation routing strategy

## Local development

```bash
npm install
npm run dev
```

Default local URL:

- `http://127.0.0.1:4174`

## Build

```bash
npm run build
```

## GitHub Pages

This project is prepared for GitHub Pages deployment through GitHub Actions.

Expected repository setup:

- repository name: `ode-website` or `animalab-netizen.github.io`
- workflow file: `.github/workflows/deploy.yml`
- Pages source: `GitHub Actions`

If you publish with a project repository such as `ode-website`, the site can be served from:

- `https://animalab-netizen.github.io/ode-website/`

If you publish with the special user site repository `animalab-netizen.github.io`, the site can be served from:

- `https://animalab-netizen.github.io/`

The Vite config uses a relative asset base so the same build works in both cases.

## Suggested public structure

- `ode.dev`
- `docs.ode.dev`
- `examples.ode.dev`

## Maintainer

- ÂnimaLab
- `animalab.desenvolvimento@gmail.com`
