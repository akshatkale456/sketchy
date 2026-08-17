"use client";

import { motion } from "framer-motion";

export default function AnimatedPencil() {
  return (
    <div className="flex items-center justify-center w-auto">
      {}
      <motion.div
        animate={{ x: [-30, 2, -30] }}
        transition={{ 
          repeat: Infinity, 
          duration: 3, 
          ease: "easeInOut" 
        }}
        className="flex items-center drop-shadow-[4px_4px_0px_rgba(24,24,27,1)] z-20"
      >
        {}
        <div className="w-0 h-0 border-y-[6px] border-y-transparent border-r-[12px] border-r-[#2C2D2F]" />
        
        {}
        <div className="w-0 h-0 border-y-[24px] border-y-transparent border-r-[48px] border-r-[#FFF9E6]" />
      </motion.div>

      {}
      <div className="flex h-[48px] items-center drop-shadow-[4px_4px_0px_rgba(24,24,27,1)] z-10">
        
        {}
        <div className="h-full px-8 flex items-center justify-center bg-primary border-y-4 border-l-4 border-default cursor-pointer hover:bg-[#c4ec2e] transition-colors group">
          <span className="font-bold text-primary text-lg group-hover:scale-110 transition-transform">
            Features
          </span>
        </div>

        {}
        <div className="h-full px-8 flex items-center justify-center bg-primary border-y-4 border-l-4 border-default cursor-pointer hover:bg-[#c4ec2e] transition-colors group">
          <span className="font-bold text-primary text-lg group-hover:scale-110 transition-transform">
            FAQ
          </span>
        </div>

        {}
        <div className="h-full px-8 flex items-center justify-center bg-primary border-y-4 border-l-4 border-default cursor-pointer hover:bg-[#c4ec2e] transition-colors group">
          <span className="font-bold text-primary text-lg group-hover:scale-110 transition-transform">
            Policy
          </span>
        </div>

        {}
        <div className="h-full w-12 bg-slate-200 border-4 border-default flex flex-col justify-evenly px-1">
          <div className="w-full h-[3px] bg-[#18181B] opacity-40 rounded-full" />
          <div className="w-full h-[3px] bg-[#18181B] opacity-40 rounded-full" />
          <div className="w-full h-[3px] bg-[#18181B] opacity-40 rounded-full" />
        </div>

        {}
        <div className="h-full w-16 bg-[#FF6B6B] border-y-4 border-r-4 border-default rounded-r-2xl" />
      </div>
    </div>
  );
}
