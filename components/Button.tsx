import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  // Refined Base Styles:
  // - Added ease-out for snappier entry.
  // - focus:ring-offset-2 for better accessibility visibility.
  // - select-none to prevent text highlight during rapid clicks.
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm tracking-tight border select-none active:scale-[0.98]";
  
  const variants = {
    // Primary: Added subtle lift (-translate-y-0.5) and shadow glow on hover.
    primary: "bg-slate-900 text-white border-transparent shadow-sm hover:bg-slate-800 hover:shadow-md hover:shadow-slate-900/20 hover:-translate-y-[1px] active:translate-y-0 active:shadow-none focus:ring-slate-900",
    
    // Secondary: Added lift and darker text/border on hover.
    secondary: "bg-white text-slate-700 border-slate-300 shadow-sm hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400 hover:shadow-md hover:shadow-slate-200/50 hover:-translate-y-[1px] active:translate-y-0 active:bg-slate-100 active:shadow-none focus:ring-slate-200",
    
    // Outline: No lift, clear border definition on hover.
    outline: "bg-transparent text-slate-600 border-slate-300 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400 active:bg-slate-100 focus:ring-slate-200",
    
    // Ghost: Background shift only.
    ghost: "bg-transparent text-slate-600 hover:text-slate-900 border-transparent hover:bg-slate-100 active:bg-slate-200 focus:ring-slate-200",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs font-semibold uppercase tracking-wider",
    md: "px-5 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;