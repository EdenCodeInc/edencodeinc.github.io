import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Timeline } from "./components/Timeline";
import { Footer } from "./components/Footer";
import ResearchPage from "./pages/research";
import BlogAIQuantumErrorCorrection from "./pages/blog-ai-quantum-error-correction";
import BlogLLMAccuracy from "./pages/blog-llm-accuracy";
import BlogNvidiaIsing from "./pages/blog-nvidia-ising";
import BlogGraphTransformer from "./pages/blog-graph-transformer";
import BlogDecoderFactory from "./pages/blog-decoder-factory";
import CareersPage from "./pages/careers";

// Get base path at module level
const BASE_PATH = import.meta.env?.BASE_URL || '/';

// Client-side navigation must keep the tab title in step (the prerendered
// shells only cover the first load). Mirrors scripts/prerender.mjs.
const TITLES: Record<string, string> = {
  "/": "EdenCode - Unlock Quantum with AI",
  "/blogs": "Research — EdenCode",
  "/blog-decoder-factory": "An Immune System for Quantum Computers: Building an AI Decoder Factory for Quantum LDPC Codes",
  "/blog-graph-transformer": "One Decoder for Every Quantum Code: EdenCode Releases the Graph Transformer Decoder",
  "/blog-nvidia-ising": "Scaling AI-Powered Quantum Error Correction with NVIDIA Ising and GPU Compute",
  "/blog-llm-accuracy": "How Focused Are LLMs? — EdenCode Research",
  "/blog-ai-quantum-error-correction": "AI for Quantum Error Correction — EdenCode Research",
  "/careers": "Careers — EdenCode",
};

function AppContent() {
  const [currentPage, setCurrentPage] = useState<string>("/");

  useEffect(() => {
    document.title = TITLES[currentPage] ?? TITLES["/"];
  }, [currentPage]);

  useEffect(() => {
    // Simple client-side routing
    const normalizePath = (raw: string) => {
      let p = raw;
      if (p.startsWith(BASE_PATH)) {
        p = p.slice(BASE_PATH.length - 1); // Keep leading slash
      }
      if (!p.startsWith('/')) {
        p = '/' + p;
      }
      // Strip trailing slash (except for root) so "/blog-foo/" and "/blog-foo"
      // both match. GitHub Pages 301-redirects extensionless paths that
      // resolve to a directory onto the trailing-slash form.
      if (p.length > 1 && p.endsWith('/')) {
        p = p.slice(0, -1);
      }
      return p;
    };

    const handleNavigation = () => {
      setCurrentPage(normalizePath(window.location.pathname));
    };

    // Listen for popstate (back/forward navigation)
    window.addEventListener("popstate", handleNavigation);

    // Handle initial page load
    handleNavigation();

    // Intercept link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link && link.href && link.origin === window.location.origin) {
        const url = new URL(link.href);
        const path = normalizePath(url.pathname);

        const validPaths = ["/", "/blogs", "/blog-ai-quantum-error-correction", "/blog-llm-accuracy", "/blog-nvidia-ising", "/blog-graph-transformer", "/blog-decoder-factory", "/careers"];
        if (validPaths.includes(path)) {
          e.preventDefault();
          window.history.pushState({}, "", link.href);
          setCurrentPage(path);
          window.scrollTo(0, 0);
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (currentPage === "/blogs") {
    return <ResearchPage />;
  }

  if (currentPage === "/blog-ai-quantum-error-correction") {
    return <BlogAIQuantumErrorCorrection />;
  }

  if (currentPage === "/blog-llm-accuracy") {
    return <BlogLLMAccuracy />;
  }

  if (currentPage === "/blog-nvidia-ising") {
    return <BlogNvidiaIsing />;
  }

  if (currentPage === "/blog-graph-transformer") {
    return <BlogGraphTransformer />;
  }

  if (currentPage === "/blog-decoder-factory") {
    return <BlogDecoderFactory />;
  }

  if (currentPage === "/careers") {
    return <CareersPage />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main">
        <Hero />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
