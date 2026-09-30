# 🏛️ Jain Cloth Centre - Heritage E-Commerce & Landing Platform

> **40+ Years of Trusted Fashion • Heritage • Craftsmanship • Style**

Jain Cloth Centre is a modern web application built for the historic handloom & textile destination located in **Ilkal, Bagalkot District, Karnataka**. Founded in 1978, Jain Cloth Centre brings together centuries of Ilkal pit-loom saree weaving integrity, luxury bridal trousseaus, menswear, and family ethnic fashion.

---

## 🚀 Key Features

### 1. Main Application
- **Home Page (`/`)**: High-impact editorial hero banner, catalog grid, heritage sarees spotlight, special moments, multi-generational fashion stories, and location guide.
- **Collections Page (`/collections`)**: Complete product catalog featuring hierarchical category navigation (Men, Women, Kids, Collections), product filtering, search, and quick view capabilities.
- **About Us Page (`/about`)**: Story of 40+ years of handloom artistry, master artisan guilds (*Shri Basavaraj & Guild*, *Sunita Devi & Kasuti Circle*), brand pillars, and showroom atelier details.

### 2. Standalone Landing Page (`/landing`)
A fully isolated marketing landing page designed alongside the main site with zero style interference:
- **Announcement Bar**: Burgundy header with subtle gold typography.
- **Hero Section**: Editorial introduction with floating handloom sanctuary badge.
- **Shop by Category**: Visual cards for Ilkal Sarees, Bridal Wear, Women, Men, and Kids.
- **Ilkal Heritage**: Storytelling split section highlighting GI-Tagged (#43) pit-loom craftsmanship, Chikki Paras patterns, and Topi Teni pallus.
- **Bridal & Trousseau Atelier**: Dramatic fashion showcases for weddings and receptions.
- **Trust Guarantee Grid**: 4-point trust assurance cards.
- **Bulk Order Section**: Special wedding & festive bulk order concierge form.
- **Style Gallery**: Instagram lookbook feed.
- **Interactive Google Maps Store Section**: Live map embed pointing to the Ilkal showroom.
- **Burgundy & Gold Footer**: Custom footer with quick links and official social channels.

### 3. Interactive Modals & Concierge
- 📅 **Appointment Modal**: Book in-person drape styling or virtual video consultations.
- 📦 **Bulk Order Modal**: Submit bulk requests for wedding trousseaus and festive events.
- 🔍 **Search Modal**: Instant search across sarees, bridal wear, and ethnic attire.
- 👁️ **Quick View Modal**: Interactive product preview popups.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 18
- **Build Tooling**: Vite
- **Icons**: Lucide React + Custom SVG helpers
- **Styling**: Vanilla CSS (Custom Design System with CSS variables, rich burgundy `#7A0C2E` & gold `#C59B27` palette)
- **State & Routing**: React Context API (`UIContext`) with browser history integration for `/`, `/collections`, `/about`, and `/landing`.

---

## 📂 Project Structure

```text
jain-cloth/
├── public/
│   └── assets/
│       └── images/              # High-resolution product, showroom & heritage imagery
├── src/
│   ├── components/              # Core reusable UI components
│   │   ├── modals/              # Appointment, Bulk, QuickView, Search modals
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CollectionsGrid.jsx
│   │   ├── HeritageSarees.jsx
│   │   ├── CollectionsPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── StoreLocation.jsx    # Live Google Maps showroom section
│   │   └── Footer.jsx
│   ├── context/
│   │   └── UIContext.jsx        # Global UI state and URL path management
│   ├── pages/
│   │   └── LandingPage/         # Isolated Marketing Landing Page
│   │       ├── LandingPage.jsx
│   │       ├── LandingPage.css  # Scoped landing page styles (.landing-*)
│   │       └── components/      # AnnouncementBar, LandingNavbar, Hero, StoreSection, etc.
│   ├── App.jsx                  # Main view switcher
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global design system & core component styles
├── index.html
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Ensure you have **Node.js** (v16+) and **npm** installed on your system.

### 1. Installation

Clone the repository and install dependencies:

```bash
cd "Jain Cloth"
npm install
```

### 2. Run Development Server

Start the local dev server:

```bash
npm run dev
```

Open your browser and navigate to:
- Main Website: `http://localhost:5173/`
- Collections Catalog: `http://localhost:5173/collections`
- About Us Page: `http://localhost:5173/about`
- Standalone Landing Page: `http://localhost:5173/landing`

### 3. Build for Production

Build the optimized production bundle:

```bash
npm run build
```

The output files will be generated in the `dist/` directory.

---

## 📍 Store & Business Details

- **Flagship Showroom Address**:  
  Opposite SVM College, Bus Stand Road, Old Municipality Road, Ilkal, Bagalkot, Karnataka – 587125
- **Phone & WhatsApp**: [+91 98048 82888](https://wa.me/919804882888)
- **Showroom Hours**: Monday – Sunday: 10:00 AM – 9:00 PM (Open on all festive days)
- **Official Socials**:
  - Instagram: [@jainclothcentre](https://www.instagram.com/jainclothcentre)
  - Facebook: [Jain Cloth Centre Ilkal](https://www.facebook.com/jainclothcentre.ilkal/)
  - Google Maps Location: [Open on Google Maps](https://maps.google.com/?q=Jain+Cloth+Centre+Ilkal)

---

## 📄 License

© 2026 Jain Cloth Centre. All rights reserved.  
*Authentic Handlooms • Bagalkot District • Karnataka Heritage*
