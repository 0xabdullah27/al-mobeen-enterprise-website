# Al Mobeen Enterprise — Official Corporate Website

[![Next.js](https://img.shields.io/badge/Next.js-16.3.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

A modern, high-performance web platform for **Al Mobeen Enterprise** — a trusted bulk industrial chemical distributor and trader operating from **Jodia Bazar, Karachi, Pakistan** since **1995**.

---

## 🌟 Key Features

- 🎨 **Monochromatic Design System**: Custom Oxford Blue & Platinum color palette with smooth, flicker-free Light/Dark Mode theme switching.
- 🌐 **Tri-Lingual Localization**: Native support for **English**, **Roman Urdu**, and **Urdu (RTL with Noto Nastaliq typography)**.
- 🧪 **80+ Chemical Product Catalog**: Multi-filter catalog by chemical category (Solvents, Plasticizers, Pigments, Resins, Acids, etc.) with instant search, technical grade specs, and packaging details.
- 📋 **Interactive Quote Basket Drawer**: Add items to a persistent quote list and submit bulk inquiries directly via custom form or instant WhatsApp.
- 🧱 **Shadcn UI Components**: Clean, accessible component system built with `class-variance-authority`, `@radix-ui/react-slot`, `clsx`, and `tailwind-merge`.
- ⚡ **Full SSG Prerendering**: Pre-rendered static pages with zero runtime overhead for lightning-fast performance across Pakistan and worldwide.
- 📱 **Mobile First & Responsive**: Optimized navigation bar, mobile drawer, and interactive touch controls across mobile, tablet, and desktop screens.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Vanilla CSS Custom Properties |
| **UI Components** | [Shadcn UI](https://ui.shadcn.com/) (`cva`, `@radix-ui/react-slot`) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/), [Lenis](https://lenis.darkroom.engineering/) |
| **3D Visuals** | [Three.js](https://threejs.org/) |

---

## 📂 Project Structure

```text
src/
├── app/                      # Next.js App Router Pages
│   ├── about/                # 30-Year Heritage & Sourcing Commitments
│   ├── contact/              # Bulk Quote Request Form & Contact Info
│   ├── industries/           # Industrial Sectors (Paints, PVC, Inks, etc.)
│   ├── products/             # Filterable Chemical Catalog & Product Details
│   ├── api/quote/            # Serverless Quote Request API Endpoint
│   ├── globals.css           # Design Tokens, Theme Overrides & Base Styles
│   └── layout.tsx            # Global Root Layout & Theme Providers
├── components/               # UI & Layout Components
│   ├── home/                 # Hero, Categories, BestSellers, WhyChooseUs, CTABand
│   ├── products/             # ProductCard, ProductCatalog, ProductDetailActions
│   ├── ui/                   # Shadcn Button, Toast, ScrollReveal, PageHero
│   ├── Navbar.tsx            # Responsive Sticky Navigation Header & Drawer
│   ├── Footer.tsx            # Comprehensive Footer & Links
│   └── QuoteListDrawer.tsx   # Floating Interactive Quote Basket Drawer
├── data/                     # Data Models & Content
│   ├── products.ts           # 80+ Industrial Chemicals Dataset
│   ├── categories.ts         # Chemical Categories & Tints
│   ├── industries.ts         # Industrial Sectors & Target Applications
│   └── translations.ts       # Tri-lingual Translations Dictionary (EN/Roman/UR)
└── lib/                      # Helper Functions & Utilities
    └── utils.ts              # `cn()` Classnames Combiner (clsx + tailwind-merge)
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 18+** and **npm** installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/al-mobeen-enterprise-website.git
   cd al-mobeen-enterprise-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Build & Production

To compile and verify a production build:

```bash
# Build the optimized production bundle
npm run build

# Start the production server
npm start
```

---

## 📍 Office Location & Contact

**Al Mobeen Enterprise**  
G/9, Golden Center, Weaver Lane,  
Jodia Bazar, Karachi, Pakistan  

- 📞 **Phone**: 0332-1134530 | 0300-2268847 | 0315-2703824
- ✉️ **Email**: almobeenenterprise@gmail.com
- ⏱️ **Business Hours**: Monday – Saturday: 9:00 AM – 6:00 PM
