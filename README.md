# Greenboard Client

The public-facing website for Greenboard — a modern, high-performance Next.js application that renders dynamic pages composed of reusable sections managed from the admin dashboard.

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | React framework with App Router |
| **React 19** | UI library |
| **Tailwind CSS v4** | Utility-first styling |
| **GSAP** | Advanced animations & scroll effects |
| **TanStack Query** | Server state management |
| **Zustand** | Client state management |
| **Stripe** | Payment integration |
| **Swiper** | Touch sliders & carousels |

---

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (common)/           # Public pages layout
│   │   ├── page.tsx        # Homepage
│   │   ├── [page]/page.tsx # Dynamic CMS pages
│   │   ├── products/       # Product listing & detail
│   │   ├── news/           # Blog articles
│   │   ├── account/        # Customer dashboard
│   │   └── ...
│   ├── api/revalidate/     # On-demand cache revalidation
│   └── layout.tsx          # Root layout (fetches global data)
├── components/
│   ├── PageSections/       # Dynamic section renderer
│   ├── Share/              # Header, footer, providers
│   └── Common/             # Reusable UI components
├── hooks/
│   ├── server/             # Server-side data fetching
│   └── usePageComponent.ts # Client-side page logic
├── provider/
│   ├── PageProvider.tsx    # Global pages context
│   ├── SettingsProvider.tsx
│   └── GlobalProvider.tsx
├── config/                 # API client & interceptors
├── types/                  # TypeScript definitions
└── utils/                  # Helpers & formatters
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- Running [Greenboard Backend](../backend/)

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file:

```env
# API
NEXT_PUBLIC_API_URL=http://localhost:5002/api
NEXT_PUBLIC_SERVER_URL=http://localhost:5002

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Cache Revalidation (shared secret with admin)
REVALIDATE_SECRET_TOKEN=your-secret-token-here
```

### Running the App

```bash
# Development server
npm run dev

# Production build
npm run build
npm start
```

The site will be available at `http://localhost:3000`.

---

## Architecture

### Dynamic Page Rendering

Pages are not hardcoded. Instead, the root layout fetches all pages from the backend and passes them via `PageProvider`. Each route (`[page]/page.tsx`) resolves the correct page and renders its sections using `SectionResolver`.

```tsx
// Simplified flow
layout.tsx → getPages() → PageProvider → [page]/page.tsx → PageContent → SectionResolver
```

### Data Fetching & Caching

Server-side fetches use Next.js `fetch` with **cache tags**:

| Fetch | Tag |
|-------|-----|
| `getPages()` | `pages` |
| `getPageBySlug()` | `pages`, `page-{slug}` |
| `getSettings()` | `settings` |

The `/api/revalidate` endpoint allows the admin dashboard to purge these caches on-demand, ensuring content updates reflect immediately.

### SEO

Every page generates dynamic metadata (`title`, `description`, `Open Graph`, `canonical`) via `generateMetadata()` using the page's SEO configuration from the backend.

---

## Key Features

- **Dynamic CMS Pages** — Content managed entirely from the admin dashboard
- **Section-Based Layouts** — Reusable, draggable sections per page
- **Real-Time Cache Invalidation** — Content updates reflect instantly
- **E-Commerce** — Product catalog, cart, and Stripe checkout
- **Customer Accounts** — Login, register, wishlist, order history
- **Blog** — News articles with categories and comments
- **3D Visualizer** — Photo sphere / 3D product viewer
- **Responsive Design** — Mobile-first with smooth GSAP animations

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Production server |
| `npm run lint` | Run ESLint |

---

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel --prod
```

### Docker

Build a standalone output and deploy behind a reverse proxy:

```bash
npm run build
# Uses output: 'standalone' for optimized containerization
```

---

## License

Private — All rights reserved.
# jual
