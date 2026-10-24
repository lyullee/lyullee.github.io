# Ugwiyeon Lee — Research homepage

**Live site: https://lyullee.github.io/**

A static, multilingual personal research homepage based on the public profile at [lyullee/lyullee](https://github.com/lyullee/lyullee). English is the default; Korean, Simplified Chinese, Japanese, French, German, Spanish and Hindi have their own shareable URLs. The English version preserves detailed project evidence; other languages use the existing localized portfolio summaries.

## Hosting

GitHub Pages publishes the committed `docs/` directory from the `main` branch. No paid hosting, database, API key, runtime backend or third-party font/CDN is required. Changes pushed to the published directory trigger GitHub's normal Pages deployment.

## Update the content

Requires Node.js 20 or newer. No dependency installation is needed.

```sh
# Optionally retrieve the latest public profile README files.
node sync.mjs
# Generate all eight language pages.
node build.mjs
# Check generated links and project coverage.
node verify.mjs
```

Review the generated changes, then commit and push `source/` and `docs/`. Updating the profile repository alone does not automatically change this site. The sync command is manual; no recurring task has been configured.

`source/en.md` and `source/<language>.md` contain the README snapshots. `source/ui.json` contains localized navigation, headings and section descriptions. `assets/` contains the stylesheet, client-side search/filter controls and favicon. `build.mjs` generates static HTML, alternate-language metadata, sitemap and the 404 page into `docs/`.

The generator expects 20 project descriptions and known project categories. When adding a project, update its category/display name in `build.mjs`, the coverage check in `verify.mjs`, and localized counts/copy in `source/ui.json`. Build and review before publishing.

## Local preview

Serve the `docs/` directory with a static HTTP server; root-relative URLs require serving that directory as the site root.

```sh
python -m http.server 8765 --directory docs
```

Then open http://localhost:8765/. Search and filters run entirely in the visitor's browser. Content and language navigation remain available without JavaScript. The conceptual hero diagram is decorative and does not represent measured experimental data.

## Research context

Project descriptions preserve the source repositories' stated assumptions and validation boundaries. Refer to each original repository for its licence, DOI/citation information, data policy and current validation evidence. This site does not run engineering models or independently certify their results.
