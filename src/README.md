# EdenCode

A modern website for EdenCode - a Quantum+AI startup specializing in real-time AI-decoder technology for quantum error correction ecosystems.

## 🌟 Overview

EdenCode combines cutting-edge quantum error correction with AI-powered decoding algorithms. This website showcases our technology, team, research, and features an interactive browser-based demo of our quantum error correction simulation.

## 🎨 Features

- **Interactive Demo**: Real-time quantum error correction simulation running directly in the browser using Pyodide
- **Team Profiles**: Meet our founders and advisors
- **Blog/Research**: Technical articles and research insights
- **Responsive Design**: Beautiful, modern UI with custom color palette
- **Company Branding**: Consistent design system throughout

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4.0
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Charts**: Recharts
- **Python Integration**: Pyodide (for running Python code in browser)
- **Animation**: Motion (Framer Motion)

## 🎨 Brand Colors

- Primary Orange: `#F4A135`
- Light Cream: `#FFF9D0`
- Accent Red: `#EB612E`
- Dark Brown: `#553128`

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/edencode.git
cd edencode
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🏗️ Project Structure

```
/
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── PythonDemo.tsx   # Interactive quantum demo
│   ├── DemoControls.tsx # Demo parameter controls
│   └── ...              # Other components
├── pages/               # Page components
│   ├── demo.tsx         # Demo page
│   ├── team.tsx         # Team page
│   ├── blogs.tsx        # Blog listing
│   └── blog-post.tsx    # Individual blog post
├── public/              # Static assets
│   └── logo.png         # Company logo
├── styles/              # Global styles
│   └── globals.css      # Tailwind and custom styles
├── App.tsx              # Main app component with routing
└── main.tsx             # Entry point
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/edencode.git
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"
   - Your site will be live in minutes!

3. **Custom Domain (Optional):**
   - Go to your project settings on Vercel
   - Navigate to "Domains"
   - Add your custom domain (e.g., `edencode.com`)
   - Follow DNS configuration instructions

### Deploy to Netlify

1. **Build the project:**
```bash
npm run build
```

2. **Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository for automatic deployments

### Deploy to GitHub Pages

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json:**
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. **Deploy:**
```bash
npm run deploy
```

## 🔧 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

## 🧪 Demo Page

The interactive demo features:
- **Real-time visualization** of quantum error correction
- **Adjustable parameters**: Grid size, error rates, decoder velocity, etc.
- **Boundary conditions**: Open vs. periodic topologies
- **Message-passing decoder**: Manhattan-distance-based algorithm
- **Runs entirely in browser** using Pyodide to execute Python code

### Demo Parameters:
- **Decoder Active**: Toggle the error correction on/off
- **Update Speed**: Animation frames per second (1-20 fps)
- **Grid Size**: Detector grid dimensions (20×20 to 100×100)
- **Time Window**: Syndrome history tracking (6-20 steps)
- **Bit Flip Rate**: Physical error probability (0-0.05)
- **Measurement Error Rate**: Syndrome detection noise (0-0.05)
- **Decoder Velocity**: Message propagation rounds per step (3-20)
- **Boundary Condition**: Open (planar) or Periodic (toric)

## 📝 Adding Content

### Add a New Blog Post

1. Edit `/pages/blogs.tsx` to add your post to the `blogPosts` array:
```typescript
{
  id: 'your-post-slug',
  title: 'Your Post Title',
  author: 'Author Name',
  date: 'Month DD, YYYY',
  excerpt: 'Brief description...',
  image: 'image-url',
  readTime: '5 min read'
}
```

2. Create a new route in `/App.tsx` for the full post
3. Add content in `/pages/blog-post.tsx` or create a new component

### Add a New Team Member

Edit `/pages/team.tsx` and add to the `founders` or `advisors` array:
```typescript
{
  name: 'Name',
  role: 'Role/Title',
  bio: 'Biography...',
  image: 'image-url'
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by EdenCode.

## 📧 Contact

For questions or inquiries, please contact us through our website or reach out to our team.

---

Built with ❤️ by the EdenCode Team
