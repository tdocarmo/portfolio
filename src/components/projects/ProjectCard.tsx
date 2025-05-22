import React from 'react';
import { FaGithub, FaPlay } from 'react-icons/fa';

interface Technology {
  name: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  technologies: Technology[];
  videoUrl?: string;
  onVideoClick?: (videoUrl: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubUrl,
  demoUrl,
  technologies,
  videoUrl
}) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
        {videoUrl && (
          <video
            src={videoUrl}
            className="w-full h-full object-cover hover:object-contain transition-all duration-300"
            controls
            preload="metadata"
            controlsList="nodownload"
            playsInline
            muted
          >
            Votre navigateur ne prend pas en charge la lecture de vidéos.
          </video>
        )}
      </div>
      
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
        
        {/* Technologies utilisées */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className={`px-2 py-1 text-xs font-medium rounded-md ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Boutons */}
        <div className="flex gap-4 mt-auto">
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-white px-3 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <FaGithub /> GitHub
          </a>
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 text-white px-3 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <FaPlay /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
