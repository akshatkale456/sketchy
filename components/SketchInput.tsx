import React from 'react';
import { sketchyBorderShadow } from './sketchyStyles';

export const SketchInput = ({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input 
      className={`bg-white px-4 py-2 outline-none focus:ring-0 placeholder:text-gray-500 ${sketchyBorderShadow} ${className}`}
      {...props}
    />
  );
};
