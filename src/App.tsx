import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Technology } from "./components/Technology";
import { Features } from "./components/Features";
import { Stats } from "./components/Stats";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import DemoPage from "./pages/demo";
import TeamPage from "./pages/team";
import ResearchPage from "./pages/research";
import BlogAIQuantumErrorCorrection from "./pages/blog-ai-quantum-error-correction";
import BlogLLMAccuracy from "./pages/blog-llm-accuracy";
import { ContactPage } from "./components/ContactPage";

// Get base path at module level
const BASE_PATH = import.meta.env?.BASE_URL || '/';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("/");

  useEffect(() => {
    // Simple client-side routing
    const handleNavigation = () => {
      // Remove base path to get the actual route
      let path = window.location.pathname;
      if (path.startsWith(BASE_PATH)) {
        path = path.slice(BASE_PATH.length - 1); // Keep leading slash
      }
      if (!path.startsWith('/')) {
        path = '/' + path;
      }
      setCurrentPage(path);
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
        let path = url.pathname;
        
        // Remove base path to get the actual route
        if (path.startsWith(BASE_PATH)) {
          path = path.slice(BASE_PATH.length - 1); // Keep leading slash
        }
        if (!path.startsWith('/')) {
          path = '/' + path;
        }
        
        const validPaths = ["/", "/demo", "/team", "/blogs", "/blog-ai-quantum-error-correction", "/blog-llm-accuracy", "/contact"];
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

  if (currentPage === "/demo") {
    return <DemoPage />;
  }

  if (currentPage === "/team") {
    return <TeamPage />;
  }

  if (currentPage === "/blogs") {
    return <ResearchPage />;
  }

  if (currentPage === "/blog-ai-quantum-error-correction") {
    return <BlogAIQuantumErrorCorrection />;
  }

  if (currentPage === "/blog-llm-accuracy") {
    return <BlogLLMAccuracy />;
  }

  if (currentPage === "/contact") {
    return (
      <div className="min-h-screen">
        <Navigation />
        <ContactPage />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Technology />
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}
