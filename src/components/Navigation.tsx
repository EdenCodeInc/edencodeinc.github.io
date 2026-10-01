import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useTheme } from "../contexts/ThemeContext";

// Trace the mark once per session, on the home page only. Decided at module
// load so the first paint already carries the class (no flicker).
const LOGO_INTRO_KEY = "ec-logo-intro";
const shouldPlayLogoIntro = (() => {
  try {
    if (window.location.pathname.replace(/\/$/, "") !== "") return false;
    if (sessionStorage.getItem(LOGO_INTRO_KEY)) return false;
    sessionStorage.setItem(LOGO_INTRO_KEY, "1");
    return true;
  } catch {
    return false;
  }
})();

const navLinks = [
  { path: "/blogs", label: "Research" },
  { path: "/careers", label: "Careers" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setCurrentPath(window.location.pathname.replace(/\/$/, "") || "/");
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Blog posts live under /blog-*, so they count as "Research".
  const isActive = (path: string) =>
    currentPath === path || (path === "/blogs" && currentPath.startsWith("/blog-"));

  const ThemeIcon = theme === "dark" ? Sun : Moon;
  const themeLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 bg-paper/85 backdrop-blur-md border-b border-rule transition-colors duration-300 ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="logo-hover flex items-center gap-3">
          <Logo className="w-8 h-8 relative -top-px" intro={shouldPlayLogoIntro} />
          <span className="font-display font-bold text-[18px] tracking-[-0.02em] text-ink">
            Eden<span className="logo-word-accent text-rust">Code</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={`nav-link ${isActive(link.path) ? "is-active" : ""}`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="p-2 -mr-2 text-ink-2 hover:text-ink transition-colors"
          >
            <span className="theme-icon" style={{ transform: theme === "dark" ? "rotate(180deg)" : "rotate(0deg)" }}>
              <ThemeIcon className="w-4 h-4" />
            </span>
          </button>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-ink"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-rule bg-paper px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={`nav-link ${isActive(link.path) ? "is-active" : ""} self-start`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="nav-link self-start inline-flex items-center gap-2"
          >
            <ThemeIcon className="w-4 h-4" />
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
