
"use client";

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useBoardStore } from '@/store/useBoardStore';
import { Tool } from '@/lib/common/types';

const Canvas = dynamic(() => import('@/components/WhiteboardCanvas'), { ssr: false });

export default function BoardPage() {
  const { activeTool, setActiveTool, sendMsg } = useBoardStore();

  const getButtonClass = (tool: Tool) => 
    activeTool === tool ? "bg-blue-600 text-white px-4 py-2 rounded shadow" : "bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-100 shadow";

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#f0f0f0]">
      
      {}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 p-2 bg-white rounded-lg shadow-xl border">
        <button className={getButtonClass('HAND')} onClick={() => setActiveTool('HAND')}>🖐️ Pan</button>
        <button className={getButtonClass('PENCIL')} onClick={() => setActiveTool('PENCIL')}>✏️ Pen</button>
        <button className={getButtonClass('RECTANGLE')} onClick={() => setActiveTool('RECTANGLE')}>⬜ Rect</button>
        <button className={getButtonClass('ERASER')} onClick={() => setActiveTool('ERASER')}>🧽 Eraser</button>
      </div>

      {}
      <div className="absolute inset-0 z-0">
        <Canvas sendMsg={sendMsg} />
      </div>

    </div>
  );
}
