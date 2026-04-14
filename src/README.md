# EdenCode

A modern website for EdenCode - a Quantum+AI startup building real-time AI decoder technology for quantum error correction ecosystems.

## Overview

EdenCode builds AI-powered quantum error correction software to accelerate fault-tolerant quantum computing. This website showcases our technology, research, and career opportunities.

## Features

- **Research Blog**: Technical articles including NVIDIA Ising collaboration and Graph Transformer Decoder release
- **Timeline**: Development milestones and announcements
- **Careers**: Open positions at EdenCode
- **Dark/Light Mode**: Terminal-themed UI with theme switching
- **Responsive Design**: Mobile-friendly across all pages

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4.0
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx             # Homepage hero with typing effect
│   ├── Timeline.tsx         # Development timeline
│   ├── Navigation.tsx       # Site navigation
│   └── Footer.tsx           # Site footer
├── pages/
│   ├── research.tsx                      # Blog listing (System Log)
│   ├── blog-graph-transformer.tsx        # Graph Transformer Decoder PR
│   ├── blog-nvidia-ising.tsx             # NVIDIA Ising collaboration blog
│   ├── blog-llm-accuracy.tsx             # LLM accuracy research
│   ├── blog-ai-quantum-error-correction.tsx  # AI for QEC intro
│   └── careers.tsx                       # Careers page
├── contexts/
│   └── ThemeContext.tsx      # Dark/light theme provider
├── styles/
│   └── globals.css          # CSS variables and theme definitions
├── App.tsx                  # Main app with SPA routing
└── main.tsx                 # Entry point
```

## Development

```bash
npm install
npm run dev
```

## Deployment

Deployed to GitHub Pages via `edencodeinc.github.io`. Push to `main` branch triggers deployment.

## Contact

hwanda@edencode.ai | www.edencode.ai

---

EdenCode Inc. All rights reserved.
