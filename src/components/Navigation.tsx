import { useState, useEffect } from "react";
import logo from "figma:asset/424b43ad566f9cfdcdb898312921e75e3eb3e12c.png";
import { useTheme } from "../contexts/ThemeContext";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/blogs", label: "SYSTEM_LOG" },
    { path: "/careers", label: "CAREERS" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background border-b-2 border-[var(--terminal-primary)] z-50 scanlines transition-colors duration-300">
      <div className="container mx-auto px-6 py-3">
        {/* Terminal Header Bar */}


        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-2 border-[var(--terminal-primary)] p-1 transition-all hover:border-glow">
              <img src={logo} alt="EdenCode" className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-[var(--terminal-primary)] text-base sm:text-lg font-bold tracking-wider">EDENCODE</span>
              <span className="text-[var(--terminal-secondary)] text-[9px] sm:text-[10px] tracking-widest">QUANTUM_LAB_V1.0</span>
            </div>
          </a>

          {/* Desktop Navigation - Command Line Style */}
          <div className="hidden md:flex items-center gap-1 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`px-4 py-2 border border-[var(--terminal-primary)]/30 transition-all hover:bg-[var(--terminal-primary)]/10 hover:border-[var(--terminal-primary)] ${
                  currentPath === link.path
                    ? "bg-[var(--terminal-primary)]/20 border-[var(--terminal-primary)] text-[var(--terminal-primary)]"
                    : "text-[var(--terminal-secondary)]"
                }`}
              >
                [ {link.label} ]
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="px-4 py-2 border border-[var(--terminal-secondary)] text-[var(--terminal-secondary)] hover:bg-[var(--terminal-secondary)]/10 transition-all ml-2"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              [ {theme === 'dark' ? '○' : '●'} ]
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--terminal-primary)] border border-[var(--terminal-primary)] px-3 py-1 hover:bg-[var(--terminal-primary)]/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            [MENU]
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 border-t border-[var(--terminal-primary)]/30 pt-4 animate-[terminal-boot_0.3s_ease-out]">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`block px-4 py-2 border border-[var(--terminal-primary)]/30 hover:bg-[var(--terminal-primary)]/10 ${
                  currentPath === link.path
                    ? "bg-[var(--terminal-primary)]/20 border-[var(--terminal-primary)] text-[var(--terminal-primary)]"
                    : "text-[var(--terminal-secondary)]"
                }`}
              >
                [ {link.label} ]
              </a>
            ))}

            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="block w-full text-left px-4 py-2 border border-[var(--terminal-secondary)] text-[var(--terminal-secondary)] hover:bg-[var(--terminal-secondary)]/10"
            >
              [ {theme === 'dark' ? '○' : '●'} ]
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
