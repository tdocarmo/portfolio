import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Groupie Tracker",
      description: "Application web développée en Go pour suivre les informations sur les groupes de musique via une API. Interface conviviale avec filtres et visualisations de données.",
      githubUrl: "https://github.com/tdocarmo/groupie-tracker-filters",
      technologies: [
        { name: "Go", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
        { name: "HTML", color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300" },
        { name: "CSS", color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" }
      ],
      demoUrl: undefined,
      videoUrl: "/videos/groupie-tracker.webm"
    },
    {
      title: "Smart Road",
      description: "Simulation en Rust d'un carrefour intelligent avec véhicules autonomes. Gestion du trafic sans feux de signalisation pour fluidifier la circulation et éviter les accidents.",
      githubUrl: "https://github.com/tdocarmo/smart_road",
      technologies: [
        { name: "Rust", color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" },
        { name: "SDL2", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" }
      ],
      demoUrl: undefined,
      videoUrl: "/videos/smart-road.webm"
    },
    {
      title: "Skill Tracker",
      description: "Application React.js avec GraphQL permettant l'authentification sécurisée et l'affichage de profils utilisateur avec des statistiques interactives au format SVG.",
      githubUrl: "https://github.com/tdocarmo/graphql",
      technologies: [
        { name: "React.js", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300" },
        { name: "GraphQL", color: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300" },
        { name: "JavaScript", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" },
        { name: "CSS", color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" }
      ],
      demoUrl: undefined,
      videoUrl: "/videos/graphql.webm"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
            technologies={project.technologies}
            videoUrl={project.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
