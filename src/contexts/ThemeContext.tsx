import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Browser chrome (mobile address bar) follows the page background.
const THEME_COLORS: Record<Theme, string> = { light: '#FBF5EC', dark: '#16110C' };
const syncThemeColor = (theme: Theme) => {
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Load saved theme on mount; default to light when no preference is stored.
    const savedTheme = localStorage.getItem('edencode-theme') as Theme | null;
    const initial: Theme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light';
    setTheme(initial);
    document.documentElement.classList.toggle('light', initial === 'light');
    syncThemeColor(initial);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('edencode-theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
    syncThemeColor(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
