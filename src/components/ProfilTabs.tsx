"use client";

import { useState } from "react";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiTailwindcss, 
  SiDocker, SiSqlite, SiGo, SiHtml5, SiCss3, SiGit, SiGithub, 
  SiLinux, SiVercel, SiRust, SiPython, SiExpress 
} from "react-icons/si";

const tabs = [
  { label: "Formation", id: "formation" },
  { label: "Expérience", id: "experience" },
  { label: "Compétences", id: "competences" },
];

const techStacks = [
  {
    title: "Full-Stack JavaScript/TypeScript",
    subtitle: "Web Moderne et dynamique",
    technologies: [
      { icon: SiReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiDocker, name: "Docker" },
      { icon: SiSqlite, name: "SQLite" }
    ]
  },
  {
    title: "Backend Go",
    subtitle: "Performance et robustesse",
    technologies: [
      { icon: SiGo, name: "Go" },
      { icon: SiSqlite, name: "SQLite" },
      { icon: SiDocker, name: "Docker" }
    ]
  },
  {
    title: "Développement Web Fondamental",
    technologies: [
      { icon: SiHtml5, name: "HTML5" },
      { icon: SiCss3, name: "CSS3" }
    ]
  },
  {
    title: "Outils DevOps & Collaboration",
    technologies: [
      { icon: SiDocker, name: "Docker" },
      { icon: SiGit, name: "Git" },
      { icon: SiGithub, name: "GitHub" },
      { icon: SiLinux, name: "Linux" },
      { icon: SiVercel, name: "Vercel" }
    ]
  },
  {
    title: "Programmation Système & Langages Alternatifs",
    technologies: [
      { icon: SiRust, name: "Rust" },
      { icon: SiPython, name: "Python" },
      { icon: SiExpress, name: "Express.js" }
    ]
  }
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

      <div className="space-y-4 mt-8">
        <h4 className="text-lg font-semibold text-primary">Documents de formation :</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <a
            href="/documents/Global_01_Curriculum.pdf"
            download="Programme_Formation_CDA.pdf"
            type="application/pdf"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-lg hover:bg-secondary/80 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Programme de Formation
          </a>
          <a
            href="/documents/Time Line Cursus 2024.pdf"
            download="Planning_Cursus_2024.pdf"
            type="application/pdf"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-lg hover:bg-secondary/80 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Planning du Cursus 2024
          </a>
          <a
            href="/documents/Frise-time-line-cursus-2025.pdf"
            download="Planning_Cursus_2025.pdf"
            type="application/pdf"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-lg hover:bg-secondary/80 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Planning du Cursus 2025
          </a>
        </div>
      </div>
    </div>
  ),
  experience: (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-primary">Développeur Full-Stack (Projets de Formation & Collaboratifs)</h3>
        <p className="text-foreground/80">Fin 2023 - Présent</p>
      </div>

      <div className="space-y-2">
        <p className="text-foreground/80">Cette section met en lumière mon expérience pratique acquise au travers d'un cursus intensif et axé sur les projets, couvrant l'intégralité du cycle de développement logiciel.</p>
      </div>

      <div className="space-y-4">
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <span className="font-medium">Conception et Modélisation de Bases de Données</span>
              <p className="text-foreground/80">Maîtrise des méthodes de conception (Merise : MCD, MLD, MPD), incluant la rédaction de dictionnaires de données et l'optimisation des structures pour la performance et la maintenabilité.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <span className="font-medium">Développement Backend Robuste</span>
              <p className="text-foreground/80">Application des principes CRUD (Create, Read, Update, Delete) pour manipuler les données en base via des requêtes SQL et du code backend sécurisé. Conception et implémentation d'architectures multicouches (Présentation, Application/Métier, Accès aux Données, Base de Données), favorisant la séparation des responsabilités et la scalabilité.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <span className="font-medium">Spécification des Besoins et Méthodologies Agiles</span>
              <p className="text-foreground/80">Rédaction de User Stories (User Story) pour définir les besoins fonctionnels du point de vue de l'utilisateur, facilitant la communication et la priorisation des fonctionnalités. Pratique des méthodologies agiles (Scrum), incluant le travail par sprints, la gestion du Backlog Produit et les réunions quotidiennes (Daily Scrum).</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <span className="font-medium">Qualité Logicielle et Sécurité</span>
              <p className="text-foreground/80">Intégration des bonnes pratiques de sécurisation des applications, validation des entrées et gestion des erreurs. Participation active à plus de 50 audits de code et revues de projet, garantissant la conformité aux standards et la robustesse du code.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <div>
              <span className="font-medium">Collaboration et Outils</span>
              <p className="text-foreground/80">Utilisation intensive de Git/GitHub pour le versionnement et le travail collaboratif. Familiarisation avec des outils de gestion de projet (Gitea, GitHub Projects) pour le suivi des User Stories.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  ),
  competences: (
    <div className="space-y-8">
      {techStacks.map((stack, index) => (
        <div key={index} className="space-y-4">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-primary">{stack.title}</h3>
            {stack.subtitle && (
              <p className="text-foreground/80">{stack.subtitle}</p>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {stack.technologies.map((tech, techIndex) => (
              <div
                key={techIndex}
                className="group flex flex-col items-center p-4 rounded-lg bg-background border border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-md"
              >
                <tech.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="mt-2 text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export function ProfilTabs() {
  const [active, setActive] = useState("competences");

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