# 📰 E-News-Paper

A modern, responsive digital newspaper platform built with Next.js 14 and TypeScript.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🌟 Features

- 📱 Responsive design with mobile-first approach
- 🌓 Dark/Light mode support
- 🧭 Modern navigation system
- 👤 User profile integration
- 🎨 Customizable UI components
- 🌐 Social media integration

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** Custom UI components
- **Icons:** SVG icons
- **Font:** Geist (Vercel's font)

## 📁 Project Structure

```
├── app/                  # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          
│   ├── navigation/      # Navigation components
│   ├── sections/        # Page sections
│   └── ui/             # Reusable UI components
├── lib/                 # Utility functions
└── public/             # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd e-news-paper
```

2. Install dependencies
```bash
pnpm install
```

3. Run the development server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 💻 Development

### Key Components

- **NavBar (`components/navigation/nav-bar.tsx`)**: Main navigation component with mobile and desktop versions
- **UserProfile (`components/navigation/user-profile.tsx`)**: User profile management
- **HeroSection (`components/sections/hero-section.tsx`)**: Main landing section
- **UI Components**: Button, Input, Label, Switch, Tooltip, and SocialIcon components

### Styling

- Utilizes Tailwind CSS for responsive design
- Custom components.json for component configurations
- PostCSS configuration for optimal CSS processing

### TypeScript Configuration

- Strict type checking enabled
- Path aliases configured for better imports
- Next.js specific types included

## 🌐 Deployment

The application can be easily deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/e-news-paper)

For other deployment options, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📝 Contributing

Contributions are welcome! Please read our contributing guidelines to get started.

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.
