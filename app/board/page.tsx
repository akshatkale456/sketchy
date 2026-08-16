// app/page.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useBoardStore } from '@/store/useBoardStore';
import { Tool } from '@/lib/common/types';
import { LiveKitRoom, VideoConference, RoomAudioRenderer } from '@livekit/components-react';
import '@livekit/components-styles';

const Canvas = dynamic(() => import('@/components/WhiteboardCanvas'), { ssr: false });

export default function BoardPage() {
  const { activeTool, setActiveTool, sendMsg } = useBoardStore();
  const [lkToken, setLkToken] = useState<string | null>(null);
  const [lkUrl, setLkUrl] = useState<string>('');

  useEffect(() => {
    // Fetch LiveKit token for this room (using a static room name for now)
    const fetchLiveKitToken = async () => {
      try {
        const res = await fetch('/api/livekit?room=sketchy-main-room');
        const data = await res.json();
        if (data.token) {
          setLkToken(data.token);
          setLkUrl(data.wsUrl);
        }
      } catch (e) {
        console.error("Failed to fetch LiveKit token", e);
      }
    };
    fetchLiveKitToken();
  }, []);

  const getButtonClass = (tool: Tool) => 
    activeTool === tool ? "bg-blue-600 text-white px-4 py-2 rounded shadow" : "bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-100 shadow";

  if (!lkToken) {
    return <div className="flex items-center justify-center h-screen bg-[#f0f0f0]">Connecting to room...</div>;
  }

  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={lkToken}
      serverUrl={lkUrl}
      connect={true}
      data-lk-theme="default"
      className="relative w-screen h-screen overflow-hidden bg-[#f0f0f0]"
    >
      
      {/* THE TOOLBAR */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 p-2 bg-white rounded-lg shadow-xl border">
        <button className={getButtonClass('HAND')} onClick={() => setActiveTool('HAND')}>🖐️ Pan</button>
        <button className={getButtonClass('PENCIL')} onClick={() => setActiveTool('PENCIL')}>✏️ Pen</button>
        <button className={getButtonClass('RECTANGLE')} onClick={() => setActiveTool('RECTANGLE')}>⬜ Rect</button>
        <button className={getButtonClass('ERASER')} onClick={() => setActiveTool('ERASER')}>🧽 Eraser</button>
      </div>

      {/* THE CANVAS */}
      <div className="absolute inset-0 z-0">
        <Canvas sendMsg={sendMsg} />
      </div>

      {/* LIVEKIT VIDEO CONFERENCE OVERLAY */}
      <div className="absolute bottom-4 right-4 w-96 h-96 z-40 bg-black rounded-xl overflow-hidden shadow-2xl">
        <VideoConference />
        <RoomAudioRenderer />
      </div>

    </LiveKitRoom>
  );
}
