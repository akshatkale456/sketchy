"use client";

import { WebSocketProvider } from "@/components/WebSocketProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WebSocketProvider>
      {children}
    </WebSocketProvider>
  );
}
