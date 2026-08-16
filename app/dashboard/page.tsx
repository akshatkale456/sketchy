"use client";

import { useState } from "react";
import { Button } from "@/components/components/ui/button";
import { Input } from "@/components/components/ui/input";
import { Label } from "@/components/components/ui/label";
import { Badge } from "@/components/components/ui/badge";
import { ArrowRight, Plus, Users, Clock, Presentation } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  // Mock active rooms
  const activeRooms = [
    { id: "brainstorm-xyz", name: "Product Brainstorming", participants: 4, time: "10m ago" },
    { id: "design-sync-12", name: "Weekly Design Sync", participants: 2, time: "1h ago" },
    { id: "arch-review", name: "Architecture Review", participants: 7, time: "2h ago" },
  ];

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomId.trim()) {
      router.push(`/board/${roomId}`);
    }
  };

  const handleCreate = () => {
    // Generate a random room ID
    const newRoomId = Math.random().toString(36).substring(2, 9);
    router.push(`/board/${newRoomId}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-6 md:p-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40 -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-purple-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto space-y-12 mt-8">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
              Dashboard
            </h1>
            <p className="text-slate-500 font-medium mt-2 text-lg">
              Welcome back. Ready to sketch some ideas?
            </p>
          </div>
          
          <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              A
            </div>
            <span className="font-semibold text-slate-700 text-sm">Alex</span>
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[4rem] -z-10 opacity-50 transition-transform group-hover:scale-110"></div>
              
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Plus strokeWidth={2.5} size={24} />
              </div>
              
              <h2 className="text-2xl font-bold text-slate-800 mb-2">New Canvas</h2>
              <p className="text-slate-500 text-sm mb-6">Create a fresh whiteboard and invite your team to collaborate in real-time.</p>
              
              <Button onClick={handleCreate} className="w-full bg-[#0047d4] hover:bg-[#003bb3] text-white rounded-full h-12 text-base font-bold shadow-md">
                Create Room
              </Button>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Join a Room</h2>
              <p className="text-slate-500 text-sm mb-6">Have an invite code? Enter it below to join an existing session.</p>
              
              <form onSubmit={handleJoin} className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Room ID</Label>
                  <Input 
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    placeholder="e.g. design-sync-12" 
                    className="bg-slate-50 border-slate-200 h-12 text-slate-800 placeholder:text-slate-400 focus-visible:ring-blue-500 rounded-xl px-4"
                    required
                  />
                </div>
                <Button type="submit" variant="outline" className="w-full h-12 text-slate-700 font-bold border-slate-200 rounded-xl hover:bg-slate-50">
                  Join Room <ArrowRight size={18} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column: Active Rooms */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                    <Presentation size={20} strokeWidth={2.5} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Active Rooms</h2>
                </div>
                <Badge className="bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border-none font-bold px-3 py-1">
                  {activeRooms.length} Live
                </Badge>
              </div>

              <div className="space-y-4 flex-1">
                {activeRooms.map((room) => (
                  <div key={room.id} className="group border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all rounded-2xl p-5 flex items-center justify-between bg-white cursor-pointer" onClick={() => router.push(`/board/${room.id}`)}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-blue-500 group-hover:bg-blue-50 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 2 7 12 12 22 7 12 2" />
                          <polyline points="2 12 12 17 22 12" />
                          <polyline points="2 17 12 22 22 17" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors text-lg">
                          {room.name}
                        </h3>
                        <div className="flex items-center gap-4 mt-1 text-sm font-medium text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <Users size={14} />
                            <span>{room.participants}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock size={14} />
                            <span>{room.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:-rotate-45">
                      <ArrowRight size={18} strokeWidth={2.5} />
                    </div>
                  </div>
                ))}

                {activeRooms.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full text-slate-400 py-12">
                    <Presentation size={48} strokeWidth={1} className="mb-4 opacity-50" />
                    <p className="font-medium text-center">No active rooms found.</p>
                    <p className="text-sm">Create a new canvas to get started.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
        </main>
      </div>
    </div>
  );
}
