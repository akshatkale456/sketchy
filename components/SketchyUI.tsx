import React from 'react';

// Common tailwind classes for the sketchy look
const sketchyBorderShadow = "border-2 border-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]";
const sketchyBorderHover = "hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all";

export const SketchContainer = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`bg-[#fdf7e5] p-6 mb-6 ${sketchyBorderShadow} ${className}`}>
      {children}
    </div>
  );
};

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
    bgClass = "bg-[#fd6c64]"; // red/coral from the sketch
    textClass = "text-white";
  } else if (variant === 'secondary') {
    bgClass = "bg-[#c3e4d9]"; // light green/blue from the sketch
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

export const SketchInput = ({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input 
      className={`bg-white px-4 py-2 outline-none focus:ring-0 placeholder:text-gray-500 ${sketchyBorderShadow} ${className}`}
      {...props}
    />
  );
};

export const SketchTextarea = ({ className = "", ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea 
      className={`bg-white px-4 py-2 outline-none focus:ring-0 placeholder:text-gray-500 resize-none ${sketchyBorderShadow} ${className}`}
      {...props}
    />
  );
};
