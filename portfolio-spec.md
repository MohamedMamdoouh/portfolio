# Mohamed Mamdouh — Public Portfolio Implementation Specification

## 1. Document Purpose

This document is the implementation specification for Mohamed Mamdouh's public personal portfolio website.

The implementation agent must treat this document as the source of truth for the portfolio.

The goal is to build a polished, minimal, professional, responsive, English-only personal portfolio that presents Mohamed as a Junior Software Engineer / Junior Full-Stack Developer focused on .NET and Angular.

---

# 2. Critical Implementation Rules

## 2.1 Do not invent information

The implementation agent MUST NOT invent:

- Personal information
- Professional experience
- Companies
- Job titles
- Projects
- Project descriptions
- Project URLs
- GitHub URLs
- Live demo URLs
- Skills not confirmed by the source material
- Certifications
- Achievements
- Testimonials
- Statistics
- Client information
- Contact information
- Education information
- Any other biographical or professional claim

The uploaded CV is the current source of truth for professional and project information [CV](./mohamed_mamdouh_cv.pdf)

If required information is missing, ASK THE USER. Do not fabricate a value and do not silently substitute a generic placeholder.

## 2.2 Confirmed requirements are authoritative

If the implementation agent believes a confirmed requirement should technically be changed, it MUST explain why and obtain approval before changing it.

It may choose implementation libraries/dependencies when necessary and justified, but it must not silently change product requirements.

## 2.3 No unsolicited features

Do not add:

- Extra pages
- Extra sections
- Contact forms
- Blog
- Testimonials
- Services
- Testimonials
- Analytics
- CMS
- Authentication
- Backend/API
- Database
- Admin panel
- Extra portfolio projects
- Extra social networks

unless explicitly approved.

## 2.4 Content integrity

Do not use fake placeholder personal content in the production implementation.

If an implementation dependency requires missing information, ask the user.

Temporary development placeholders must not remain in the production build.

---

# 3. Personal Identity

## Name

Mohamed Mamdouh

## Primary title

Software Engineer

## Professional positioning

> Junior Software Engineer focused on building full-stack web applications with .NET and Angular.

This wording may be refined later for presentation quality, but the meaning must remain unchanged unless approved.

## Target role

Junior Full-Stack Developer

## Professional level

Junior

## Location

Egypt

Location must NOT appear in the Hero.

Location SHOULD appear in the Contact area.

## Employment positioning

The website must NOT explicitly say that Mohamed is currently looking for a job.

Do not add an "Available for work", "Open to work", or similar badge.

## Remote/international positioning

The portfolio is intended to support remote and international opportunities, but this must not be turned into an availability badge in the Hero.

---

# 4. Audience and Goals

## Target audiences

The portfolio should work for:

- Recruiters
- Companies hiring developers
- Freelance clients
- Startup founders
- Other developers
- Potential employers in Egypt
- International employers

## Goals

The portfolio has a combination of goals:

- Showcase technical ability
- Showcase completed projects
- Establish a professional personal brand
- Support job applications
- Present Mohamed professionally to potential employers
- Make relevant work easy to discover

The website should represent Mohamed personally while strongly showcasing his work.

---

# 5. Website Scope

## Language

English only.

Do not implement:

- Arabic version
- Language selector
- Translation infrastructure

## Site model

One-page scrolling portfolio.

## Main navigation

The primary navigation MUST contain only:

1. Home
2. Projects
3. About
4. Skills

Do not add Education or Contact as primary navigation links.

Education and Contact are contained within the broader About/content flow.

## Main content order

1. Home / Hero
2. Projects
3. About
   - Professional introduction
   - Education
   - Skills
   - Social links
   - CV access
   - Contact
4. Contact is the final content area

The exact visual separation between subsections should remain clear.

---

# 6. Navigation

## Desktop

Navigation must:

- Be sticky/fixed
- Contain Mohamed's name/logo
- Contain Home, Projects, About, Skills
- Include the theme toggle
- Include the CV action
- Visually indicate the active section
- Use smooth scrolling
- Change appearance after scrolling

The post-scroll change should be subtle and professional, such as a slightly elevated/compact navigation surface.

## Mobile

Use a hamburger navigation.

Recommended mobile menu behavior:

- Compact dropdown/panel rather than a full-screen takeover
- Clear animation
- Closes automatically after selecting a navigation item
- Keyboard accessible
- Screen-reader accessible
- Maintains the same navigation items
- Does not obscure content unnecessarily

---

# 7. Theme

## Theme behavior

- Support light mode
- Support dark mode
- Default to system preference
- Provide a visible theme toggle in navigation
- Persist the user's explicit theme choice where practical

## Visual requirement

Dark mode must NOT become excessively dark.

Use a refined dark theme with sufficient contrast rather than pure black backgrounds everywhere.

Light mode should remain clean and bright without becoming excessively colorful.

---

# 8. Visual Direction

## Primary direction

Minimal / professional.

Recommended secondary qualities:

- Modern
- Calm
- Elegant
- Technical
- Approachable
- Refined

Avoid a corporate visual identity.

## Explicit exclusions

Do NOT use:

- Excessive gradients
- Huge animations
- Excessive visual effects
- Too many cards
- Corporate-looking layouts
- Excessive colors
- Overly dark design
- Generic "developer portfolio" visual patterns

The design should feel like a deliberately designed personal engineering portfolio rather than a template.

---

# 9. Color Direction

No user-provided color palette exists.

Recommended approach:

- Use a restrained neutral base
- Use one restrained accent color
- Use semantic colors only where necessary
- Avoid rainbow/multi-accent palettes
- Avoid large gradient backgrounds
- Ensure light/dark contrast
- Keep the accent sophisticated and relatively muted

The exact palette may be selected by the implementation/design agent, provided it follows these constraints.

Do not introduce a visually loud palette.

---

# 10. Typography

Use:

- Modern sans-serif typography
- Clear hierarchy
- Strong but restrained heading weight
- Comfortable body text
- Balanced line height
- Responsive typography

Avoid decorative display fonts.

Recommended implementation:

- Use a high-quality modern sans-serif
- Prefer a font with broad Latin/technical character support
- Avoid loading unnecessary font families or weights
- Optimize font loading

---

# 11. Shape and Spacing

## Shapes

Use rounded shapes.

Do not overuse extreme pill-shaped components.

## Whitespace

Use balanced whitespace.

The site should breathe without becoming excessively sparse.

## Content width

Use a consistent maximum content width.

The exact width should be selected to maintain comfortable reading and strong project presentation.

---

# 12. Hero Section

The Hero is the first viewport and should approximately fill it.

## Required content

- Mohamed Mamdouh
- Software Engineer
- Professional positioning sentence
- Large professional portrait
- Social links
- Primary CTA
- Scroll indicator
- Subtle decorative visual/illustration

## Hero positioning

Use:

> Junior Software Engineer focused on building full-stack web applications with .NET and Angular.

The wording can be polished later without changing the meaning.

## Location

Do not show Egypt in the Hero.

## Availability

Do not show an availability badge.

## Photo

Use a large professional headshot.

Desktop:

- Prominent visual presence
- Can sit beside the textual content

Mobile:

- Reduced size
- Stack vertically with the textual content

The exact left/right ordering may adapt responsively.

## Decorative visual

Use a subtle abstract illustration/decorative visual in addition to the portrait.

Recommended visual language:

- Abstract engineering/connection geometry
- Very subtle
- No cliché coding illustration
- No large background artwork
- No excessive gradients

## Hero CTA

Recommended primary CTA:

> View Projects

The CTA should smoothly scroll to the Projects section.

No secondary Hero CTA.

The CV download can still appear in the Hero as a secondary utility/action because it is required, but it must not compete visually with the primary project CTA.

## Social links

Show the five confirmed social profiles:

- GitHub
- LinkedIn
- Facebook
- X
- YouTube

Open external profiles in a new browser tab.

GitHub should receive slightly stronger visual emphasis than the other social links because the website is a developer portfolio.

## Scroll indicator

Show a subtle scroll indicator.

It must not be distracting.

---

# 13. Projects Section

Projects are the highest-priority content after the Hero.

## Project count

Exactly 2 selected projects.

The project order is manually specified.

## Current project status

The final CV will contain the final two selected projects.

The two final projects are Shora – Full-Stack Booking Platform and MechanicShop – Backend REST API.

The updated CV provides the project details, but it does not provide complete project URLs. Do not invent URLs; ask the user for them.

## Project availability

One project will have:

- GitHub repository
- Live demo

The other will have:

- GitHub repository only

Do not explicitly advertise the absence of a live demo as a negative status.

## Presentation style

Do NOT use a generic grid of small cards.

Recommended presentation:

- Two large project feature blocks
- Strong visual hierarchy
- Each project gets substantial horizontal space
- Alternate visual/text alignment on desktop
- Stack vertically on mobile
- Maintain a clear project boundary
- Use restrained borders/background surfaces rather than card-heavy UI

## Each project must include

- Project name
- Short description
- Problem it solves
- Mohamed's role
- Technologies
- Key technical features
- Project status
- GitHub link
- Live demo link when available

## Technical highlights

Include technical highlights.

They must be VERY brief.

Example structure:

- Clean Architecture
- CQRS
- JWT authentication
- Background processing

Do not turn project cards into technical documentation.

## Project technology logos

Use official recognizable technology logos.

Do not make technology logos clickable.

## CTA behavior

Every project should have a clear project action.

For the live-demo project:

- Live Demo = primary CTA
- GitHub = secondary CTA

For the GitHub-only project:

- GitHub = primary/only project CTA

## Hover interaction

Use simple hover effects.

Avoid large transforms, excessive motion, or flashy effects.

## No "View all projects"

Do not include a View All Projects button because the portfolio intentionally contains only two selected projects.

## Section introduction

Include a short introduction under/near the Projects heading.

The exact copy must be derived from the confirmed positioning and project context, not invented achievements.

---

# 14. About Area

The About area is a broad content area containing multiple subsections.

## Required subsections

1. Professional introduction
2. Education
3. Skills
4. Social links
5. CV access
6. Contact

The subsections should be visually distinct.

## Professional introduction

Focus on:

- Short professional background
- Software engineering identity
- Full-stack development focus
- .NET + Angular focus

Do NOT include:

- Hobbies
- Personal interests
- Personal-life information
- Job-seeking statement
- Self-project experience claim unless explicitly supplied for final content

## Education

Current confirmed source information:

- Bachelor of Engineering – Computer and Systems Engineering
- Zagazig University
- Graduated 2026

This information comes from the current CV. fileciteturn2file0

Do not invent additional education information.

The education subsection should appear inside About rather than as a separate navigation destination.

## CV

Provide access to the CV.

- CV PDF hosted as a static website asset
- No dedicated CV page
- Direct download
- CV action available in navigation
- CV action available in Hero
- CV action available in About

The final CV file should be the updated CV supplied by the user.

## Social links

Show all five:

- GitHub
- LinkedIn
- Facebook
- X
- YouTube

Social links appear in:

- Hero
- About
- Contact

No additional social locations are required.

---

# 15. Skills

Skills are a secondary priority to Projects.

## Display

Show individual technologies.

Group them into categories following the structure of the CV.

Select only relevant technologies from the final CV rather than dumping every listed technology onto the page.

## Categories

The uploaded updated CV provides the following skills. fileciteturn2file0

### Backend

- C#
- ASP.NET Core Web API
- Entity Framework Core
- REST APIs
- ASP.NET Identity
- JWT Authentication
- Role-Based Authorization
- Middleware
- Clean Architecture
- DDD
- CQRS
- MediatR
- SignalR
- FluentValidation
- Background Services
- Caching
- Dependency Injection
- Unit & Integration Testing

### Frontend

- Angular
- TypeScript
- JavaScript
- HTML
- CSS
- Bootstrap
- Tailwind CSS

### Database

- SQL
- T-SQL
- ADO.NET
- MongoDB
- Database Design
- Query Optimization

### Tools

- Git
- GitHub
- Docker
- Postman
- Swagger
- CI/CD basics

### Concepts

- OOP
- SOLID Principles
- Design Patterns
- Clean Code
- Problem Solving
- Agile

The final portfolio must select the relevant items rather than blindly reproducing the complete CV list. fileciteturn2file0

## Skills presentation

Do NOT use:

- Skill percentages
- Progress bars
- Beginner/intermediate/advanced labels
- Excessive visual meters

Use recognizable technology logos.

Technology logos are not clickable.

Do not add a Skills introduction paragraph.

---

# 16. Contact

Contact is the final content area.

## Required

- Visible email address
- Copy email button
- Copy success feedback
- Social links
- Location: Egypt

## Email

Use the same email as the confirmed CV:

mohamedmamdouh3550@gmail.com

IMPORTANT: Before production deployment, verify the exact address against the final CV supplied by the user. Do not silently correct or alter it.

## Email interaction

Do NOT use a contact form.

The primary interaction is:

1. User sees email
2. User clicks Copy Email
3. Email is copied to clipboard
4. UI gives clear feedback such as "Copied!"

## Email scraping protection

Implement a reasonable lightweight anti-basic-scraping approach without harming accessibility or usability.

Do not introduce a backend just for this.

The actual email must still be available to normal users and accessible to assistive technology.

## Phone number

The phone number is PRIVATE.

It must NOT appear:

- On the page
- In HTML
- In structured data
- In metadata
- In JSON/data files
- In source content
- In downloadable public content generated by the website

The implementation agent must verify this before completion.

## Contact CTA

Do not add an additional contact CTA.

---

# 17. Footer

No footer.

Do not add a conventional site footer simply because portfolios normally have one.

---

# 18. Responsive Design

The site must use one responsive design system rather than separate desktop/mobile implementations.

## Desktop

- Large hero portrait
- Alternating project feature layouts
- Comfortable maximum content width
- Sticky navigation

## Mobile

- Reduced hero portrait
- Vertically stacked Hero
- Vertically stacked project presentations
- Vertically stacked About subsections
- Technology logos wrap naturally
- Hamburger navigation
- Menu closes after navigation selection

## Tablet

Adapt the same system without creating an unrelated third design.

---

# 19. Motion

Animation level: simple/subtle.

Use motion for:

- Navigation state transitions
- Scroll/section transitions where appropriate
- Project hover states
- Mobile menu
- Theme transition if appropriate
- Copy-email feedback

Avoid:

- Huge entrance animations
- Constant moving backgrounds
- Excessive parallax
- Large 3D effects
- Attention-grabbing loops

Respect:

`prefers-reduced-motion`

When reduced motion is requested, remove or substantially reduce non-essential animation.

---

# 20. Accessibility

Recommended accessibility target:

**WCAG 2.1 AA**

This is a recommended implementation target and should be treated as the quality bar.

Requirements:

- Meaningful images have useful alt text
- Decorative images use empty alt text or equivalent screen-reader exclusion
- Color is never the sole carrier of information
- Sufficient contrast in light and dark themes
- Interactive controls have accessible labels where required
- Mobile menu is keyboard and screen-reader accessible
- Semantic HTML
- Correct landmark elements
- Correct heading hierarchy
- Keyboard-only navigation
- Visible keyboard focus states
- No autoplay audio/video

---

# 21. Performance

Performance is a major requirement.

Target:

- Strong Core Web Vitals
- Fast first render
- Minimal client-side JavaScript
- Optimized images
- Modern image formats where appropriate
- Efficient font loading
- Avoid unnecessary dependencies
- Avoid layout shifts
- Lazy-load images where appropriate

The site should not ship application-level JavaScript for functionality that can be implemented statically or with lightweight client-side code.

---

# 22. SEO

The site should be indexable.

Implement:

- Custom `<title>`
- Meta description
- Custom favicon
- Custom social preview image
- Appropriate structured data such as `Person` and `WebSite`

Do NOT implement:

- `sitemap.xml`
- `robots.txt`

Do not add SEO claims that are not supported by the content.

---

# 23. Browser Support

Support current versions of:

- Chrome
- Edge
- Firefox
- Safari

Support:

- Desktop
- Tablet
- Mobile

Do not spend unnecessary effort supporting obsolete browsers.

---

# 24. Recommended Technology Stack

## Frontend

Use:

**Astro + TypeScript**

Reason:

- The website is primarily static content
- No backend is needed
- No contact form
- No database
- No authentication
- No dynamic business logic
- Excellent static output
- Minimal JavaScript by default
- Component-based development remains available

Angular is not required for this portfolio simply because Mohamed uses Angular professionally.

## Backend

None.

Do not create:

- ASP.NET Core API
- Database
- Authentication
- Server
- CMS

## Content

Use centralized local content/data structures.

Do not scatter project URLs and personal content across unrelated components.

## Components

Use component-based architecture.

Create reusable components only when there is genuine reuse.

Avoid building a giant generic design system for a small portfolio.

## TypeScript

Use TypeScript.

## Dependencies

Keep dependencies minimal.

A dependency may be introduced when:

- It clearly solves a real requirement
- The implementation agent can justify it
- It does not unnecessarily increase bundle size or complexity

## Animation

Prefer CSS and lightweight browser APIs.

Do not add a large animation library unless a requirement genuinely cannot be met cleanly without one.

## Testing

Automated tests are NOT required.

Manual/automated validation checks described in the QA section are still required.

## Linting/formatting

Use linting and formatting.

## Build

Production build must fail on:

- TypeScript errors
- Compiler errors
- Broken required build-time content
- Invalid configuration

---

# 25. Recommended Project Structure

Use a structure conceptually similar to:

```text
portfolio/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   └── social/
│   ├── cv/
│   │   └── mohamed-mamdouh-cv.pdf
│   └── favicon/
│
├── src/
│   ├── components/
│   │   ├── navigation/
│   │   ├── hero/
│   │   ├── projects/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── contact/
│   │   └── shared/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│
├── tests/
├── package.json
└── astro.config.*
```

This is a recommended structure, not a requirement to create empty folders. Remove unnecessary folders.

---

# 26. Content/Data Architecture

Centralize:

- Profile information
- Social URLs
- Project information
- Skills
- Education
- CV path

Project data should support:

- Name
- Description
- Problem
- Role
- Technologies
- Technical highlights
- Status
- GitHub URL
- Optional live demo URL
- Display order

Do not hardcode these values into presentation components.

---

# 27. External Links

External links must:

- Use the exact confirmed URLs
- Open in a new tab where specified
- Use safe external-link attributes where applicable
- Be verified before production completion

Do not invent URLs.

Required social platforms:

- GitHub
- LinkedIn
- Facebook
- X
- YouTube

Exact URLs must come from the user/final CV/source material.

---

# 28. GitHub Pages Deployment

Hosting:

**GitHub Pages**

Deployment model:

```text
Git repository
      ↓
Push to production branch
      ↓
GitHub Actions
      ↓
Build Astro site
      ↓
Deploy static output
      ↓
GitHub Pages
```

Requirements:

- Automatic deployment
- No staging environment
- No manual production approval
- HTTPS
- Must work on GitHub Pages default domain
- No custom domain requirement
- No production secrets unless a future requirement explicitly requires them

Configure the Astro build correctly for GitHub Pages.

The implementation must account for the GitHub Pages base path/repository path if the site is hosted at a project-page URL rather than a user/organization root page.

Do not hardcode assumptions about the final repository name without checking the actual repository.

---

# 29. Analytics and Monitoring

Do not implement:

- Analytics
- Privacy analytics
- Uptime monitoring

---

# 30. Security

No backend means the attack surface is small.

Do not introduce unnecessary security infrastructure.

Do not expose the private phone number.

Use normal static-site security best practices where they do not conflict with the explicit requirement that no additional security-header configuration be added as a project feature.

---

# 31. Error and Loading States

## 404

Create a custom 404 page.

It should:

- Match the portfolio visual identity
- Be minimal
- Provide a clear way back to Home
- Work on GitHub Pages

## Loading

Provide appropriate loading behavior for assets/interactions where needed.

Do not create an artificial global loading screen for a static site unless technically necessary.

---

# 32. Images and Assets

## Profile photo

Required:

- Professional headshot
- Large in Hero
- Reduced on mobile

The user must supply the actual image.

Do not generate or substitute a fake portrait.

## Project images

Currently no project screenshots are available.

Do not invent project screenshots.

If project visual assets are later supplied, optimize them appropriately.

## Illustrations

A subtle custom abstract illustration/decorative visual is recommended.

Do not use generic stock developer illustrations.

If an actual illustration asset is required, the user must provide/approve it or the implementation must use a simple generated/vector treatment that does not falsely represent project functionality.

---

# 33. CV

The CV must be hosted as a static asset.

The final CV should be the user's updated CV.

Current CV information includes:

- Mohamed Mamdouh
- Full-Stack Developer | .NET | Angular
- Bachelor of Engineering – Computer and Systems Engineering
- Zagazig University
- Graduated 2026

The uploaded updated CV also contains project/skills information, but the final portfolio must use the updated CV when supplied.

Do not expose the current private phone number from the CV.

Do not create a public phone number field.

---

# 34. Current Known Project Information

## Project 1 — Shora – Full-Stack Booking Platform

Source: uploaded updated CV. fileciteturn2file0

Description:

> Full-stack booking platform for one-to-one consulting sessions with availability management, manual payment verification, client bookings, and admin operations.

Tech Stack:

- ASP.NET Core
- Angular
- PostgreSQL
- EF Core
- JWT
- ASP.NET Identity
- Azure Blob Storage
- Docker
- xUnit
- Testcontainers
- GitHub Actions

Key Highlights:

- Built a full-stack application using ASP.NET Core Web API, Angular, and Clean Architecture with clear separation of concerns.
- Implemented secure JWT authentication, refresh-token rotation, email verification, password reset, and role-based authorization.
- Designed booking and payment workflows with slot reservation, payment approval, cancellations, refunds, receipt validation, and automated background processing.
- Added production-ready infrastructure including transactional Outbox, caching, rate limiting, Azure Blob Storage/SAS URLs, xUnit/Testcontainers testing, Docker, and GitHub Actions CI/CD.

## Project 2 — MechanicShop – Backend REST API

Source: uploaded updated CV. fileciteturn2file0

Description:

> Backend system for managing mechanic shop operations (work orders, scheduling, customers, invoicing).

Tech Stack:

- ASP.NET Core
- EF Core
- SQL Server
- CQRS (MediatR)
- JWT
- Docker
- xUnit

Key Highlights:

- Built REST API using ASP.NET Core with Clean Architecture + CQRS (MediatR).
- Implemented JWT authentication with refresh tokens and role-based authorization.
- Added background services, caching, rate limiting, and structured logging.
- Implemented unit and integration testing with xUnit + Testcontainers.
- Dockerized the application for deployment.

## Project URLs

The updated CV does not contain complete project URLs.

Before production completion, ask the user for:

- Shora GitHub URL
- Shora live demo URL, if Shora is the live-demo project
- MechanicShop GitHub URL
- MechanicShop live demo URL only if MechanicShop is the live-demo project

Do not infer URLs from project names.

# 35. Explicitly Excluded Content

Do not add:

- Phone number
- Job-seeking statement
- Contact form
- Blog
- Testimonials
- Services section
- Experience section
- Separate education page
- Separate CV page
- Separate project-detail pages
- Problem-solving section
- LeetCode statistics
- SQL-problem statistics
- Certification section
- Footer
- Analytics
- Monitoring
- CMS
- Backend
- Database
- Authentication
- Custom domain requirement
- Language selector
- Arabic version
- `sitemap.xml`
- `robots.txt`
- Project "View all" button

---

# 36. Interaction Requirements

Required:

- Smooth scrolling
- Sticky navigation
- Navigation state changes on scroll
- Active section indication
- Mobile hamburger menu
- Mobile menu closes after navigation
- Theme toggle
- Simple project hover effects
- Scroll indicator
- Copy email
- Copy feedback
- Responsive layouts
- Keyboard navigation
- Focus states
- Reduced-motion support

---

# 37. Final QA Checklist

Before declaring the implementation complete, verify:

## Content

- [ ] Name is correct
- [ ] Title is correct
- [ ] Hero positioning is correct
- [ ] No invented personal information
- [ ] No invented project information
- [ ] No fake URLs
- [ ] No phone number anywhere
- [ ] Final CV is used
- [ ] Exactly 2 projects are displayed
- [ ] DVLD is not displayed
- [ ] Final project URLs are correct

## Navigation

- [ ] Home works
- [ ] Projects works
- [ ] About works
- [ ] Skills works
- [ ] Active section state works
- [ ] Smooth scrolling works
- [ ] Sticky behavior works
- [ ] Post-scroll navigation appearance works
- [ ] Mobile menu works
- [ ] Mobile menu closes correctly
- [ ] Keyboard access works

## Theme

- [ ] System light preference works
- [ ] System dark preference works
- [ ] Theme toggle works
- [ ] Both themes have adequate contrast
- [ ] No excessive darkness
- [ ] No excessive colors

## Projects

- [ ] Two projects only
- [ ] Correct order
- [ ] Rich presentation
- [ ] Desktop alternating layout
- [ ] Mobile stacking
- [ ] Live demo CTA works
- [ ] GitHub links work
- [ ] Technology logos display correctly
- [ ] Hover behavior is subtle

## Contact

- [ ] Email is visible
- [ ] Copy button works
- [ ] Copy feedback works
- [ ] Contact social links work
- [ ] Egypt appears
- [ ] No contact form
- [ ] Phone number is absent

## CV

- [ ] Navigation CV button works
- [ ] Hero CV button works
- [ ] About CV button works
- [ ] PDF downloads correctly
- [ ] Correct final CV is served

## Accessibility

- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Semantic HTML is used
- [ ] Heading hierarchy is correct
- [ ] Images have correct alt behavior
- [ ] Decorative images are ignored by screen readers
- [ ] Mobile menu is accessible
- [ ] Reduced motion works
- [ ] Color is not the only information carrier

## Responsive

- [ ] Desktop verified
- [ ] Tablet verified
- [ ] Mobile verified
- [ ] Hero responsive
- [ ] Projects responsive
- [ ] About responsive
- [ ] Skills wrapping works
- [ ] Navigation responsive
- [ ] No horizontal overflow
- [ ] No major layout shifts

## Performance

- [ ] Production build succeeds
- [ ] TypeScript/compiler errors fail the build
- [ ] Images optimized
- [ ] Fonts optimized
- [ ] Unnecessary JavaScript avoided
- [ ] Core Web Vitals considered
- [ ] No obvious layout shifts

## SEO

- [ ] Title present
- [ ] Meta description present
- [ ] Favicon present
- [ ] Social preview image present
- [ ] Structured data present
- [ ] No sitemap.xml
- [ ] No robots.txt

## Deployment

- [ ] GitHub Pages deployment works
- [ ] GitHub Actions deployment works
- [ ] Automatic deployment works
- [ ] HTTPS works
- [ ] Default GitHub Pages URL works
- [ ] No staging environment
- [ ] No analytics
- [ ] No monitoring
- [ ] No required production secrets

## Final integrity

- [ ] Search source/content for private phone number
- [ ] Search source/content for placeholder text
- [ ] Search source/content for fake URLs
- [ ] Search source/content for invented claims
- [ ] Verify all external links
- [ ] Verify CV download
- [ ] Verify live demo
- [ ] Verify GitHub repositories
- [ ] Verify all social links

---

# 38. Agent Decision Policy

When encountering an implementation decision:

### If already specified

Implement it as specified.

### If unspecified but technically necessary

Choose a reasonable implementation if it does not change product requirements.

### If choosing a library/dependency

It is allowed when necessary and justified.

Prefer:

1. Native platform capability
2. Existing framework capability
3. Small focused dependency
4. Large library only when clearly justified

### If changing a confirmed requirement

STOP and ask for approval.

### If adding a feature

STOP and ask for approval.

### If information is missing

ASK THE USER.

Do not invent it.

### If a design detail is not explicitly specified

Use the established visual direction:

- Minimal
- Professional
- Modern
- Calm
- Elegant
- Technical
- Restrained
- Not corporate
- Not generic
- Not colorful
- Not excessively dark
- Not animation-heavy
- Not gradient-heavy

---

# 39. Definition of Done

The portfolio is complete only when:

1. The public site is implemented.
2. The final design follows this specification.
3. Exactly two selected projects are shown.
4. All confirmed personal information is accurate.
5. No invented personal/project information remains.
6. Private phone information is completely absent.
7. CV download works.
8. All confirmed social links work.
9. Live demo and GitHub links work.
10. Navigation works on desktop and mobile.
11. Light/dark themes work.
12. Responsive layouts work.
13. Accessibility requirements are met.
14. Reduced-motion behavior works.
15. Copy-email interaction works.
16. Production build succeeds.
17. GitHub Actions deployment succeeds.
18. GitHub Pages production site works.
19. SEO metadata is present as specified.
20. No analytics, monitoring, backend, database, CMS, or contact form has been introduced.
21. No extra sections/features have been added without approval.
22. Final content has been checked for invented or placeholder information.

---

# 40. Final Implementation Principle

This portfolio should feel like:

**A deliberately designed personal engineering portfolio for Mohamed Mamdouh — minimal, modern, professional, technically credible, visually refined, and focused on two strong projects.**

It should NOT feel like:

- A generic developer template
- A corporate company website
- A colorful design showcase
- A heavily animated landing page
- A dashboard
- A resume dumped onto a webpage
- A collection of small cards

Projects should be the strongest evidence of engineering ability, while the rest of the site provides enough professional context to make those projects meaningful.
