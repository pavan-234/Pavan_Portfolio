import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Award, BookOpen, Coffee, Code, Watch } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know more about me and my background"
        />
        
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Stats - Left Side */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-3">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-3xl font-bold text-gray-900 dark:text-white">3+</span>
              <span className="text-gray-600 dark:text-gray-400 text-sm mt-1">Years Coding</span>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg mb-3">
                <Coffee className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-3xl font-bold text-gray-900 dark:text-white">5+</span>
              <span className="text-gray-600 dark:text-gray-400 text-sm mt-1">Projects</span>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
              <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mb-3">
                <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="text-3xl font-bold text-gray-900 dark:text-white">8.62</span>
              <span className="text-gray-600 dark:text-gray-400 text-sm mt-1">CGPA</span>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg mb-3">
                <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-3xl font-bold text-gray-900 dark:text-white">5+</span>
              <span className="text-gray-600 dark:text-gray-400 text-sm mt-1">Certifications</span>
            </div>
          </div>
          
          {/* About Text - Right Side */}
          <div className="md:col-span-3 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg relative overflow-hidden">
            {/* Decorative line */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600" />
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pl-6">My Journey</h3>
            
            <div className="pl-6 space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a 4th year B.Tech Computer Science student at Gayatri Vidya Parishad College Of Engineering with a CGPA of 8.62.
              </p>
              
              <p>
                I specialize in full-stack development, and elegant UI design. My passion lies in building smart solutions that solve real-world problems while delivering exceptional user experiences.
              </p>
              
              <p>
                I am a continuous learner with a strong interest in solving problems related to Data Structures and Algorithms (DSA). I enjoy tackling challenging problems and constantly improving my problem-solving skills.
              </p>
            </div>
            
            {/* Education info */}
            <div className="mt-8 pl-6">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded mt-1 mr-4">
                  <Watch className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    B.Tech in Computer Science
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Gayatri Vidya Parishad College Of Engineering
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    2022 - 2026 (Expected)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
