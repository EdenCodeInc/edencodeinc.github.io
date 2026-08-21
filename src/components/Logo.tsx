import { useId } from "react";
import { useTheme } from "../contexts/ThemeContext";

/**
 * EdenCode brand mark: a rounded-square app icon with an orange-gradient "C"
 * and a solid orange dot. Background adapts to the active theme
 * (dark brown in dark mode, cream in light mode); the "C" and dot are identical
 * in both, using the brand orange gradient (#EB612E -> #F4A135).
 */
export function Logo({ className = "" }: { className?: string }) {
  const { theme } = useTheme();
  const gradId = useId();
  const background = theme === "light" ? "#FAF5EC" : "#3A2A20";

  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      role="img"
      aria-label="EdenCode"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="0.15" y1="0" x2="0.85" y2="1">
          <stop offset="0" stopColor="#EB612E" />
          <stop offset="1" stopColor="#F4A135" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="512" height="512" rx="115" fill={background} />
      <path
        d="M356.4 148 A148 148 0 1 0 356.4 364"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="72"
        strokeLinecap="round"
      />
      <circle cx="352" cy="256" r="35" fill="#EB612E" />
    </svg>
  );
}
