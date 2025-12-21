
# Riverway Logistics – Professional Flatbed Carrier Website

A modern, professional website for Riverway Logistics, a Texas-based flatbed carrier serving Texas and the Southeast.

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

### Formspree Setup (for Quote Form)

1. Create a free account at [Formspree.io](https://formspree.io)
2. Create a new form and copy the endpoint URL
3. Add the endpoint to your environment:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

In Replit, add this as a Secret in the Secrets tab.

Form submissions will be sent to the email associated with your Formspree account. Configure Formspree to forward to `dispatch@riverwaylogistics.com`.

## Features

- Sticky authority bar with MC/DOT numbers and FMCSA Snapshot link
- Quote request modal with form validation
- Driver recruitment section with detailed perks
- Trust & Compliance section with photo gallery and document accordions
- Back-to-top button
- Fully responsive design

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS
- Lucide React Icons
