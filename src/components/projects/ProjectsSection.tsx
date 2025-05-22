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
      videoUrl: "/videos/groupie-tracker.mp4"
    },
    {
      title: "Smart Road",
      description: "Simulation innovante d'un carrefour intelligent développée en Rust, où des véhicules autonomes traversent l'intersection sans feux de signalisation grâce à un algorithme de contrôle avancé. Le projet visualise en temps réel la fluidification du trafic et la prévention des collisions",
      githubUrl: "https://github.com/tdocarmo/smart_road",
      technologies: [
        { name: "Rust", color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300" },
        { name: "SDL2", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" }
      ],
      videoUrl: "/videos/smart-road.mp4"
    },
    {
      title: "GraphQL API",
      description: "Application React utilisant GraphQL pour afficher des statistiques interactives de compétences et de progression d'apprentissage. Interface moderne avec visualisations SVG et authentification sécurisée JWT.",
      githubUrl: "https://github.com/tdocarmo/graphql",
      technologies: [
        { name: "React", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" },
        { name: "GraphQL", color: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300" },
        { name: "Node.js", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" },
        { name: "CSS", color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300" }
      ],
      videoUrl: "/videos/graphql.mp4"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsSection;
