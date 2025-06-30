import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = ""
}) => {
  const variants = {
    primary: 'bg-global-11 text-global-1 hover:bg-global-8',
    secondary: 'bg-button-2 text-button-3 hover:bg-global-3',
    success: 'bg-button-1 text-button-1 hover:bg-global-4',
    warning: 'bg-button-4 text-button-4 hover:bg-global-10',
    danger: 'bg-button-3 text-button-5 hover:bg-global-9'
  };

  const sizes = {
    sm: 'px-3 py-1 text-xs h-6',
    md: 'px-4 py-2 text-sm h-8',
    lg: 'px-5 py-3 text-base h-10'
  };

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center gap-2 rounded-md font-work-sans font-medium
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;