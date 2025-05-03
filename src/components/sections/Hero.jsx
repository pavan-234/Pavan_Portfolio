import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { Download, Code, Briefcase } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';

const Hero = () => {
  const { theme } = useDarkMode();
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Software Developer | Full-Stack Developer';

  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setText('');
        }, 5000);
        return () => clearTimeout(timeout);
      }
    }
  }, [text, isTyping]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-80"
        aria-hidden="true"
      />

      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-purple-400/20 dark:bg-purple-600/10 blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="block">Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              V. Pavan Kalyan
            </span>
          </h1>

          <div className="h-8 mb-6">
            <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl">
              {text}
              <span className="animate-blink">|</span>
            </p>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-xl mx-auto md:mx-0">
            Transforming ideas into intelligent software solutions. Building the future, one line of code at a time.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button 
              href="\assets\Pavan_Kalyan_Resume.pdf" 
              variant="primary" 
              icon={<Download className="w-5 h-5" />}
              download
            >
              View Resume
            </Button>
            <Button 
              href="#projects" 
              variant="outline" 
              icon={<Briefcase className="w-5 h-5" />}
            >
              Explore Projects
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-30 dark:opacity-40" />

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="public/assets/pavan.jpg" 
                alt="V. Pavan Kalyan" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute inset-0 rounded-full border-4 border-blue-500 dark:border-blue-400 animate-ping opacity-20" />

            <div 
              className={`absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg ${
                theme === 'dark' ? 'animate-pulse' : ''
              }`}
            >
              <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about"
          className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-6 h-6"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
