"use client";

import { useState } from "react";

const tabs = [
  { label: "Formation", id: "formation" },
  { label: "Expérience", id: "experience" },
  { label: "Compétences", id: "competences" },
];

const tabContent: Record<string, React.ReactNode> = {
  formation: (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-primary">Titre Professionnel de Concepteur Développeur d'Applications (CDA)</h3>
        <p className="text-foreground/80">Certification RNCP Niveau 6 (Bac+3/4)</p>
        <p className="text-foreground/80">En cours : Obtention prévue fin 2025 (Début : Fin 2023)</p>
      </div>

      <div className="space-y-2">
        <p className="text-foreground/80">Approche pédagogique unique : Apprentissage par projets, audit sur plus de 50 réalisations, favorisant l'autonomie et le travail collaboratif.</p>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-primary">Curriculum axé sur l'employabilité :</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <span className="font-medium">Programmation & Langages</span>
              <p className="text-foreground/80">Maîtrise de la programmation impérative et événementielle. Expertise en Go, JavaScript (Node.js), Rust, HTML/CSS.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <span className="font-medium">Conception & Architecture</span>
              <p className="text-foreground/80">Fondamentaux des algorithmes, architecture logicielle structurée et avancée, patterns de conception orientés objet.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <span className="font-medium">Backend & API</span>
              <p className="text-foreground/80">Développement backend robuste, API RESTful.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <span className="font-medium">Frontend</span>
              <p className="text-foreground/80">Création d'interfaces web modernes et interactives.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <span className="font-medium">DevOps & Cloud</span>
              <p className="text-foreground/80">Intégration continue, déploiement (CI/CD), administration système, introduction à l'infrastructure cloud.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <span className="font-medium">Sécurité</span>
              <p className="text-foreground/80">Sécurité réseau, sécurisation des applications, DevSecOps avancé.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <span className="font-medium">Optimisation</span>
              <p className="text-foreground/80">Optimisation algorithmique et performance des systèmes.</p>
            </div>
          </li>
        </ul>
      </div>
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
      <div className="flex gap-4 mb-6 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg
              ${active === tab.id
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}
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