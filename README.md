# The Him कLA Studio — Website

Next.js website for The Him कLA Studio (Yamunanagar's first professional acting studio).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Form submission (MongoDB + email)

1. Copy `.env.example` to `.env.local`.
2. **MongoDB** (optional): set `MONGODB_URI` to your Atlas or local connection string. Registrations are stored in the `registrations` collection.
3. **SMTP** (optional): set `EMAIL_TO`, `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` (and optionally `SMTP_PORT`, `SMTP_SECURE`). On successful registration, an email is sent to `EMAIL_TO` with the form data.

If neither is set, the form still returns success but does not persist data or send email.

## Build

```bash
npm run build
npm start
```
