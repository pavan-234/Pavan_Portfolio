import React from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className={`
        p-2 rounded-lg transition-all duration-300 hover:scale-110
        ${theme === 'dark' 
          ? 'bg-gray-800 hover:bg-gray-700' 
          : 'bg-gray-100 hover:bg-gray-200'
        }
      `}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-blue-600" />
      )}
    </button>
  );
};

export default ThemeToggle;