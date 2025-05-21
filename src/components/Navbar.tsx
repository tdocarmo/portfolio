"use client";

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { BsGithub, BsLinkedin, BsSun, BsMoon } from "react-icons/bs";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-lg font-bold text-primary dark:text-foreground/60">Toni Do Carmo</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <Link href="#projets" className="text-sm font-medium transition-colors hover:text-primary">
              Projets
            </Link>
            <Link href="#profil" className="text-sm font-medium transition-colors hover:text-primary">
              Profil
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/tdocarmo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <BsGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/toni-do-carmo-ferreira/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <BsLinkedin className="h-5 w-5" />
            </a>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
            >
              {theme === 'dark' ? <BsSun className="h-5 w-5" /> : <BsMoon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Animation utilitaire (à ajouter dans globals.css si besoin)
// .animate-fade-in-down { animation: fadeInDown 0.3s ease; }
// @keyframes fadeInDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: none; } }