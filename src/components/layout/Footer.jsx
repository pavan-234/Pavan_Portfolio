import React from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
              <span className="text-blue-600 mr-1">V.</span>
              Pavan Kalyan
            </a>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              Software Developer | Full-Stack Developer
            </p>
          </div>

          <div className="flex space-x-6">
            <a 
              href="https://github.com/pavan-234" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <GitHub className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/pavan-kalyan-varanasi-210573267/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="mailto:varanasipavankalyan07@gmail.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 V. Pavan Kalyan. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;