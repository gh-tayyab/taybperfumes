# TAYB Perfumes — Next.js Website

A luxury perfume e-commerce website inspired by [TAYBperfumes.com](https://TAYBperfumes.com/), built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
TAYB-perfumes/
├── app/
│   ├── layout.tsx              # Root layout (header, footer, cart)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles + animations
│   ├── men/page.tsx            # Men's collection
│   ├── women/page.tsx          # Women's collection
│   ├── bundles/page.tsx        # Bundles
│   ├── gift-sets/page.tsx      # Gift sets
│   ├── product/[slug]/page.tsx # Product detail page
│   ├── about/page.tsx          # About Us
│   ├── contact/page.tsx        # Contact form
│   ├── checkout/page.tsx       # Checkout
│   ├── blogs/page.tsx          # Blog listing
│   ├── privacy/page.tsx        # Privacy Policy
│   ├── shipping/page.tsx       # Shipping & Delivery
│   ├── returns/page.tsx        # Returns & Exchanges
│   ├── terms/page.tsx          # Terms & Conditions
│   └── not-found.tsx           # 404 page
├── components/
│   ├── Header.tsx              # Fixed nav with mobile drawer
│   ├── Footer.tsx              # Footer with newsletter signup
│   ├── AnnouncementBar.tsx     # Scrolling marquee
│   ├── CartDrawer.tsx          # Slide-in cart panel
│   └── ProductCard.tsx         # Product card with hover
└── lib/
    ├── data.ts                 # Products, reviews, helpers
    └── cart-context.tsx        # Cart state (Context + localStorage)
```

---

## ✨ Features

- **All Pages**: Home, Men, Women, Bundles, Gift Sets, Product Detail, About, Contact, Checkout, Blog, Privacy, Shipping, Returns, Terms, 404
- **Cart**: Slide-out drawer, add/remove/quantity, persisted to localStorage
- **Product Detail**: Image gallery, accordion notes, related products, quick add
- **Checkout**: Full form with COD/bank transfer, order confirmation screen
- **Responsive**: Mobile-first, works on all screen sizes
- **Design**: Dark luxury aesthetic, gold accents, Cormorant Garamond display font
- **Animations**: Marquee bar, fade-in-up, image hover transitions

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#1A1A1A` (charcoal) |
| Accent | `#C9A96E` (gold) |
| Text | `#F5F0E8` (cream) |
| Display font | Cormorant Garamond |
| Body font | Jost |

---

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)
- **Context API** (cart state)
- **Google Fonts** (Cormorant Garamond + Jost)
