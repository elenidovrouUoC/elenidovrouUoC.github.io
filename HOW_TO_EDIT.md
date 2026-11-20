# E-ACHE Lab — Easy editing guide

These eight HTML files contain the **same website content and links** as the previous update, but are neatly spaced and indented to make them easier to edit in GitHub. The light design, images, stylesheet, and menu behavior are unchanged.

## Update the files

1. In your browser open https://github.com/elenidovrouuoc/elenidovrouuoc.github.io .
2. Select **Add file → Upload files**.
3. Upload the **eight `.html` files** from this folder, not the ZIP itself. They belong in the root of the repository, beside `assets/`.
4. Choose **Commit changes**. Keep the `assets` folder and its CSS/JavaScript/images as they are.
5. Once GitHub Pages has updated, open https://elenidovrouuoc.github.io .

## Where to edit

| Page | File |
| --- | --- |
| Home | `index.html` |
| Eleni Dovrou (CV) | `about-me.html` |
| Group Members | `group-members.html` |
| Research | `research.html` |
| Projects (AIRBIOX) | `projects.html` |
| Publications | `publications.html` |
| Presentations | `presentations.html` |
| Contact | `contact-me.html` |

## How to edit text

On GitHub, open the HTML file and click the pencil icon. Use **Command + F** to search a phrase (e.g. `AIRBIOX`, `Research experience`, or `Eleni Dovrou`). Most visible text appears inside `<h1>`, `<h2>`, `<h3>`, `<p>`, `<li>`, and `<div>` elements. Replace **only the words** and leave the tags untouched.

Example — change:

```html
<h3>AIRBIOX</h3>
```

to:

```html
<h3>AIRBIOX — Reactive Oxygen Species and Human Health</h3>
```

Then select **Commit changes**. Repeat the change in other pages only if the same visible text appears there.

To add a project, open `projects.html` and look for `<!-- TO ADD A NEW PROJECT IN GITHUB:`. Copy the sample `<article class="project-block"> ... </article>` from that comment, put a new copy **outside the HTML comment**, and edit the title, date, funder and description. The sample within the comment isn't visible on the website.

## Editing tips

- **Headings**: `<h1>` / `<h2>` / `<h3>`
- **Paragraphs**: `<p>`
- **Lists**: `<li>`
- **Links**: `<a href="https://...">Link text</a>`; changing the link text alone does not change the URL in `href`.
- **Images**: `<img src="assets/...">` points to an image file.
- **Menus**: repeated in the HTML for each page; when changing menu labels or links, update all eight pages.
- **Styling**: `assets/style.css` (not supplied here, because no design change is needed).

**Important:** Some material in the lengthy CV originally supplied was *summarized* in the earlier website build. These files make what is already there easier to edit; they do not restore text that was not included. If a particular paragraph is not found by searching, it may have been omitted.
