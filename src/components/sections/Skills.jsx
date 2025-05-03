import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { skills } from '../../data';
import { 
  SiCplusplus, SiPython, SiC, SiMysql, SiJavascript,
  SiHtml5, SiCss3, SiTailwindcss, SiReact, SiNodedotjs,
  SiMongodb, SiExpress, SiGit, SiGithub, SiPostman,
  SiAndroid, SiTensorflow
} from 'react-icons/si';

const iconMap = {
  'C++': SiCplusplus,
  'Python': SiPython,
  'C': SiC,
  'SQL': SiMysql,
  'JavaScript': SiJavascript,
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'Tailwind CSS': SiTailwindcss,
  'React.js': SiReact,
  'Node.js': SiNodedotjs,
  'MongoDB': SiMongodb,
  'Express': SiExpress,
  'Git': SiGit,
  'GitHub': SiGithub,
  'Postman': SiPostman
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);
  
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'Language', label: 'Languages' },
    { id: 'Web', label: 'Web' },
    { id: 'Tool', label: 'Tools' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="My Skills"    
          subtitle="A comprehensive overview of my technical abilities"
          centered
        />
        
        <div className="flex flex-wrap justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-gray-900 p-1 rounded-lg shadow-md">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = iconMap[skill.name];
            return (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 flex flex-col items-center justify-center group"
              >
                {Icon && (
                  <div className="text-4xl mb-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Icon />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                  {skill.name}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {skill.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
