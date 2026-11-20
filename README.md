# Dovrou Lab — E-ACHE Lab website

A self-contained, static GitHub Pages website for the Environmental Atmospheric Chemistry and Health Effects Laboratory, Department of Chemistry, University of Crete.

**Live address after upload:** https://elenidovrouuoc.github.io/

## Files and tabs

| Main tab | Edit this file |
| --- | --- |
| Home | `index.html` |
| About Me / Education (CV, academic experience, teaching, awards, media) | `about-me.html` |
| Research (including AIRBIOX) | `research.html` |
| Publications (17 entries, 2018–2026) | `publications.html` |
| Presentations (13 invited, 20 first-author, 10 co-authored) | `presentations.html` |
| Contact Me | `contact-me.html` |

Other files:

- `assets/style.css` — colours, fonts, layout, mobile design. The colour variables are at the very top.
- `assets/main.js` — the mobile menu and automatically updated copyright year.
- `assets/lab-symbol.svg` — simple local circular laboratory emblem (placeholder; replace when the final logo is ready).
- `assets/atmospheric-study.svg` — locally stored atmospheric chemistry / lung illustration on Home.
- `assets/research-pathway.svg` — locally stored simplified chemical-exposure diagram on Research.

**All pages and graphics are self-contained.** There are no Wix-hosted images, no Wix links, no JavaScript libraries and no third-party design templates. External journal DOI, university/academic, researcher profile, and H.F.R.I. project links are intentional.

## Upload the replacement site

1. Download and unzip the complete package.
2. Open the `elenidovrouuoc.github.io` repository in GitHub.
3. Select **Add file → Upload files**.
4. Upload **the six `.html` pages, `README.md`, and the entire `assets` folder**. Make sure `index.html` is in the **top level** of the repository, not inside a nested folder.
5. Commit your changes to `main`. When asked, replace existing files of the same name.
6. **Delete `non-scientific-activities.html`** from your existing repository: open the file, select the delete/trash action, and commit that deletion. GitHub uploading files does *not* remove old files automatically.
7. Visit https://elenidovrouuoc.github.io/ when the GitHub Pages deployment has completed. Hard-refresh the page if the old design is cached (`Command + Shift + R` on Mac).

GitHub Pages should already be set to **Settings → Pages → Deploy from a branch → main → /(root)**.

## Edit text directly in GitHub — no external website builder

1. Open the repository, select the page you wish to edit (for example `about-me.html`).
2. Click the **pencil** icon (Edit this file).
3. Find the visible text. HTML text appears between tags, for example:

   ```html
   <h3>Assistant Professor</h3>
   <p>Department of Chemistry · University of Crete</p>
   ```

   Change the text **between** the tags without deleting the tags themselves.
4. Click **Commit changes**. GitHub Pages automatically republishes the updated site.

### Add a new publication

Open `publications.html`, scroll to the correct year, and copy one complete block that begins with `<article class="pub-item">` and ends with `</article>`. Edit the new title, author list, journal, year and article URL. For a new year, duplicate a `<section class="pub-year">` section and modify the year heading and entry.

### Add a presentation

In `presentations.html`, copy a complete block beginning with `<article class="talk-entry">` and ending with `</article>`. Change the date/year, title, meeting and author details. Put the entry in the appropriate section: invited talks, first-author or co-authored presentations.

### Change your biography, positions, or teaching

Edit `about-me.html`. Look for the relevant section headings and the `timeline-row` entries below them. Research-project updates go in `research.html`.

### Change a colour or font

Open `assets/style.css`, at the top find these variables:

```css
--paper:#ffffff;      /* background */
--ink:#222728;        /* text */
--green:#426f71;      /* accent */
--dark-green:#275657; /* buttons */
```

Save and commit; the design changes across all pages.

### Add your own photograph (recommended)

The current homepage uses an **original SVG illustration**, not a photo of you. If you want the same photo as your previous Wix homepage, save your photo locally, upload it into your repository's `assets/` folder as e.g. `eleni-portrait.jpg`, and in `index.html` find:

```html
<img src="assets/atmospheric-study.svg"
```

Change the `src` to `assets/eleni-portrait.jpg` and keep the rest of the `<img>` tag (also update its `alt` description). You can replace or remove the photo-caption text below the image.

**Note:** Do not copy your old Wix-hosted photo URL. Upload the photo directly into your GitHub repository to keep your site independent. Please use photos you have permission to publish.

## Content notes

The site uses your supplied updated CV, including 2026 publications, research experience, invited talks and presentations, media appearances, teaching and awards. Older Wix research / biography narratives have been incorporated into this website as editable HTML, with minor copy-editing for readability. Information has not been automatically synchronized with the CV or external publication databases. Check spelling, publication metadata and position naming whenever you update it.

A PDF CV was **not** created, because the full CV content is now accessible and editable on the site across the relevant tabs. You can add a local PDF to the repository later if desired.
