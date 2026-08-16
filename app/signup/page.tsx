"use client";

import { useRef } from "react";
import { Button } from "@/components/components/ui/button";
import { Input } from "@/components/components/ui/input";
import { Label } from "@/components/components/ui/label";
import { Badge } from "@/components/components/ui/badge";

export default function Signup() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    
    console.log("Signup Data:", { name, email, password });
    // TODO: implement actual sign-up logic
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center relative overflow-hidden font-sans">
      {/* Background abstract shapes (optional to match image vibe) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[50%] bg-blue-50 rounded-full blur-3xl"></div>
      </div>

      {/* Floating badges from screenshot */}
      <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2">
        <Badge variant="outline" className="bg-white px-3 py-1 text-xs text-slate-500 rounded-full font-medium shadow-sm gap-2 uppercase tracking-wide border-slate-100">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
          Start thinking together
        </Badge>
      </div>

      <div className="absolute top-[25%] left-[15%] hidden md:block">
        <Badge className="bg-blue-600 hover:bg-blue-600 text-white px-3 py-1 rounded-full shadow-md gap-2">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M21 3L3 10.53v.98l6.84 2.66 2.66 6.84h.98L21 3z"/></svg>
          Alex is designing
        </Badge>
      </div>

      <div className="absolute bottom-[10%] right-[15%] hidden md:block">
        <Badge className="bg-emerald-600 hover:bg-emerald-600 text-white px-3 py-1 rounded-full shadow-md gap-2">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M21 3L3 10.53v.98l6.84 2.66 2.66 6.84h.98L21 3z"/></svg>
          Sarah typing...
        </Badge>
      </div>

      {/* Card */}
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-[440px] z-10 border border-slate-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Create your <span className="text-blue-600">canvas</span>
          </h1>
          <p className="text-sm text-slate-500 font-medium px-4">
            Join 50,000+ creators building on the infinite board.
          </p>
        </div>

        <div className="flex gap-4 mb-6">
          <Button variant="outline" className="w-full h-11 text-slate-600 font-semibold border-slate-200">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Google
          </Button>
          <Button variant="outline" className="w-full h-11 text-slate-600 font-semibold border-slate-200">
            <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            GitHub
          </Button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-slate-200"></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">OR EMAIL</span>
          <div className="flex-1 h-px bg-slate-200"></div>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          <div className="space-y-2">
            <Label className="text-xs font-semibold text-slate-500">Full Name</Label>
            <div className="relative">
              <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              <Input 
                ref={nameRef}
                type="text" 
                placeholder="John Doe" 
                className="pl-9 bg-slate-50 border-slate-200 h-11 text-slate-800 placeholder:text-slate-400 focus-visible:ring-blue-500"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="text-xs font-semibold text-slate-500">Work Email</Label>
            <div className="relative">
              <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <Input 
                ref={emailRef}
                type="email" 
                placeholder="john@company.com" 
                className="pl-9 bg-slate-50 border-slate-200 h-11 text-slate-800 placeholder:text-slate-400 focus-visible:ring-blue-500"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="text-xs font-semibold text-slate-500">Password</Label>
            <div className="relative">
              <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              <Input 
                ref={passwordRef}
                type="password" 
                placeholder="••••••••" 
                className="pl-9 pr-9 bg-slate-50 border-slate-200 h-11 text-slate-800 placeholder:text-slate-400 focus-visible:ring-blue-500"
                required
                minLength={8}
              />
              <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </button>
            </div>
            <p className="text-[10px] text-slate-400 mt-1">At least 8 characters long.</p>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full h-12 text-sm font-bold mt-2 shadow-sm">
            Create account <span className="ml-1.5">→</span>
          </Button>
        </form>

        <p className="text-xs text-center text-slate-500 mt-6 px-4">
          By signing up, you agree to our <a href="#" className="font-semibold text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="font-semibold text-blue-600 hover:underline">Privacy Policy</a>.
        </p>

        <div className="mt-8 text-center text-sm font-medium text-slate-500">
          Already have an account? <a href="/signin" className="text-blue-600 font-bold hover:underline">Sign in</a>
        </div>
      </div>
    </div>
  );
}
