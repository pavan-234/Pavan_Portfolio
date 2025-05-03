import React, { useState, useEffect } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import Button from '../ui/Button';
import { Menu, X, Github as GitHub, Linkedin, Download, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home"
          className="text-xl font-bold text-gray-900 dark:text-white flex items-center"
        >
          <span className="text-blue-600 mr-1">V.</span>
          Pavan
          <span className="hidden sm:inline ml-1">Kalyan</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
                  onClick={closeMenu}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/pavan-234" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <GitHub className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>

            <ThemeToggle />

            <Button 
              href="\assets\Pavan_Kalyan_Resume.pdf" 
              variant="primary" 
              size="sm"
              icon={<Download className="w-4 h-4" />}
              download 
            >
              Resume
            </Button>
          </div>
        </nav>

        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          
          <button
            type="button"
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <ul className="space-y-4 py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4 flex items-center space-x-4">
                <a 
                  href="https://github.com/vpavankalyan77" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <GitHub className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/pavan-kalyan-varanasi-210573267/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a 
                  href="+919391464269" 
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={closeMenu}
                >
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Contact</span>
                </a>
              </li>
              <li className="pt-2">
                <Button 
                  href="public\assets\Pavan_Kalyan_Resume.pdf" 
                  variant="primary" 
                  size="sm" 
                  className="w-full"
                  icon={<Download className="w-4 h-4" />}
                  download
                >
                  Resume
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;