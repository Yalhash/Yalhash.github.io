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
| Resume PDF | `resume.pdf` |

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

## Running locally

```bash
bundle install
bundle exec jekyll serve --livereload   # add --drafts to preview _drafts/
```

Then open http://localhost:4000.
