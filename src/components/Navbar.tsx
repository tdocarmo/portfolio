"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-blue-200/30 dark:border-blue-800/30">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo et nom */}
          <div className="flex items-center ml-1">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent hover:from-blue-600 hover:to-blue-800 transition-all duration-300">Toni Do Carmo</span>
          </div>

          {/* Liens de navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-auto mr-4">
            <a href="#accueil" className="text-foreground/80 hover:text-foreground transition">Accueil</a>
            <a href="#profil" className="text-foreground/80 hover:text-foreground transition">Profil</a>
            <a href="#projets" className="text-foreground/80 hover:text-foreground transition">Projets</a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition">Contact</a>
          </div>

          {/* Liens sociaux et thème */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/tdocarmo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/toni-do-carmo-ferreira/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg text-foreground/80 hover:text-foreground transition"
              aria-label="Changer de thème"
            >
              {theme === "dark" ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
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