# The Him कLA Studio — Website Build Todo List

Based on the reference screenshots. **Stack: Next.js** (React). Work through in order; you can add more items later.

**Status:** Most items done. Remaining (optional): **3.6** (carousel indicator), **6.4** (gallery lightbox), **15.2** (scroll animations).

**Page order (top to bottom):** Hero → About → Courses → Studio Moments → Founder → Register → Contact → Connect With Us → Start Your Acting → Footer.

---

## 1. Project setup & global styles (Next.js)

- [x] **1.1** Create Next.js project (e.g. `create-next-app` with App Router, TypeScript optional); use `app/` for routes and `app/globals.css` (or CSS modules) for styles.
- [x] **1.2** Set global styles in `app/globals.css` and root layout (`app/layout.tsx`):
  - Dark background (`#1A1A1A` or similar).
  - Default text color: white / light gray.
  - Sans-serif font (e.g. system stack or Montserrat / Poppins).
  - Smooth scroll and basic reset/normalize.
- [x] **1.3** Define design tokens:
  - Accent: orange/gold (e.g. `#FF8C00`, `#FFC107`).
  - Card background: dark gray (e.g. `#2C2C2C`).
  - Section padding and max-width for content.
- [x] **1.4** Responsiveness: mobile-first layout, breakpoints for tablet and desktop; fluid typography and spacing.

---

## 2. Navigation & header

- [x] **2.1** Add a sticky/fixed header (if present in final design).
- [x] **2.2** Logo + nav links (e.g. Home, About, Courses, Gallery, Founder, Register, Contact); use Next.js `<Link>` for in-page anchors or client-side navigation.
- [x] **2.3** Mobile menu (hamburger + overlay/drawer) if needed.

---

## 3. Hero section

- [x] **3.1** Full-viewport hero with centered content.
- [x] **3.2** Full-width background image (whimsical illustration: creature, butterfly, trees, gradient sky).
- [x] **3.3** Dark semi-transparent overlay over background for text contrast.
- [x] **3.4** Typography:
  - Main title: **The Him कLA Studio** — large, bold, white, uppercase.
  - Subtitle: **Yamunanagar's First Professional Acting Studio** — smaller, bold, golden/orange.
  - Description: one line of body text in white.
- [x] **3.5** Two CTAs:
  - **Join Now**: solid orange background, white text, pill-shaped (high border-radius).
  - **Contact Us**: transparent background, thin white border, white text, same shape.
- [ ] **3.6** Optional: section/carousel indicator at bottom center (e.g. circle with “0”).
- [x] **3.7** Link “Join Now” to Register section and “Contact Us” to Contact section.

---

## 4. About section

- [x] **4.1** Section heading: **ABOUT The Him कLA Studio** — large, bold, white, uppercase, letter-spacing.
- [x] **4.2** Two-column layout (text + image) using Grid or Flexbox; stack on mobile.
- [x] **4.3** Text column:
  - Paragraph 1: “The Him Kla Studio is the first professional acting studio in Yamunanagar…”
  - Paragraph 2: “Students learn real industry skills required for films, television…”
  - Paragraph 3: highlight in accent color — “Our mission is to build confidence, creativity, and strong acting fundamentals for aspiring performers.”
- [x] **4.4** Image column: group photo (children + adult), rounded corners, responsive.
- [x] **4.5** Generous padding and vertical spacing; match dark theme.

---

## 5. Our Courses section

- [x] **5.1** Section heading: **OUR COURSES** — centered, same style as About heading.
- [x] **5.2** Subheading: “Master the art of acting with our comprehensive training programs” — smaller, centered, light gray.
- [x] **5.3** Responsive grid: 3 columns desktop, 2 tablet, 1 mobile; consistent gutters.
- [x] **5.4** Course cards (repeat for each):
  - Dark card background (`#2C2C2C`), rounded corners, padding.
  - Subtle shadow/border; on hover: glowing orange/gold outline.
- [x] **5.5** Per card:
  - Icon in circular (or rounded-square) container with accent color.
  - Title: bold, uppercase, white (e.g. **PROFESSIONAL ACTING TRAINING**).
  - Short description in lighter gray.
- [x] **5.6** Courses to include:
  - Professional Acting Training — “Industry-level acting techniques for film and television.”
  - Acting Fundamentals — “Learn expressions, emotions, and character building.”
  - TV & Web Series Auditions — “Practice real audition techniques.”
  - Camera Confidence — “Learn how to perform naturally in front of cameras.”
  - Dialogue Delivery — “Improve voice, pronunciation, and emotional delivery.”
  - Stage Presence — “Build confidence for live stage performance.”
  - Personality Development — “Build confidence, communication, and presence for auditions and life.”
- [x] **5.7** Icons: camera, star, video, camera, microphone, people, user/profile (SVG or icon set).

---

## 6. Studio Moments (gallery)

- [x] **6.1** Section heading: **STUDIO MOMENTS** — centered, same typography style.
- [x] **6.2** Subtitle: “Behind the scenes of our acting workshops”.
- [x] **6.3** Image grid: 2×3 (6 images), rounded corners, consistent aspect ratio.
- [ ] **6.4** Optional: lightbox/modal on click; optional “Workshop Moment” overlay on one image.
- [x] **6.5** Use Next.js `<Image>` (or `<img>`) for gallery images; lazy-loading and alt text.

---

## 7. Meet the Founder

- [x] **7.1** Section heading: **MEET THE FOUNDER** — centered, white, uppercase, bold.
- [x] **7.2** Single founder card: horizontal layout (image left, text right); center card on page.
- [x] **7.3** Card styling: dark gray background, large rounded corners, padding.
- [x] **7.4** Founder image:
  - Circular crop.
  - Orange/gold glowing ring (border or box-shadow).
  - Pill-shaped “FOUNDER” label overlapping bottom of image, orange background, white text.
- [x] **7.5** Text block:
  - Name: **SHIVAM VERMA** — large, bold, orange/gold, uppercase.
  - Bio paragraph: “Shivam Verma is an actor, performer, and creative mentor…”
  - Vision: large orange quotation mark (e.g. “99” or custom quote icon) + “His vision is to help students develop real confidence, stage presence, and camera performance skills required for the entertainment industry.”

---

## 8. Register Now (form)

- [x] **8.1** Section heading: **REGISTER NOW** — centered.
- [x] **8.2** Subtitle: “Start your acting journey with us”.
- [x] **8.3** Form container: dark gray card, rounded, generous padding; two-column layout on desktop, single column on mobile.
- [x] **8.4** Left column fields: Full Name *, Email Address *, City *, Message (optional textarea, placeholder “Tell us about your goals…”).
- [x] **8.5** Right column fields: Phone Number *, Age *, Course Interested In * (dropdown with “Select a course” and course list).
- [x] **8.6** Inputs: dark background, white/light text, rounded corners; clear labels and required indicators.
- [x] **8.7** Submit button: full-width (or prominent), orange background, white bold text “Submit Registration”, rounded.
- [x] **8.8** Client-side validation; form submits to your backend API (see **§13 Backend**) for MongoDB save + SMTP email.

---

## 9. Contact Us

- [x] **9.1** Section heading: **CONTACT US** — centered.
- [x] **9.2** Subtitle: “Visit our studio or get in touch”.
- [x] **9.3** Two-column layout: contact card left, map right; stack on mobile.
- [x] **9.4** Left card:
  - Title: **The Him कLA Studio** — orange/gold, bold, uppercase.
  - Address: “26, Vikas Nagar, Yamunanagar, Haryana” with location icon (orange).
  - Phone: “9897017702” with phone icon (orange).
  - Email: “thehimklastudio@gmail.com” with envelope icon (orange).
- [x] **9.5** Right card: embedded Google Map (Yamunanagar / Vikas Nagar); dark/greyscale style if possible.
- [x] **9.6** “Open in Maps” button (top-right of map) linking to Google Maps.

---

## 10. Connect With Us (social)

- [x] **10.1** Section heading: **CONNECT WITH US** — centered.
- [x] **10.2** Subtext: “Follow us on social media for updates and behind-the-scenes”.
- [x] **10.3** Three horizontal cards: Instagram, Facebook, YouTube.
- [x] **10.4** Each card: dark gray background, rounded corners, white outline icon + platform name below; hover state.
- [x] **10.5** Links to actual Instagram, Facebook, YouTube URLs (placeholders until provided).

---

## 11. Start Your Acting (CTA section)

- [x] **11.1** Section with five solid orange/gold star icons at top center (rating or emphasis).
- [x] **11.2** Main headline: **START YOUR ACTING JOURNEY TODAY** — large, bold, white, uppercase, centered.
- [x] **11.3** Subtitle: “Join Yamunanagar's first professional acting studio and transform your passion into profession” — smaller white text, centered.
- [x] **11.4** CTA button: **Join The Him कLA Studio** — solid orange/gold background, white text, rounded (pill-style); links to Register section or form.
- [x] **11.5** Responsiveness: section stacks and scales on mobile; button remains tappable.

---

## 12. Main footer (site-wide)

- [x] **12.1** Thin light gray horizontal divider above footer.
- [x] **12.2** Footer background: same or slightly darker than page (dark gray/black).
- [x] **12.3** Three-column layout (stack to single column on mobile):
  - **Column 1 — Studio info:** Heading “THE HIM KLA STUDIO” in bold orange/gold; below it “Yamunanagar's First Professional Acting Studio” in smaller white text.
  - **Column 2 — Quick Links:** Heading “Quick Links” in bold white; links: About, Courses, Gallery, Contact (add Founder & Register if desired); anchor or page links.
  - **Column 3 — Contact Info:** Heading “Contact Info” in bold white; phone icon + “9897017702”, email icon + “thehimklastudio@gmail.com”; below that three social icons (Instagram, Facebook, YouTube) in white.
- [x] **12.4** Second divider line below the three columns.
- [x] **12.5** Copyright line: “©2026 The Him कLA Studio. All Rights Reserved.” — small white text, centered.
- [x] **12.6** Responsiveness: columns stack vertically on small screens; spacing and touch targets adjusted.

---

## 13. Backend — form submission (Next.js API + MongoDB + email)

- [x] **13.1** Create Next.js API route(s) to handle form submissions: e.g. `app/api/register/route.ts` (App Router) or `pages/api/register.ts` (Pages Router) for the Register form; reuse same pattern if you add a separate Contact form later.
- [x] **13.2** MongoDB: create database and collection(s) for registrations (e.g. `registrations` or `leads`).
- [x] **13.3** Define schema for form data: fullName, email, phone, age, city, courseInterestedIn, message, submittedAt (and any other fields).
- [x] **13.4** On form submit: validate payload, then save document to MongoDB; return success/error to frontend.
- [x] **13.5** SMTP: configure SMTP (e.g. Nodemailer with Gmail/SendGrid/similar); store credentials in env vars (e.g. `MONGODB_URI`, `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, `EMAIL_TO`); never commit secrets.
- [x] **13.6** On successful save to DB: send email to studio (e.g. thehimklastudio@gmail.com) with submitter details (name, email, phone, course, message, etc.) and subject like “New registration — The Him Kla Studio”.
- [x] **13.7** Handle errors: log failures, return clear message to user; optionally retry or queue for email.
- [x] **13.8** CORS: if frontend and API are on different origins, set CORS headers in the route handler (same-origin is fine when using Next.js API routes on the same app).
- [x] **13.9** Frontend: form POST to your Next.js API route (e.g. `/api/register`); show loading state and success/error message after submit.

---

## 14. Responsiveness (cross-cutting)

- [x] **14.1** All sections: fluid widths, no horizontal scroll on mobile; readable font sizes (min ~16px for body).
- [x] **14.2** Breakpoints: define and use at least mobile (< 768px), tablet (768px–1024px), desktop (> 1024px).
- [x] **14.3** Touch targets: buttons and links at least ~44px height/width on mobile.
- [x] **14.4** Images and iframes (e.g. map): max-width 100%, aspect ratio preserved.
- [x] **14.5** Navigation/footer: test menu and footer links on small viewports; hamburger or stacked layout as needed.
- [x] **14.6** Forms: single-column layout on mobile; inputs full-width and easy to tap.
- [x] **14.7** Confirm each section meets the above (revisit 1.4, 11.5, 12.6 as needed).

---

## 15. Polish & behavior

- [x] **15.1** Smooth scroll to sections from nav and hero CTAs.
- [ ] **15.2** Optional: subtle animations (e.g. fade-in on scroll for sections).
- [x] **15.3** Favicon and basic meta tags (title, description) for The Him कLA Studio.
- [x] **15.4** Accessibility: focus states, contrast, semantic HTML, alt text for images.
- [x] **15.5** Final pass: test on real devices or responsive mode (mobile and tablet); fix overflow and alignment.

---

## Summary

**Stack:** Next.js (App Router or Pages Router), MongoDB, SMTP (e.g. Nodemailer).

| Section            | Priority | Status  | Notes                                      |
|--------------------|----------|--------|--------------------------------------------|
| Setup & global     | High     | Done   | Foundation for all sections               |
| Hero               | High     | Done   | First impression, CTAs                    |
| About              | High     | Done   | Core messaging                            |
| Courses            | High     | Done   | Main offering, 7 cards                    |
| Studio Moments     | Medium   | Done   | 6-image grid (lightbox optional)          |
| Founder            | High     | Done   | Single card, image + bio                  |
| Register           | High     | Done   | Form + validation + API                   |
| Contact            | High     | Done   | Address, phone, email, map                 |
| Connect (social)   | Medium   | Done   | 3 social cards                            |
| Start Your Acting  | Medium   | Done   | CTA + stars + “Join” button               |
| Main footer        | High     | Done   | 3 columns, Quick Links, Contact, copyright|
| Backend (DB+email) | High     | Done   | MongoDB storage, SMTP on form submit       |
| Responsiveness     | High     | Done   | Mobile-first, breakpoints, touch targets   |
| Polish             | Before launch | Done | A11y, meta, smooth scroll (animations optional) |

---

*You can add more items (e.g. blog, testimonials, pricing) in a new section below or in a separate TODO-2.md.*
