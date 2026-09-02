<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
# AGENTS.md

## Project Identity

This repository is the personal portfolio website of **Peeraphon Laoha**.

Primary positioning:

- Software Engineer
- Full-stack Developer
- Information Technology and Computing (CSI) student at Sripatum University
- Focused on building practical, scalable web and cross-platform applications

The portfolio is a real professional product, not a generic student template.

The website should make a strong first impression, clearly communicate engineering ability, and help Peeraphon promote himself for:

- Software Engineering internships
- Full-stack / Front-end / Web Developer roles
- Freelance opportunities
- Technical collaborations

---

## Role of the Coding Agent

Act as a **Senior Software Engineer + Creative Front-end Engineer**.

Do not behave like a code generator that blindly implements requests.

For every meaningful change:

1. Understand the user-facing goal.
2. Inspect the existing architecture before changing it.
3. Prefer simple, maintainable solutions over clever hacks.
4. Protect performance, accessibility, responsiveness, and SEO.
5. Preserve existing working behavior unless a change explicitly requires replacing it.
6. Call out architectural or security problems when discovered.
7. Verify the result with typecheck, lint, tests, and production build where available.

When requirements are incomplete, make a sensible professional decision that is consistent with this file and the existing codebase.

---

## Source of Truth for Portfolio Content

The content below is based on Peeraphon's current resume.

Do **not** invent:

- employers
- work experience
- clients
- awards
- certifications
- metrics
- technologies
- project results
- GitHub statistics
- years of professional experience

If information is missing, either omit it or use neutral wording.

### Profile

Name:

`Peeraphon Laoha`

Professional title:

`Software Engineer | Full-stack Developer`

Current summary:

> Information Technology and Computing student at Sripatum University with a strong passion for Full-stack Development. Experienced with Next.js, React, Supabase, TypeScript, Electron, cloud deployment, API integrations, and building practical software products.

The website copy may be rewritten to sound stronger and more natural, but it must remain factually consistent with the resume.

### Education

Institution:

`Sripatum University`

Program:

`Bachelor of Science in Information Technology and Computing (CSI)`

GPA:

`3.30`

Do not guess graduation dates, class standing, or additional academic achievements unless they are provided later.

### Technical Skills

Languages / frameworks:

- React
- Next.js
- TypeScript
- Node.js
- Electron
- Tailwind CSS

Tools / integrations:

- LINE Messaging API
- Cron Jobs
- Git
- GitHub Releases

Database / cloud:

- Supabase
- PostgreSQL
- Vercel
- Serverless Functions

Do not add technologies to the public skills section solely because they exist as transitive dependencies in the repository.

---

## Featured Projects

The portfolio must treat projects as case studies rather than simple cards.

Each featured project should communicate:

1. What the product is.
2. What problem it solves.
3. What Peeraphon personally built.
4. Important engineering decisions.
5. Technology used.
6. Visual product screenshots or mockups.
7. A live demo / repository link only when a real URL is available.

### Project: JODJUM

Classification:

`Task Management Web Application`

Known work:

- Developed a dynamic task management web application using Next.js.
- Architected and integrated a cloud database schema using Supabase.
- Implemented CRUD workflows for creating, tracking, and updating daily tasks.
- Implemented application state handling for the task-management experience.
- Deployed the application to cloud hosting.

Preferred portfolio presentation:

**Problem**
People need a simple way to organize and track daily tasks.

**Solution**
A modern web application centered on quick task creation, updates, status tracking, and cloud-backed persistence.

**Engineering highlights**
Next.js architecture, Supabase database integration, CRUD workflows, state management, and cloud deployment.

Do not claim user counts, performance improvements, revenue, production scale, or business impact unless evidence is supplied later.

### Project: GoodLife

Classification:

`Student Productivity & Auto-Sync Platform`

Resume status:

`AUG 2026 - Present`

Known work:

- Developed a cross-platform application for Web and Windows Desktop.
- Uses Next.js, TypeScript, and Electron.
- Engineered an automated synchronization system using Supabase.
- Fetches and parses `.ics` timetable data from Moodle.
- Implements smart notifications using LINE Messaging API and Cron jobs.
- Includes an AI timetable scanning capability.

Preferred portfolio presentation:

**Problem**
Student schedules and university information can be fragmented across different systems.

**Solution**
A productivity platform designed to bring timetable information, synchronization, and notifications into a more convenient experience across web and desktop.

**Engineering highlights**
Cross-platform architecture, Next.js + Electron, TypeScript, Supabase, Moodle `.ics` parsing, automated synchronization, scheduled jobs, LINE Messaging API integration, and AI-assisted timetable scanning.

Because this project is currently listed as ongoing, do not present unfinished features as fully shipped unless their implementation has been verified in the repository.

---

## Existing Public Link

Resume portfolio/application URL:

`https://goodlife-delta.vercel.app`

Do not assume whether this URL represents the final portfolio, GoodLife, or another application beyond what is verified from the current project context.

Links must be defined in a central data/config file rather than duplicated across components.

---

## Contact Information

Resume currently contains:

- Email: `peeraphonlaoha3@gmail.com`
- Phone: `+66 91886-0340`

For the public portfolio:

- Email may be used as the primary contact method.
- Do not expose the phone number by default unless Peeraphon explicitly requests it.
- Prefer a contact CTA such as `Let's build something together`.
- Never commit secrets, API keys, private tokens, service-role keys, or private environment values to the repository.

---

# Product Direction

## Creative Concept

The visual direction is:

**Modern Creative Developer Portfolio**

The experience should feel:

- premium
- technical
- cinematic
- interactive
- minimal where information matters
- visually impressive without becoming distracting

Target balance:

`70% professional / 30% wow factor`

The portfolio must not become an animation demo that hides the actual work.

---

## Visual Direction

Default visual language:

- Dark background
- Strong typography
- Electric / light blue accent
- Subtle blue-purple gradients
- Controlled glow
- Large whitespace
- High-contrast project imagery
- Modern grid-based layouts

Preferred signature accent:

`#87CEFA`

Use design tokens / CSS variables instead of scattering hard-coded values throughout components.

Avoid:

- excessive glassmorphism
- random neon effects
- unreadable gradients
- excessive particle systems
- excessive border-radius on every element
- generic template-looking cards
- unnecessary shadows
- multiple competing accent colors

---

# Information Architecture

Recommended homepage flow:

1. Navigation
2. Hero
3. Short introduction / identity statement
4. Featured projects
5. About
6. Technical capabilities / stack
7. Experience or engineering journey
8. Contact CTA
9. Footer

Projects should appear early.

Recruiters should understand within a few seconds:

- who Peeraphon is
- what he builds
- what technologies he uses
- which projects demonstrate his ability
- how to contact him

---

# Hero Requirements

The hero should create the strongest visual impact on the site.

Core content:

- `PEERAPHON LAOHA`
- `SOFTWARE ENGINEER`
- `FULL-STACK DEVELOPER`

Possible supporting line:

`I build digital products that turn real problems into useful experiences.`

This line is creative copy, not a factual employment claim.

Recommended interactions:

- cinematic text reveal
- subtle pointer-reactive lighting
- animated grid / gradient / abstract visual
- tasteful scroll indicator
- strong CTA to featured projects
- secondary CTA to contact or resume

Do not make essential information depend on animation completing.

---

# Animation System

Animation is a core part of the portfolio, but must be engineered intentionally.

Preferred tools:

- Motion for React for component transitions, hover states, gestures, and small interactions
- GSAP + ScrollTrigger for advanced scroll choreography
- CSS for simple transitions and low-cost effects
- Three.js only if a specific 3D concept clearly improves the hero or a major storytelling section

Do not add Three.js merely because the portfolio is intended to look impressive.

## Animation Principles

Animations should:

- reinforce hierarchy
- guide attention
- communicate transitions
- make projects feel tangible
- remain smooth on normal laptops and mobile devices

Avoid:

- animations longer than necessary
- huge parallax distances
- constant cursor trails
- moving every element
- layout-triggering animation where transform/opacity can be used
- scroll hijacking
- effects that interfere with reading
- effects that block links or controls

Prefer GPU-friendly transforms and opacity.

Respect:

`prefers-reduced-motion`

Users who request reduced motion must receive a stable and usable experience.

---

# Technical Stack

Preferred baseline:

- Next.js
- App Router
- TypeScript
- Tailwind CSS

Animation:

- Motion for React
- GSAP / ScrollTrigger when justified

Deployment:

- Vercel

Do not install large dependencies before checking whether the same result can be achieved with the existing stack.

Every new dependency should have a clear reason.

---

# Recommended Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   ├── sections/
│   ├── projects/
│   ├── motion/
│   └── ui/
│
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   └── skills.ts
│
├── lib/
│   ├── animations.ts
│   └── utils.ts
│
└── types/
```

If the existing repository has a good structure already, extend it instead of reorganizing files merely to match this example.

---

# Content Architecture

Portfolio content should be data-driven.

Prefer centralized structures such as:

```ts
type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  problem: string
  solution: string
  highlights: string[]
  technologies: string[]
  image?: string
  liveUrl?: string
  repositoryUrl?: string
  status?: "active" | "completed" | "private"
}
```

Do not hard-code the same project metadata in several components.

This allows projects and skills to be updated without rewriting the layout.

---

# Component Engineering Rules

Components should be:

- focused
- reusable where appropriate
- strongly typed
- readable
- easy to remove or modify
- server components by default where possible

Use client components only when browser APIs, state, gestures, or animation require them.

Avoid putting the entire homepage inside a single `"use client"` component.

Keep expensive animation code isolated.

Lazy-load heavy visual components where practical.

---

# TypeScript Rules

- Avoid `any`.
- Prefer explicit domain types.
- Validate external / dynamic data where relevant.
- Remove unused variables and imports.
- Do not silence TypeScript errors without understanding the cause.
- Do not use `@ts-ignore` as a routine fix.

---

# Responsive Design

The site must work intentionally at:

- mobile
- tablet
- laptop
- desktop
- large desktop

Do not design desktop first and merely stack everything on mobile.

On small screens:

- simplify motion
- reduce oversized decorative elements
- preserve readable typography
- keep project information easy to scan
- keep interactive targets large enough to tap

Test common widths around:

- 375px
- 768px
- 1024px
- 1440px

---

# Performance Requirements

Visual ambition must not destroy performance.

Priorities:

- optimize images
- use `next/image` where appropriate
- minimize client-side JavaScript
- lazy-load heavy visuals
- avoid unnecessary rerenders
- clean up GSAP timelines/listeners on unmount
- prevent hydration errors
- prevent cumulative layout shift
- avoid loading large video/3D assets unnecessarily on mobile

Do not add animation that causes visibly poor scrolling.

---

# Accessibility Requirements

Minimum expectations:

- semantic HTML
- logical heading hierarchy
- keyboard-accessible navigation
- visible focus states
- meaningful alt text
- sufficient contrast
- reduced-motion support
- descriptive interactive labels

Never disable keyboard focus purely for aesthetics.

Decorative visuals should not pollute screen-reader output.

---

# SEO and Social Sharing

Implement or preserve:

- meaningful page title
- meta description
- canonical metadata when appropriate
- Open Graph metadata
- Twitter/X sharing metadata
- favicon
- structured project/content semantics where useful

Preferred title direction:

`Peeraphon Laoha — Software Engineer & Full-stack Developer`

Preferred description direction:

`Portfolio of Peeraphon Laoha, a Software Engineer and Full-stack Developer building modern web and cross-platform applications with Next.js, TypeScript, React, Supabase, and Electron.`

Do not keyword-stuff.

---

# Project Case Study Design

Featured projects should not be identical generic cards.

A project section may use:

- full-screen or large project panels
- sticky layouts
- device mockups
- scroll-driven image reveals
- architectural diagrams
- feature callouts
- technology labels

Animation should support the story.

For example:

1. project name enters
2. product visual becomes dominant
3. problem and solution appear
4. engineering highlights are revealed
5. CTA becomes available

Never hide important project details behind hover-only interactions because mobile users cannot hover.

---

# Copywriting Rules

Tone:

- confident
- concise
- engineering-focused
- human
- not arrogant

Avoid empty buzzwords such as:

- "world-class"
- "10x developer"
- "coding ninja"
- "visionary"
- "expert in everything"
- "industry-leading"

Prefer evidence:

Instead of:

`I am an expert full-stack engineer.`

Prefer:

`I build web and cross-platform applications with Next.js, TypeScript, Supabase, and Electron.`

---

# Resume Integration Rules

The resume is a source, not a layout template.

Do not recreate the resume page as the website.

Transform resume bullets into:

- strong project storytelling
- concise capability statements
- visual case studies
- technical highlights

The portfolio should add context around real work without creating unsupported facts.

If new resume content is provided later, update centralized portfolio data first, then let the UI consume it.

---

# Privacy and Security

Never expose:

- `.env` contents
- private keys
- Supabase service-role keys
- API secrets
- private tokens
- database credentials

Only variables explicitly intended for browsers may use public prefixes such as:

`NEXT_PUBLIC_*`

Do not expose personal phone information publicly unless explicitly requested.

---

# Quality Gates

Before considering a meaningful phase complete, run the available equivalents of:

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

If the repository uses different scripts, inspect `package.json` and use the actual project commands.

A phase is not complete merely because the page visually renders.

Also inspect:

- browser console errors
- hydration warnings
- broken routes
- missing assets
- mobile layout
- interactive states
- animation cleanup
- production build

---

# Development Workflow

Use small, reviewable phases.

## Phase 1 — Foundation

Goal:

Create the portfolio foundation and design system.

Includes:

- project setup
- fonts
- global styles
- color/design tokens
- page shell
- responsive navigation
- centralized profile/project data
- initial metadata

Definition of done:

- typecheck passes
- lint passes
- production build passes
- homepage shell works on mobile and desktop

## Phase 2 — Hero Experience

Goal:

Build the high-impact portfolio opening.

Includes:

- hero typography
- primary CTA
- secondary CTA
- visual background system
- initial motion system
- reduced-motion fallback

Definition of done:

- no janky scroll
- no console errors
- mobile layout works
- essential content remains accessible without motion

## Phase 3 — Featured Projects

Goal:

Turn JODJUM and GoodLife into strong engineering case studies.

Includes:

- project data model
- project showcase
- problem / solution / engineering highlights
- technology labels
- real links when available
- responsive visuals

Definition of done:

- both projects are represented factually
- no invented metrics
- cards/sections work without hover
- content is easy to scan

## Phase 4 — About, Skills, Journey

Goal:

Explain Peeraphon's engineering identity without duplicating the resume.

Includes:

- concise About section
- technical stack
- education
- engineering journey / timeline if useful

## Phase 5 — Advanced Motion

Goal:

Add cinematic storytelling after the content and layout are stable.

Possible work:

- GSAP ScrollTrigger sequences
- pinned project storytelling
- parallax
- masked reveals
- pointer-reactive hero effects
- optional advanced 3D visual

Do not start advanced motion before the core page is usable.

## Phase 6 — Polish and Launch

Includes:

- performance tuning
- image optimization
- accessibility review
- metadata
- Open Graph
- final responsive pass
- production build
- Vercel deployment

---

# Agent Reporting Format

After each phase, report:

### Completed

What was implemented.

### Important Decisions

Architecture, animation, or UX decisions made.

### Verification

Commands run and outcomes.

Example:

```text
Typecheck: PASS
Lint: PASS
Tests: PASS
Production build: PASS
```

### Remaining Risks

Anything not fully verified.

### Next Phase

What should happen next.

Do not mark a phase complete when known blockers remain.

---

# Definition of Done

A feature is complete only when:

1. The implementation matches the intended user experience.
2. It uses factual portfolio content.
3. It works responsively.
4. It works with keyboard interaction where relevant.
5. Reduced-motion behavior is acceptable.
6. There are no known TypeScript errors.
7. There are no known lint errors.
8. There are no obvious browser-console errors.
9. The production build succeeds.
10. The implementation does not introduce unnecessary complexity.

---

# Final Product Standard

The finished portfolio should feel like a website built by the engineer it represents.

A visitor should leave with the impression that Peeraphon can:

- design and structure a real software product
- build modern React / Next.js interfaces
- work with TypeScript
- integrate backend and cloud systems
- use Supabase / PostgreSQL
- build cross-platform applications with Electron
- integrate APIs and automation
- care about UI quality, performance, and engineering discipline

The strongest proof should always be the actual projects and implementation—not exaggerated copy.
