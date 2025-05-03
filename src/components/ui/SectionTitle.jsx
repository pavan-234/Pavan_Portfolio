import React from 'react';

const SectionTitle = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-blue-600 dark:bg-blue-500"></span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;