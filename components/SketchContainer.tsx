import React from 'react';
import { sketchyBorderShadow } from './sketchyStyles';

export const SketchContainer = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`bg-[#fdf7e5] p-6 mb-6 ${sketchyBorderShadow} ${className}`}>
      {children}
    </div>
  );
};
