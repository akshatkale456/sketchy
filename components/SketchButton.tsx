import React from 'react';
import { sketchyBorderShadow, sketchyBorderHover } from './sketchyStyles';

interface SketchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  active?: boolean;
}

export const SketchButton = ({ 
  children, 
  variant = 'primary', 
  active = false, 
  className = "", 
  ...props 
}: SketchButtonProps) => {
  
  let bgClass = "bg-white";
  let textClass = "text-black";

  if (variant === 'primary') {
    bgClass = "bg-[#fd6c64]"; 
    textClass = "text-white";
  } else if (variant === 'secondary') {
    bgClass = "bg-[#c3e4d9]"; 
  } else if (variant === 'outline') {
    bgClass = active ? "bg-[#c3e4d9]" : "bg-transparent";
  }

  return (
    <button 
      className={`${bgClass} ${textClass} px-4 py-2 font-bold ${sketchyBorderShadow} ${sketchyBorderHover} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
