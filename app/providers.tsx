"use client";

import { SessionProvider } from "next-auth/react";
import { WebSocketProvider } from "@/components/WebSocketProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <WebSocketProvider>
        {children}
      </WebSocketProvider>
    </SessionProvider>
  );
}
