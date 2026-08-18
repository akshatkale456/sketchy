import React from 'react';
import { sketchyBorderShadow } from './sketchyStyles';

export const SketchTextarea = ({ className = "", ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea 
      className={`bg-white px-4 py-2 outline-none focus:ring-0 placeholder:text-gray-500 resize-none ${sketchyBorderShadow} ${className}`}
      {...props}
    />
  );
};
