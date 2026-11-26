# Nexora Softworks LTD — Website

A React (Vite) website for www.nexorasoftworks.com.

## Run it on your computer

You need Node.js 18 or newer (https://nodejs.org).

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173).

## Build for hosting

```bash
npm run build
```

This creates a `dist/` folder. Upload the **contents of `dist/`** to your host.
A ready-built `dist/` folder is already included in this zip.

Hosts that work well:

- **Netlify / Vercel / Cloudflare Pages:** connect the project (or drag the `dist` folder in). Build command `npm run build`, output folder `dist`.
- **cPanel / shared hosting:** upload everything inside `dist/` to `public_html`.

## Edit the content

- Text, services, phone numbers and email: `src/content.js`
- Page layout: `src/App.jsx`
- Colours, fonts and spacing: `src/index.css` (brand colours are at the top)
- Logos and app screenshots: `public/`

## The contact form

By default, "Send project brief" opens the visitor's email app with the brief
already filled in and addressed to info@nexorasoftworks.com.

To receive briefs directly without the email app, use a form service such as
Formspree (https://formspree.io):

1. Create a form there and copy its endpoint URL.
2. Create a file named `.env` in this folder containing:
   ```
   VITE_FORM_ENDPOINT=https://formspree.io/f/your-form-id
   ```
3. Run `npm run build` again and re-upload `dist/`.
