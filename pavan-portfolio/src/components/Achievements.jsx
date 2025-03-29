import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Award, GraduationCap, Star } from "lucide-react";

export const Achievements = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const achievements = [
    {
      icon: Trophy,
      title: "Competitive Programming",
      items: [
        "International Collegiate Programming Contest Finalist",
        "Google Code Jam Round 3 Qualifier",
        "Top 100 on LeetCode Global Ranking",
      ],
    },
    {
      icon: Award,
      title: "Professional Certifications",
      items: [
        "AWS Certified Solutions Architect",
        "Google Cloud Professional Developer",
        "MongoDB Certified Developer",
      ],
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      items: [
        "Master's in Computer Science with Distinction",
        "Published Research Paper on Distributed Systems",
        "University Gold Medalist",
      ],
    },
    {
      icon: Star,
      title: "Industry Recognition",
      items: [
        "Best Technical Innovation Award 2024",
        "Open Source Contributor of the Year",
        "Tech Conference Speaker",
      ],
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white">
            Achievements & Recognition
          </h2>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                {/* Icon */}
                <achievement.icon className="w-12 h-12 text-primary-600 mb-4 mx-auto" />

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {achievement.title}
                </h3>

                {/* List Items */}
                <ul className="space-y-2 text-left">
                  {achievement.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2 + itemIndex * 0.1,
                      }}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-2" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
