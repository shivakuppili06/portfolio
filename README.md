# Sai Shiva Sagar Kuppili — Portfolio

A dark, glassmorphism developer portfolio built with Next.js 15, TypeScript,
Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The font fetch (Google Fonts) requires an
internet connection — this works automatically on Vercel or any machine
with normal network access.

To build for production:

```bash
npm run build
npm start
```

## Editing content

Almost everything on the site — name, tagline, education, skills, projects,
certifications, social links — lives in **`lib/data.ts`**. Change the
values there and the whole site updates; you shouldn't need to touch the
component files for normal content edits.

## Things to finish before you publish

A few pieces were left as clearly-marked placeholders because the source
material wasn't available yet:

- [ ] **Resume PDF** — drop your resume at `public/resume.pdf` (the
      Download Resume buttons already point there).
- [ ] **Profile photo** — the hero currently shows a gradient "SS" avatar.
      To use a real photo: add it to `public/images/profile.jpg`, then in
      `components/Hero.tsx` replace the `glass-strong` initials block with
      a Next.js `<Image src="/images/profile.jpg" .../>`.
- [ ] **LeetCode handle** — `lib/data.ts` guesses
      `leetcode.com/u/shivakuppili06`; confirm or correct it.
- [ ] **Project GitHub links** — all four project cards currently link to
      your GitHub profile root. Point `githubUrl` at the specific repo for
      each project in `lib/data.ts` once they're public, and add `liveUrl`
      for any project with a live deployment (the button shows "Demo
      coming soon" until you do).
- [ ] **Experience section** — intentionally left empty with an "actively
      interviewing" message. Add real entries to the `experience` array in
      `lib/data.ts` as soon as you land an internship — the timeline UI is
      already built and will render automatically.
- [ ] **Stats & counters** — `aboutStats` and `achievementStats` in
      `lib/data.ts` (CGPA, projects built, GitHub contributions, LeetCode
      solved, etc.) are reasonable placeholders — update them to your real,
      current numbers.
- [ ] **Contact form** — submitting the form currently opens the visitor's
      email client with the message pre-filled (no backend required). If
      you'd rather collect submissions directly on the page, wire up
      [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/)
      inside `handleSubmit` in `components/Contact.tsx`.
- [ ] **Domain** — `app/robots.ts` and `app/sitemap.ts` have a placeholder
      `SITE_URL`; update it once you have a real domain.

## Deploying

The fastest path is [Vercel](https://vercel.com): push this folder to a
GitHub repo, import it on Vercel, and it deploys with zero config.

## Project structure

```
app/            Next.js App Router pages, layout, SEO files
components/     One component per section (Hero, About, Skills, ...)
components/ui/  Small shared pieces (SectionHeading)
hooks/          useTypewriter (hero role rotation), useCountUp (stat counters)
lib/data.ts     All editable content
public/         Static assets (add resume.pdf and images/ here)
```

## Tech stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion ·
Lucide React icons — no other runtime dependencies.
