import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Sparkles } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="My Projects" 
          subtitle="Exciting work coming soon"
          centered
        />
        
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
          <Sparkles
            className="w-24 h-24 mb-6 text-blue-600 dark:text-blue-400 animate-bounce"
            alt="Sparkles icon"
          />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Projects Will Be Updated Soon
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-md">
            I'm working on some amazing projects that will be showcased here soon. Stay tuned for updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;