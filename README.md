# DevFlow - Developer Platform UI

A modern, responsive web application built with React and Vite, featuring Razorpay-style animations and a comprehensive developer platform interface.

## 🚀 Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd "UI Assignment"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:5173
   ```

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Linting

To check for code quality issues:

```bash
npm run lint
```

## 📚 Frameworks & Libraries Used

### Core Framework
- **React** (v19.2.0) - JavaScript library for building user interfaces
- **React DOM** (v19.2.0) - React renderer for the web

### Build Tool
- **Vite** (v7.2.4) - Next-generation frontend build tool for fast development and optimized production builds
- **@vitejs/plugin-react** (v5.1.1) - Official Vite plugin for React

### Styling
- **Tailwind CSS** (v4.1.17) - Utility-first CSS framework for rapid UI development
- **@tailwindcss/vite** (v4.1.17) - Vite plugin for Tailwind CSS

### Animation
- **GSAP (GreenSock Animation Platform)** (v3.13.0) - Professional-grade animation library for creating smooth, high-performance animations
  - Used for scroll-triggered animations, card transitions, and complex scroll-jacked sections

### Icons
- **React Icons** (v5.5.0) - Popular icon library with support for multiple icon sets

### Development Tools
- **ESLint** (v9.39.1) - JavaScript linter for code quality
- **@eslint/js** (v9.39.1) - ESLint JavaScript configuration
- **eslint-plugin-react-hooks** (v7.0.1) - ESLint rules for React Hooks
- **eslint-plugin-react-refresh** (v0.4.24) - ESLint plugin for React Fast Refresh

### Type Definitions
- **@types/react** (v19.2.5) - TypeScript definitions for React
- **@types/react-dom** (v19.2.3) - TypeScript definitions for React DOM

## 📁 Project Structure

```
UI Assignment/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and other assets
│   ├── components/        # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── FeatureSection.jsx
│   │   ├── IndustrySolutions.jsx
│   │   └── ...
│   ├── data/              # JSON data files
│   │   ├── features.json
│   │   ├── navDropdowns.json
│   │   └── ...
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Project dependencies
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🎨 Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Scroll Animations**: GSAP-powered scroll-triggered animations
- **Razorpay-style UI**: Modern dropdown menus and card layouts
- **Component-based Architecture**: Reusable React components
- **Performance Optimized**: Fast builds and hot module replacement with Vite

## 📸 Screenshots

### Hero Section - Build Faster Together
![Hero Section](./screenshots/hero-section.png)
*Hero section featuring "Build Faster Together" headline with call-to-action buttons and feature tags (Team Collaboration, Version Control, Cloud Integration). Includes a stylized portrait with geometric blue and white background.*

### Features Section - Tools that Feel Simple
![Features Section](./screenshots/features-section.png)
*Features section showcasing company logos (Apple, Meta, Netflix, Spotify, Adobe, Samsung, Oracle, Google, Microsoft, Amazon) and the headline "Tools that feel simple, even when they are powerful" with descriptive text.*

### Developer Tools Section
![Developer Tools](./screenshots/developer-tools-section.png)
*Developer Tools section displaying four feature cards: Server Infrastructure, Version Control with Git integration, Cloud Dashboard, and Mobile App Dashboard. Each card shows relevant images and descriptions.*

### Platform Dropdown Menu
![Platform Dropdown](./screenshots/platform-dropdown.png)
*Platform dropdown menu open, showing payment-related features with icons. Left column includes Payment Gateway, Payment Links, Payment Pages, QR Codes, UPI Payments, International Payments, and more. Right column features Magic Checkout, Subscriptions, Instant Settlement, Optimizer, and POS Terminal.*

### Innovation Section - Instant Deploy & Smart Workflows
![Innovation Section](./screenshots/innovation-section.png)
*Innovation section featuring two large feature cards: "Instant Deploy" (30 seconds deployment, 99.9% uptime) and "Smart Workflows" (5X faster CI/CD, 80% reduced build times). Both cards include call-to-action buttons.*

### Developer Section - For Developers by Developers
![Developer Section](./screenshots/developer-section.png)
*Developer section with headline "DevFlow is built <for developers by developers>" highlighted in green. Shows technology scroll (CURL, JAVA, GO, PYTHON, PHP, NODE JS) and three feature blocks: Integrations, API Reference, and Webhooks.*

### Code Snippet Section
![Code Snippet](./screenshots/code-snippet.png)
*Interactive code snippet section titled "Try it out for yourself" with a YAML code editor showing a DevFlow Deploy workflow example. Includes language selector, copy button, and expand options.*

### Testimonials Section - Stories from Builders
![Testimonials Section](./screenshots/testimonials-section.png)
*Testimonials section titled "Stories from builders" with horizontal scrollable profile cards. Features portraits of team members including Luca Rivera (CTO, ByteFoundry), Zoe Kim (Platform PM, Skylink), Nikhil Bose (Founder, Sprout Labs), and others.*

### Full Page View
![Full Page](./screenshots/full-page.png)
*Complete page view showing the header, hero section with "Supercharge your business with DevFlow" call-to-action, testimonials, and comprehensive footer with company links, platform links, support links, and social media icons.*

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

- **Vite**: Configured in `vite.config.js`
- **Tailwind CSS**: Configured via `@tailwindcss/vite` plugin
- **ESLint**: Configured in `eslint.config.js`

## 📄 License

This project is for educational/assignment purposes.
