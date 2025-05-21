"use client";

import { useTheme } from 'next-themes';
import { BsGithub, BsLinkedin, BsSun, BsMoon } from "react-icons/bs";
import { useSection } from '@/context/SectionContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { setActiveSection } = useSection();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      // Si nous ne sommes pas sur la page d'accueil, naviguer d'abord vers la page d'accueil
      window.location.href = `/#${sectionId}`;
      return;
    }

    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // hauteur de la navbar en pixels
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Logo/Nom */}
        <div className="flex items-center">
          <Link 
            href="/"
            className="flex items-center space-x-2"
          >
            <span className="text-lg font-bold text-primary dark:text-foreground/60">Toni Do Carmo</span>
          </Link>
        </div>

        {/* Navigation Links & Social Icons */}
        <div className="flex flex-1 items-center justify-end space-x-8">
          <nav className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('profil')}
              className="text-base font-semibold transition-colors hover:text-primary"
            >
              Profil
            </button>
            <button 
              onClick={() => scrollToSection('projets')}
              className="text-base font-semibold transition-colors hover:text-primary"
            >
              Projets
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-base font-semibold transition-colors hover:text-primary"
            >
              Contact
            </button>
          </nav>

          {/* Séparateur vertical */}
          <div className="h-6 w-px bg-border/40"></div>

          {/* Social Links & Theme Toggle & Language Selector */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/tdocarmo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <BsGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/toni-do-carmo-ferreira/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <BsLinkedin className="h-5 w-5" />
            </a>

            {/* Séparateur vertical */}
            <div className="h-6 w-px bg-border/40"></div>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {/* TODO: Implement language change */}}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
                aria-label="Switch to French"
              >
                <span className="text-lg">🇫🇷</span>
              </button>
              <button
                onClick={() => {/* TODO: Implement language change */}}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
                aria-label="Switch to English"
              >
                <span className="text-lg">🇬🇧</span>
              </button>
              <button
                onClick={() => {/* TODO: Implement language change */}}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
                aria-label="Switch to Portuguese"
              >
                <span className="text-lg">🇵🇹</span>
              </button>
            </div>

            {/* Séparateur vertical */}
            <div className="h-6 w-px bg-border/40"></div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
              aria-label="Toggle theme"
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