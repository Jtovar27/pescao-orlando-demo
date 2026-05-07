# Pescao Orlando — Website Demo

Premium website demo for **Pescao Restaurant & Bar** in Orlando, FL.
Pescado frito, mariscos, parrillas y comida caribeña — with a fully
interactive digital menu, demo cart, QR landing and contact-only
WhatsApp widget.

> **This is a presentation demo for the restaurant owner. Created by RuutDev.**

## Stack

- **React 18** + **Vite 6**
- **Tailwind CSS** with brand-driven CSS variables (logo blue palette)
- **Framer Motion** for tasteful micro-animations
- **Lucide React** icons
- **qrcode.react** for the dynamic menu QR
- **react-router-dom** for `/` and `/demo`

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in /dist
npm run preview  # serve the built bundle
```

## Routes

- `/` — full home page (hero, highlights, favorites, interactive menu, gallery, location, footer)
- `/demo` — agency-style presentation page with QR, mockup, big link cards and feature breakdown

## Where to edit

| What | File |
| ---- | ---- |
| Restaurant info, phone, addresses, links | `src/data/config.js` |
| Instagram URL | `INSTAGRAM_URL` in `src/data/config.js` |
| Menu, prices, modifiers, descriptions | `src/data/menuData.js` |
| Image-to-dish mapping (safe assignment) | `src/data/assetMap.js` |
| Logo file | `public/assets/logo/pescao-logo.jpg` |
| Food / gallery photos | `public/assets/images/` |
| Brand colors (CSS variables) | `src/styles/globals.css` |
| Hero copy & badges | `HERO_*` in `src/data/config.js` |
| Demo page copy / QR | `src/pages/Demo.jsx` |

## Image safety rules

`assetMap.js` only assigns a photo to a dish when there is a confident
visual match. Anything without a match renders an elegant typographic
placeholder — no wrong photos are ever attached to dishes.

## What's a real demo only

- Cart adds work, subtotals are dynamic, "Continuar pedido" opens an
  explanation modal — there is no payments wiring.
- WhatsApp widget is **contact-only**. There is no
  "Order via WhatsApp" CTA anywhere.
- Hours are listed as "Por confirmar" since they were not provided.

## What would still be needed for production

- Hooked-up checkout (pickup / delivery / taxes / tips / payments)
- Real Instagram URL plugged into `INSTAGRAM_URL`
- Confirmed business hours
- POS or order-management system integration
- Domain + email forwarding
- Analytics + cookie consent
- Real-photo refresh of any dishes flagged for placeholders

---

*Demo created by RuutDev.*
