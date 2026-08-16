"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useBoardStore } from '@/store/useBoardStore';

export function WebSocketProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const wsRef = useRef<WebSocket | null>(null);
  
  const { 
    updateFromNetwork, 
    deleteElement, 
    updateCursor, 
    removeCursor, 
    setSendMsg 
  } = useBoardStore();

  useEffect(() => {
    // Exclude websocket connection on signin and signup routes
    if (pathname === '/signin' || pathname === '/signup' || pathname === '/api/auth/signin' || pathname === '/api/auth/signup') {
      return;
    }

    let ws: WebSocket | null = null;
    let isMounted = true;

    const connectWs = async () => {
      try {
        const res = await fetch('/api/ws-token');
        const data = await res.json();
        
        if (!data.token || !isMounted) {
          return;
        }

        ws = new WebSocket(`ws://localhost:8080?token=${data.token}`);
        wsRef.current = ws;

        // Provide the send function to the global store
        setSendMsg((msg: any) => {
          if (ws?.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify(msg));
          }
        });

        ws.onmessage = (event) => {
          try {
            const message = JSON.parse(event.data);
            if (message.type === 'ELEMENT_UPDATE') {
              updateFromNetwork(message.element);
            } 
            else if (message.type === 'ELEMENT_DELETE') {
              deleteElement(message.id);
            }
            else if (message.type === 'CURSOR_MOVE') {
              updateCursor(message.userId, { x: message.x, y: message.y, color: message.color, name: message.name });
            }
            else if (message.type === 'USER_LEFT') {
              removeCursor(message.userId);
            }
          } catch (e) {
            console.error("Error parsing WS message", e);
          }
        };
      } catch (err) {
        console.error("Error connecting to WS:", err);
      }
    };

    connectWs();

    return () => {
      isMounted = false;
      if (ws) {
        ws.close();
      }
    };
  }, [pathname, updateFromNetwork, deleteElement, updateCursor, removeCursor, setSendMsg]);

  return <>{children}</>;
}
