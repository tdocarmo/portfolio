"use client";

import { useState } from "react";

const tabs = [
  { label: "Formation", id: "formation" },
  { label: "Expérience", id: "experience" },
  { label: "Compétences", id: "competences" },
];

const tabContent: Record<string, React.ReactNode> = {
  formation: (
    <div>
      <h3 className="text-xl font-semibold mb-2">Formation</h3>
      <ul className="list-disc pl-5 space-y-1 text-foreground/80">
        <li>2022 — Titre professionnel Développeur Web et Web Mobile, AFPA</li>
        <li>2021 — Certification OpenClassrooms : JavaScript, React, Node.js</li>
        <li>2018 — Licence Informatique, Université de Paris</li>
      </ul>
    </div>
  ),
  experience: (
    <div>
      <h3 className="text-xl font-semibold mb-2">Expérience</h3>
      <ul className="list-disc pl-5 space-y-1 text-foreground/80">
        <li>2023 — Développeur Frontend Freelance (React, Next.js, Tailwind)</li>
        <li>2022 — Stage Développeur Web, Startup XYZ</li>
        <li>2020-2021 — Projets personnels et contributions open source</li>
      </ul>
    </div>
  ),
  competences: (
    <div>
      <h3 className="text-xl font-semibold mb-2">Compétences</h3>
      <ul className="list-disc pl-5 space-y-1 text-foreground/80">
        <li>JavaScript, TypeScript, React, Next.js</li>
        <li>HTML, CSS, Tailwind CSS, Sass</li>
        <li>Node.js, Express, MongoDB</li>
        <li>Git, GitHub, Méthodes agiles</li>
      </ul>
    </div>
  ),
};

export function ProfilTabs() {
  const [active, setActive] = useState("formation");

  return (
    <div className="w-full">
      <div className="flex gap-2 mb-6 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-t transition-colors font-medium text-sm sm:text-base
              ${active === tab.id
                ? "bg-primary text-background shadow"
                : "bg-background text-foreground/70 hover:bg-foreground/10"}
            `}
            onClick={() => setActive(tab.id)}
            aria-selected={active === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className="relative min-h-[120px] transition-all duration-300"
        role="tabpanel"
        id={`tabpanel-${active}`}
        aria-labelledby={active}
      >
        <div key={active} className="animate-fade-in">
          {tabContent[active]}
        </div>
      </div>
    </div>
  );
}

// Animation utilitaire à ajouter dans globals.css :
// .animate-fade-in { animation: fadeInTab 0.3s ease; }
// @keyframes fadeInTab { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } } 