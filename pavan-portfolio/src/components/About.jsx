import React from "react";
import { motion } from "framer-motion";
import { FileDown, Brain, Code, Database, Server } from "lucide-react";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const expertise = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with React.js",
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Creating robust APIs and server-side applications with Node.js",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing and optimizing database schemas for scalability",
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Competitive programming and algorithmic problem solving",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            With over 5 years of experience in full-stack development and a
            passion for competitive programming, I specialize in building
            scalable web applications and solving complex algorithmic
            challenges. My expertise spans the entire development stack, from
            crafting intuitive user interfaces to designing efficient backend
            systems.
          </p>

          {/* Resume Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors mx-auto mb-12"
          >
            <FileDown className="w-5 h-5" />
            Download Resume
          </motion.button>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800"
              >
                <item.icon className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
