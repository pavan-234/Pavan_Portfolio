import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Mentor Connect',
      description: 'A mentorship platform for skill development and career guidance, integrating AI-based mentor verification and payment processing.',
      image: 'https://images.unsplash.com/photo-1581092333595-2f62b54a6c2f?fit=crop&w=800&q=80',
      tech: ['MERN Stack', 'Tailwind CSS', 'Machine Learning APIs', 'Payment Gateway'],
      github: 'https://github.com/vpavankalyan77/Mentor-Connect',
      demo: 'https://mentorconnect.com',
    },
    {
      title: 'SkillConnect (SIH Project)',
      description: 'A Smart India Hackathon project that bridges the gap between skill seekers and providers, offering AI-based job recommendations.',
      image: 'https://images.unsplash.com/photo-1581093448793-87eb7d7c7f84?fit=crop&w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'AI-based Matching'],
      github: 'https://github.com/vpavankalyan77/SkillConnect',
      demo: 'https://skillconnect.com',
    },
    {
      title: 'Zomato Restaurant Listing & Searching',
      description: 'A restaurant search platform with advanced filtering, location-based searches, and image-based restaurant discovery.',
      image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?fit=crop&w=800&q=80',
      tech: ['React', 'Express.js', 'MongoDB', 'Location Services'],
      github: 'https://github.com/vpavankalyan77/Zomato-Restaurant-Search',
      demo: 'https://zomatosearch.com',
    },
    {
      title: 'House Price Prediction',
      description: 'A machine learning model that predicts house prices based on key market indicators and historical data.',
      image: 'https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?fit=crop&w=800&q=80',
      tech: ['Python', 'Scikit-Learn', 'Pandas', 'Flask'],
      github: 'https://github.com/vpavankalyan77/House-Price-Prediction',
      demo: 'https://housepricepredict.com',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
