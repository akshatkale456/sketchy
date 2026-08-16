"use client";

import AnimatedPencil from "@/components/AnimatedPencil";
import Link from "next/link";
import { Button } from "@/components/components/ui/button";
import dynamic from "next/dynamic";
import { useBoardStore } from "@/store/useBoardStore";
import { motion } from "framer-motion";

const Canvas = dynamic(() => import("@/components/WhiteboardCanvas"), { ssr: false });

export default function Home() {
  const sendMsg = (msg: any) => {};
  const { activeTool, setActiveTool } = useBoardStore();

  return (
    <div className="bg-base font-sans text-primary selection:bg-primary selection:text-default">
      
      {/* Header/Nav */}
      <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
        <div className="flex-1">
          <h1 className="text-2xl font-black tracking-tight text-primary">
            sketchy
          </h1>
        </div>
        <div className="hidden lg:flex flex-1 justify-center">
          <AnimatedPencil />
        </div>
        <div className="flex-1 flex justify-end items-center gap-4">
          <Link href="/signin">
            <Button className="bg-surface text-primary hover:bg-secondary hover:text-primary border-default border-2 font-bold rounded-full px-6 py-5 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] transition-all">
              Sign in
            </Button>
          </Link>
          <Link href="/board">
            <Button className="bg-primary text-primary hover:bg-[#c4ec2e] border-default border-2 font-bold rounded-full px-6 py-5 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] transition-all">
              Go to Board
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative pt-20">
        <h2 className="text-6xl md:text-8xl font-black text-primary mb-6 text-center tracking-tight leading-[1.1] max-w-4xl">
          Where ideas take shape.
        </h2>
        <p className="text-xl md:text-2xl text-muted max-w-2xl text-center font-bold mb-12">
          A collaborative whiteboard for teams who think better together.
        </p>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 flex flex-col items-center text-muted font-bold"
        >
          <span>Scroll down</span>
          <span className="text-2xl mt-2">↓</span>
        </motion.div>
      </section>

      {/* Interactive Whiteboard Section */}
      <section className="min-h-screen relative flex flex-col items-center justify-center bg-surface border-t-4 border-default overflow-hidden py-20 px-4">
        
        <div className="text-center mb-12 z-20">
          <h3 className="text-4xl md:text-5xl font-black text-primary">Try it out right here</h3>
          <p className="text-lg text-muted font-bold mt-4">Select a tool and start sketching on the board below.</p>
        </div>

        {/* Floating Elements (Background) */}
        
        {/* Floating Mini Pencil */}
        <motion.div 
          animate={{ y: [-15, 15, -15], rotate: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-[15%] left-[15%] text-5xl z-0 opacity-80"
        >
          ✏️
        </motion.div>

        {/* Floating Mini Rubber/Eraser */}
        <motion.div 
          animate={{ y: [15, -15, 15], rotate: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[25%] right-[15%] text-5xl z-0 opacity-80"
        >
          🧽
        </motion.div>

        {/* Floating Mini Palette */}
        <motion.div 
          animate={{ x: [-10, 10, -10], rotate: [-5, 15, -5] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
          className="absolute top-[25%] right-[20%] text-4xl z-0 opacity-80"
        >
          🎨
        </motion.div>

        {/* Floating Mini Ruler */}
        <motion.div 
          animate={{ x: [10, -10, 10], rotate: [20, 0, 20] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-[15%] left-[20%] text-4xl z-0 opacity-80"
        >
          📏
        </motion.div>

        {/* Floating Mini Compass */}
        <motion.div 
          animate={{ y: [-10, 10, -10], rotate: [-15, 5, -15] }}
          transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[50%] left-[8%] text-5xl z-0 opacity-70"
        >
          🧭
        </motion.div>

        {/* Floating Mini Scissors */}
        <motion.div 
          animate={{ y: [10, -10, 10], rotate: [5, -15, 5] }}
          transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut", delay: 3 }}
          className="absolute top-[60%] right-[8%] text-4xl z-0 opacity-70"
        >
          ✂️
        </motion.div>

        {/* Floating Squiggly Lines */}
        <motion.svg 
          animate={{ x: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute top-[30%] right-[10%] w-24 h-24 z-0 opacity-50" 
          viewBox="0 0 100 100" fill="none" stroke="var(--color-secondary)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M10,50 Q25,10 50,50 T90,50" />
        </motion.svg>

        <motion.svg 
          animate={{ x: [10, -10, 10], rotate: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[30%] left-[10%] w-24 h-24 z-0 opacity-50" 
          viewBox="0 0 100 100" fill="none" stroke="var(--color-primary)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M10,80 Q30,20 60,60 T90,20" />
        </motion.svg>

        {/* The Whiteboard App Container (Decreased Size) */}
        <div className="relative w-full max-w-4xl h-[450px] bg-white border-4 border-default rounded-3xl shadow-[16px_16px_0px_0px_rgba(24,24,27,1)] flex flex-col z-10 overflow-hidden">
          
          {/* Mock Browser Header & Toolbar */}
          <div className="h-16 border-b-4 border-default bg-base flex items-center justify-between px-6 z-20 shrink-0">
            {/* Mock Window Dots */}
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-default bg-error" />
              <div className="w-4 h-4 rounded-full border-2 border-default bg-primary" />
              <div className="w-4 h-4 rounded-full border-2 border-default bg-success" />
            </div>

            {/* Actual Toolbar */}
            <div className="flex gap-2 p-1 bg-white rounded-xl border-2 border-default">
              <button 
                className={`px-3 py-1 font-bold rounded-lg border-2 ${activeTool === 'PENCIL' ? 'bg-primary border-default shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]' : 'border-transparent text-muted hover:bg-surface'}`} 
                onClick={() => setActiveTool('PENCIL')}
              >
                ✏️ Draw
              </button>
              <button 
                className={`px-3 py-1 font-bold rounded-lg border-2 ${activeTool === 'RECTANGLE' ? 'bg-primary border-default shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]' : 'border-transparent text-muted hover:bg-surface'}`} 
                onClick={() => setActiveTool('RECTANGLE')}
              >
                ⬜ Shape
              </button>
              <button 
                className={`px-3 py-1 font-bold rounded-lg border-2 ${activeTool === 'ERASER' ? 'bg-error border-default shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] text-white' : 'border-transparent text-muted hover:bg-surface'}`} 
                onClick={() => setActiveTool('ERASER')}
              >
                🧽 Erase
              </button>
            </div>
          </div>

          {/* The Canvas Area */}
          <div className="flex-1 relative cursor-crosshair overflow-hidden">
            <div className="absolute top-0 left-0">
              <Canvas sendMsg={sendMsg} />
            </div>
          </div>

        </div>
      </section>

      {/* Voice Call Feature Section */}
      <section className="min-h-screen relative flex flex-col md:flex-row items-center justify-center bg-primary border-t-4 border-default overflow-hidden py-20 px-4 md:px-20 gap-16">
        
        {/* Text Content */}
        <div className="flex-1 max-w-xl z-10">
          <h3 className="text-5xl md:text-7xl font-black text-primary mb-6 tracking-tight leading-[1.1]">
            Talk while you sketch.
          </h3>
          <p className="text-xl md:text-2xl text-primary font-bold mb-8">
            Connect with your friends in private rooms. Enjoy crystal-clear built-in voice calls so you can brainstorm together without ever leaving the board.
          </p>
          <Link href="/board">
            <Button className="bg-surface text-primary hover:bg-white border-default border-2 font-bold rounded-full px-8 py-6 text-lg shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] transition-all">
              Start a Voice Room
            </Button>
          </Link>
        </div>

        {/* Visual / Animation Showcase */}
        <div className="flex-1 flex justify-center items-center z-10 relative w-full">
          {/* Main Voice Call Card */}
          <div className="w-full max-w-md bg-base border-4 border-default rounded-3xl shadow-[16px_16px_0px_0px_rgba(24,24,27,1)] p-8 relative z-10">
            
            <div className="flex justify-between items-center mb-8 border-b-4 border-default pb-4">
              <span className="font-black text-2xl text-primary">Room: Brainstorm</span>
              <div className="px-3 py-1 bg-success border-2 border-default rounded-full text-sm font-bold flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                Voice Live
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Avatar 1 (Talking) */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <div className="w-24 h-24 bg-secondary border-4 border-default rounded-full flex items-center justify-center text-4xl shadow-[6px_6px_0px_0px_rgba(24,24,27,1)]">
                    👩‍🎨
                  </div>
                  {/* Pulsing Mic Indicator */}
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }} 
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute -bottom-2 -right-2 bg-success w-10 h-10 rounded-full border-4 border-default flex items-center justify-center text-xl z-10 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]"
                  >
                    🎤
                  </motion.div>
                </div>
                <span className="font-black text-xl text-primary">Alex</span>
              </div>

              {/* Avatar 2 (Listening) */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 bg-error border-4 border-default rounded-full flex items-center justify-center text-4xl shadow-[6px_6px_0px_0px_rgba(24,24,27,1)]">
                  👨‍💻
                </div>
                <span className="font-bold text-xl text-primary opacity-80">Sam</span>
              </div>
              
              {/* Avatar 3 (Listening) */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 bg-surface border-4 border-default rounded-full flex items-center justify-center text-4xl shadow-[6px_6px_0px_0px_rgba(24,24,27,1)]">
                  🧑‍🚀
                </div>
                <span className="font-bold text-xl text-primary opacity-80">Jordan</span>
              </div>

              {/* Add user button */}
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="w-24 h-24 bg-white border-4 border-default border-dashed rounded-full flex items-center justify-center text-4xl text-muted cursor-pointer hover:bg-surface transition-colors hover:scale-105">
                  +
                </div>
                <span className="font-bold text-xl text-muted">Invite</span>
              </div>
            </div>
            
          </div>
          
          {/* Decorative spinning dashed circle */}
          <motion.svg 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute -top-10 -right-10 w-64 h-64 z-0 opacity-20" 
            viewBox="0 0 100 100" fill="none" stroke="var(--border-default)" strokeWidth="2" strokeDasharray="4 4"
          >
            <circle cx="50" cy="50" r="48" />
          </motion.svg>
        </div>
      </section>

    </div>
  );
}
