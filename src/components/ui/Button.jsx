import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  download,
  target,
  rel,
  icon,
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 relative overflow-hidden rounded-lg focus:outline-none';
  
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/50 dark:shadow-blue-800/30',
    secondary: 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/50 dark:shadow-purple-800/30',
    outline: 'border-2 border-blue-500 hover:border-blue-600 bg-transparent hover:bg-blue-500/10 text-blue-600 dark:text-blue-400'
  };
  
  const sizeStyles = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-2.5 px-5',
    lg: 'text-lg py-3 px-6'
  };
  
  const disabledStyles = disabled ? 
    'opacity-50 cursor-not-allowed' : 
    'transform hover:-translate-y-1';
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      <span className="absolute inset-0 h-full w-full bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </>
  );

  if (href && !disabled) {
    return (
      <a 
        href={href} 
        className={`group ${styles}`}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={`group ${styles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;