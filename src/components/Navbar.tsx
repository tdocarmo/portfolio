"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const navItems = [
  { label: "Accueil", id: "accueil" },
  { label: "Mon Profil", id: "profil" },
  { label: "Mes Projets", id: "projets" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur transition-colors">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center px-4 py-2">
        <ul className="hidden md:flex gap-6 justify-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className="relative px-2 py-1 font-medium text-foreground hover:text-primary transition-colors duration-200 focus:outline-none"
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2">
          <ThemeSwitcher />
          {/* Burger menu for mobile */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Ouvrir le menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-2 px-4 pb-4 bg-background/95 animate-fade-in-down">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className="w-full text-left px-2 py-2 font-medium text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

// Animation utilitaire (à ajouter dans globals.css si besoin)
// .animate-fade-in-down { animation: fadeInDown 0.3s ease; }
// @keyframes fadeInDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: none; } } 