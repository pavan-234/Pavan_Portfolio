import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="mt-20 md:mt-24 w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 relative">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-100/30 to-primary-500/30 dark:from-primary-900/30 dark:to-primary-500/30 animate-gradient"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side - Text Content */}
          <motion.div 
            //mption
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm{' '}
              <span className="text-primary-600 dark:text-primary-400">
                <TypeAnimation
                  sequence={[
                    //name
                    'V. Pavan Kalyan',
                    2000,
                    'a Full-Stack Developer',
                    2000,
                    'a Competetive Programmer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Passionate Full-Stack Developer & Competitive Programmer with expertise in the MERN stack and problem-solving.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                Let's Connect
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              {/* Social Links */}
              <div className="flex gap-4 justify-center">
                {[
                  { href: "https://github.com/vpavankalyan77", icon: <Github className="w-6 h-6" /> },
                  { href: "https://www.linkedin.com/in/vpavankalyan/", icon: <Linkedin className="w-6 h-6" /> },
                  { href: "mailto:varanasipavankalyan07@gmail.com", icon: <Mail className="w-6 h-6" /> }
                ].map(({ href, icon }, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all shadow-md"
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
          >
            <img
              src="/Pavan_photo.jpg"
              alt="Portrait of V. Pavan Kalyan"
              className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-primary-600 dark:border-primary-400"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-transparent"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
