# yousefalhashemi.com

Personal site, built with Jekyll and served by GitHub Pages.

## Editing content

Most content lives in data files, so you rarely need to touch HTML:

| What | Where |
| --- | --- |
| Name, tagline, email, social links | `_config.yml` |
| "Now" card on the home page | `_data/now.yml` |
| Jobs, education, skills | `_data/experience.yml` |
| Project cards | `_data/projects.yml` (images go in `assets/images/`) |
| Blog posts | `_posts/YYYY-MM-DD-title.md` |
| Drafts (not published) | `_drafts/` |
| Resume PDF | Not stored here — see below |

The home page intro and About text are in `index.html`. Styles are in `assets/css/main.css`.

## Writing a post

Create `_posts/2026-11-20-my-post.md`:

```markdown
---
title: My post
summary: One line shown on the Writing page.
category: Software
---

Post body in Markdown.
```

## Resume

`resume.pdf` is not committed. It is downloaded from the `main` branch of
[Yalhash/resume](https://github.com/Yalhash/resume) by `scripts/fetch_resume.rb`:

- **On deploy:** `.github/workflows/pages.yml` runs the script before every build. The
  site rebuilds on each push to `main`, once a day, and on demand (Actions tab →
  *Deploy site* → *Run workflow*), so a resume update goes live within a day.
- **Locally:** run `ruby scripts/fetch_resume.rb` once before serving.

This needs **Settings → Pages → Build and deployment → Source** set to **GitHub Actions**.

## Running locally

Use Ruby 3.3 (the version GitHub Pages runs); Ruby 3.4+ breaks Jekyll 3.x.

```bash
bundle install
ruby scripts/fetch_resume.rb
bundle exec jekyll serve --livereload   # add --drafts to preview _drafts/
```

Then open http://localhost:4000.
