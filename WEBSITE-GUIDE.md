# Dovrou Lab — E-ACHE Lab website

A complete, responsive, static website ready for free hosting on **GitHub Pages**.

## Included files

- `index.html` — Home
- `about-me.html` — About Me / Education
- `publications.html` — Publications
- `presentations.html` — Presentations
- `research.html` — Research
- `non-scientific-activities.html` — Non-scientific Activities
- `contact-me.html` — Contact Me
- `assets/style.css` — The website's design (fonts, colours, spacing)
- `assets/main.js` — Mobile navigation
- `assets/atmosphere.svg` — Locally stored, original atmospheric illustration
- `assets/logo-mark.svg`, `assets/favicon.svg` — Locally stored, original E-ACHE Lab placeholder symbol

## Publish on GitHub Pages

1. Download and **unzip** the provided ZIP archive on your computer.
2. Open your GitHub repository named `YOUR-USERNAME.github.io`.
3. Choose **Add file → Upload files**. Drag in *all the HTML files plus the `assets` folder* from the unzipped directory (do **not** upload the ZIP file itself).
4. If you already have an `index.html`, replace the existing file with the new one. Commit the changes.
5. In **Settings → Pages**, confirm **Deploy from a branch**, branch **main**, folder **/(root)**.
6. Visit `https://YOUR-USERNAME.github.io` after deployment finishes (Actions / Pages can show status).

The site works without Node.js, Jekyll, or any additional packages.

## Editing

1. On GitHub, click the file you want to change (for example, `index.html` or `publications.html`).
2. Click the **pencil** icon (Edit this file).
3. Make changes and click **Commit changes**. Your live site updates after deployment.
4. To change colours or typography, edit `assets/style.css`. The palette is near the very top, under `:root`.
5. To update publications, open `publications.html`, look for `class="publication"`, and edit/copy the relevant `<article>` entries.
6. To add or rename a tab, edit the same menu in **each** of the seven HTML files and update all page links.

## Photos and content needing review

- The **portrait on the homepage**, **Harvard image on About**, and **particulate-matter schematic on Research** currently use direct photo links to your original Wix website. These may stop working if you close Wix or change its file settings.
- For a fully independent site, download your original images (if you have rights to reuse them), put them in `assets/` (e.g. `portrait.jpg`, `harvard.jpg`, `particulate-matter.png`), and change the corresponding `<img src="...">` values in the HTML to `assets/portrait.jpg`, etc. The local atmospheric illustration and logo do **not** depend on Wix.
- The downloadable **CV** currently links to the existing Wix-hosted PDF and appears to be an older version. Replace that link with an updated PDF in your GitHub repository when ready.
- The publications section has entries from the original site through 2025, plus presentations through 2026; check publication metadata, update newer work, and correct any changes of titles or affiliations.
- The **Non-scientific Activities** page includes the original themes and links to the original gallery, but the personal-photo gallery has not been imported.
- There is intentionally no contact form: GitHub Pages is a static host and needs a third-party form service. The contact buttons open your email program instead.
- This is a refreshed, responsive design based on the original site's structure and content, **not** an exact pixel-for-pixel copy of the Wix visual template.

## Contact details used

- Institutional email: `edovrou@uoc.gr`
- Alternative email: `dovroueleni@outlook.com`
- University affiliation: Department of Chemistry, University of Crete
- Institution address displayed at city level only: Heraklion, Crete, Greece

## Sources used as content references

Original site: https://dovrouel.wixsite.com/elenidovrou
