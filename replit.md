# Riverway Logistics Website

## Overview

This is a professional marketing website for Riverway Logistics, a Texas-based flatbed trucking carrier. The site serves two primary audiences: freight brokers looking to book loads and truck drivers seeking employment. It's a single-page application with section-based navigation, featuring a quote request system, driver recruitment information, and compliance documentation.

**Business Context:** Asset-based flatbed motor carrier operating in Texas and the Southeast region. MC: 1473682, DOT: 3955747, based in Spring, TX.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Stack
- **Framework:** React 18 with TypeScript, built using Vite
- **Styling:** Tailwind CSS (loaded via CDN in index.html)
- **Icons:** Lucide React for consistent iconography
- **No routing library:** Single-page design with anchor-based section navigation

### Component Structure
The application uses a component-based architecture under `src/components/`:
- `QuoteForm.tsx` - Modal form for freight quote requests with Formspree integration
- `TrustCompliance.tsx` - Photo gallery and documentation accordion section
- `BackToTop.tsx` - Scroll-to-top utility button
- `App.tsx` - Main layout containing Header, Hero, Services, Lanes, Drivers, and Contact sections

### Key Design Patterns
1. **Sticky Navigation:** Authority bar fixed at top (40px height), header sticky below it
2. **Modal Pattern:** Quote form uses focus trapping, ESC to close, overlay click to close
3. **Accordion Pattern:** Used for document sections and driver benefits details
4. **Responsive Design:** Mobile-first with hamburger menu for navigation

### Form Handling
- Quote submissions sent to Formspree endpoint
- Environment variable `VITE_FORMSPREE_ENDPOINT` configures the submission URL
- Fallback mailto link to `dispatch@riverwaylogistics.com` if Formspree unavailable
- Form includes validation states: idle, submitting, success, error

### Static Assets
- Images stored in `/public/images/` (logo, truck photos)
- Videos for trust/compliance gallery
- Hero and gallery images should be optimized under 250KB

## External Dependencies

### Third-Party Services
- **Formspree:** Form submission backend for quote requests. Requires `VITE_FORMSPREE_ENDPOINT` environment variable with the form endpoint URL (e.g., `https://formspree.io/f/YOUR_FORM_ID`)

### External Links
- **FMCSA Snapshot:** Links to federal carrier verification at `https://safer.fmcsa.dot.gov/query.asp?...`
- **Google Fonts:** Inter font family loaded from Google Fonts CDN

### Email Integration
- Dispatch inquiries: `dispatch@riverwaylogistics.com`
- Driver recruiting: `recruiting@riverwaylogistics.com`

### Build Tools
- Vite 5.x for development server and production builds
- Development server runs on port 5000, bound to all interfaces (0.0.0.0)