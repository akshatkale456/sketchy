"use client";

import { useRef } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/components/ui/button";
import { Input } from "@/components/components/ui/input";
import { Label } from "@/components/components/ui/label";
import { Badge } from "@/components/components/ui/badge";

export default function Signin() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSignin = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    
    console.log("Signin Data:", { email, password });
    
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center relative overflow-hidden font-sans pt-12 pb-12">
      {}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[30%] -left-[5%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute bottom-[15%] left-[10%] hidden md:block">
        <Badge className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1.5 rounded-full shadow-sm gap-2 border-slate-200">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M21 3L3 10.53v.98l6.84 2.66 2.66 6.84h.98L21 3z"/></svg>
          Alex is diagramming...
        </Badge>
      </div>

      <div className="absolute top-[20%] right-[10%] hidden md:block opacity-60">
        {}
        <div className="w-24 h-16 bg-white border border-slate-200 rounded-lg shadow-sm rotate-6 p-2 flex flex-col gap-1">
          <div className="h-2 bg-slate-100 w-1/3 rounded"></div>
          <div className="h-2 bg-blue-100 w-2/3 rounded"></div>
        </div>
      </div>

      {}
      <div className="text-center mb-8 z-10 flex flex-col items-center">
        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 12 12 17 22 12" />
            <polyline points="2 17 12 22 22 17" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-3 tracking-tight">
          Welcome back
        </h1>
        <p className="text-slate-500 font-medium">
          Resume your creative flow on Canvasly.
        </p>
      </div>

      {}
      <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl w-full max-w-[420px] z-10 border border-slate-100 relative overflow-hidden">
        {}
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[4rem] -z-10 opacity-50"></div>

        <form onSubmit={handleSignin} className="space-y-6">
          <div className="space-y-2">
            <Label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</Label>
            <div className="relative">
              <Input 
                ref={emailRef}
                type="email" 
                placeholder="name@company.com" 
                className="bg-white border-slate-200 h-12 text-slate-800 placeholder:text-slate-400 focus-visible:ring-blue-500 rounded-xl px-4"
                required
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium text-lg">@</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Password</Label>
              <a href="#" className="text-xs font-bold text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <div className="relative">
              <Input 
                ref={passwordRef}
                type="password" 
                placeholder="••••••••" 
                className="bg-white border-slate-200 h-12 text-slate-800 placeholder:text-slate-400 focus-visible:ring-blue-500 rounded-xl px-4 pr-10"
                required
              />
              <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full bg-[#0047d4] hover:bg-[#003bb3] text-white rounded-full h-12 text-base font-bold shadow-md mt-2">
            Sign in to Canvasly <span className="ml-1.5 font-bold">→</span>
          </Button>
        </form>

        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-slate-100"></div>
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">OR CONTINUE WITH</span>
          <div className="flex-1 h-px bg-slate-100"></div>
        </div>

        <div className="flex gap-4">
          <Button type="button" onClick={() => signIn("google", { callbackUrl: "/board" })} variant="outline" className="w-full h-11 text-slate-600 font-bold border-slate-200 rounded-xl hover:bg-slate-50">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Google
          </Button>
          <Button type="button" onClick={() => signIn("github", { callbackUrl: "/board" })} variant="outline" className="w-full h-11 text-slate-600 font-bold border-slate-200 rounded-xl hover:bg-slate-50">
            <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            GitHub
          </Button>
        </div>
      </div>

      <div className="mt-8 text-center flex flex-col gap-6 items-center">
        <p className="text-[13px] font-medium text-slate-500">
          Don't have an account? <a href="/signup" className="text-blue-600 font-bold hover:underline">Create a free workspace</a>
        </p>
        
        <div className="flex gap-4 text-[11px] font-semibold text-slate-400">
          <a href="#" className="hover:text-slate-600">Privacy Policy</a>
          <span>·</span>
          <a href="#" className="hover:text-slate-600">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}
