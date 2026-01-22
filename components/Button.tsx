
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'patreon';
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md active:scale-95";
  
  const variants = {
    primary: "bg-[#1192A3] text-white hover:bg-[#0E7A88] border border-transparent",
    secondary: "bg-[#016F93] text-white hover:bg-[#015A75] border border-transparent",
    outline: "bg-transparent text-[#016F93] border-2 border-[#016F93] hover:bg-[#E1F6FA]",
    patreon: "bg-[#1192A3] text-white hover:bg-[#0E7A88] border border-transparent"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {icon}
      {children}
      {variant === 'patreon' && <ExternalLink size={16} />}
    </button>
  );
};
