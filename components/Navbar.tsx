"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    console.log('Theme toggle clicked! Current theme:', theme);
    toggleTheme();
  };

  // Don't render theme toggle until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 relative z-50">
        <div className="flex gap-6">
          <Link href="/" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition font-vcr-mono">
            Home
          </Link>
          <Link href="/portfolio" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition font-vcr-mono">
            Portfolio
          </Link>
          <Link href="/about" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition font-vcr-mono">
            About
          </Link>
          <Link href="/contact" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition font-vcr-mono">
            Contact
          </Link>
        </div>
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
      </nav>
    );
  }

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 relative z-50">
      <div className="flex gap-6">
        <Link href="/" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition font-vcr-mono">
          Home
        </Link>
        <Link href="/portfolio" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition font-vcr-mono">
          Portfolio
        </Link>
        <Link href="/about" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition font-vcr-mono">
          About
        </Link>
        <Link href="/contact" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition font-vcr-mono">
          Contact
        </Link>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={handleThemeToggle}
        className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 relative z-50 cursor-pointer border border-gray-300 dark:border-gray-600"
        aria-label="Toggle theme"
        style={{ minWidth: '44px', minHeight: '44px' }}
      >
        {theme === "dark" ? (
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>
    </nav>
  );
}
