import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { experiences, certifications } from '../../data';
import { Award, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <SectionTitle 
              title="Experience" 
              subtitle="My professional journey and internships"
            />
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-900/50" />
              <div className="space-y-8">
                {experiences.map(exp => (
                  <div key={exp.id} className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 border-4 border-white dark:border-gray-800 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400" />
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                          <Calendar className="w-3 h-3 mr-1" />
                          {exp.period}
                        </span>
                      </div>
                      <div className="mb-4 flex items-center">
                        {/* {exp.logo && (
                          <img src={exp.logo} alt={exp.company} className="h-5 mr-2" />
                        )} */}
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <SectionTitle 
              title="Certifications" 
              subtitle="Professional certifications and achievements"
            />
            <div className="grid sm:grid-cols-2 gap-6">
              {certifications.map(cert => (
                <div 
                  key={cert.id}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                      <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {cert.title}
                      </h3>
                      <div className="flex items-center mb-3">
                        {/* {cert.logo && (
                          <img src={cert.logo} alt={cert.issuer} className="h-4 mr-2" />
                        )} */}
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {cert.issuer}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 dark:text-gray-500 text-xs">
                          {cert.date}
                        </span>
                        {cert.link && (
                          <a 
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 text-sm underline hover:text-blue-800 dark:hover:text-blue-300"
                          >
                            View
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Profiles */}
            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Additional Profiles
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {/* LeetCode */}
                <a 
                  href="https://leetcode.com/u/pavan19081/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    {<svg className="w-5 h-5" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
  <path d="M223.92 90.84c-11.42-17.65-26.84-32.36-44.72-42.92a8.12 8.12 0 00-10.88 2.96 8 8 0 002.88 10.92c14.64 8.5 27.78 21.04 37.84 36.12 13.44 20.78 17.08 42.26 10.2 63.92-6.84 21.52-22.72 39.52-45.3 51.8-19.9 10.9-42.16 14.96-62.4 11.52-19.92-3.36-36.88-14.08-46.94-29.74-9.6-15.02-11.92-32.56-6.56-50.58 5.18-17.48 16.94-33.8 32.88-45.12l80.92-57.12a8.001 8.001 0 00-9.28-12.96l-80.92 57.14c-20.2 14.28-35.08 34.66-42.28 56.86-7.42 22.34-4.58 45.12 8.04 64.74 13.44 21.08 35.7 35.58 62.02 40.14 5.4.92 10.84 1.36 16.28 1.36 21.94 0 44.62-6.18 65.28-17.78 27.66-15.16 47.58-39.34 55.52-66.98 7.84-27.66 3.4-56.66-12.04-81.56zM164.42 122.02H56.48a8 8 0 100 16h107.94a8 8 0 100-16z" />
</svg>
}
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-gray-900 dark:text-white block">LeetCode</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Competitive Programming</span>
                  </div>
                </a>

                {/* CodeChef */}
                <a 
                  href="https://www.codechef.com/users/pavan_v77" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-red-100 dark:bg-red-900/30 rounded-lg">
                    {<svg className="w-5 h-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
  <path d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm92.88 336.56c-5.72 8.44-16.2 13.44-30.52 13.44h-49.8V200.52h48.6c13.68 0 23.32 4.72 28.72 13.08 5.36 8.28 8.12 20.56 8.12 36.44 0 17.48-2.6 30.72-7.72 39.28zm-99.8-136.04v192h-45.08v-192h45.08zm-80.44 19.88c8.6 0 15.6 1.76 20.88 5.28 5.28 3.52 9.16 9.44 11.52 17.48 2.36 8.04 3.56 18.84 3.56 32.12 0 13.28-1.16 23.88-3.52 31.44-2.36 7.56-6.28 13.08-11.48 16.36-5.24 3.28-12.24 4.92-20.92 4.92-8.56 0-15.52-1.64-20.76-4.88-5.24-3.24-9.16-8.76-11.52-16.36-2.36-7.6-3.52-18.28-3.52-31.72 0-13.32 1.2-24.12 3.56-32.16 2.36-8.04 6.24-14 11.52-17.48 5.28-3.48 12.28-5.24 20.88-5.24zM256 472c-119.38 0-216-96.62-216-216S136.62 40 256 40s216 96.62 216 216-96.62 216-216 216z" />
</svg>
}
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-gray-900 dark:text-white block">CodeChef</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Problem Solving</span>
                  </div>
                </a>

                {/* Codeforces */}
                <a 
                  href="https://codeforces.com/profile/pavankalyan07" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-red-100 dark:bg-red-900/30 rounded-lg">
                    {<svg className="w-5 h-5" viewBox="0 0 640 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M76.6 287.4h151.8c3.5 0 6.4-2.9 6.4-6.4v-50.1c0-3.5-2.9-6.4-6.4-6.4H76.6c-3.5 0-6.4 2.9-6.4 6.4v50.1c0 3.5 2.8 6.4 6.4 6.4zM372.4 224.5c-.3-3.5-3.3-6.1-6.8-6.1h-56.8c-2.1 0-4.1 1-5.3 2.6l-42.4 55.5c-2.4 3.2-.2 7.8 3.8 7.8h99.1c3.8 0 6.9-3.2 6.6-7l-2.4-52.8zM569.7 224c-.6-3.1-3.3-5.2-6.5-5.2h-47.5c-2.3 0-4.4 1.2-5.6 3.1l-40.9 65.1c-2.2 3.5.3 8.1 4.5 8.1h93.3c3.6 0 6.6-2.8 6.8-6.4l3.9-64.7zM640 256c0 141.4-114.6 256-256 256H256C114.6 512 0 397.4 0 256S114.6 0 256 0h128c141.4 0 256 114.6 256 256z" />
</svg>
}
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-gray-900 dark:text-white block">CodeForces</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Problem Solving</span>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
