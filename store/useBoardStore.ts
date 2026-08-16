import { create } from 'zustand';
import { WhiteboardElement, Cursor, Tool } from '../lib/common/types';

interface BoardState {
  // 1. Toolbar State
  activeTool: Tool; 
  setActiveTool: (tool: Tool) => void;

  // 2. Elements State
  elements: WhiteboardElement[];
  setElements: (elements: WhiteboardElement[]) => void;
  
  // Creating new shapes
  startDrawing: (newElement: WhiteboardElement) => void;
  updateDrawing: (currentX: number, currentY: number) => void;
  
  // NEW: Editing older shapes (Select Tool)
  updateElementById: (id: string, newAttributes: any) => void;
  
  // Deleting shapes (Eraser Tool)
  deleteElement: (id: string) => void;
  
  // Receiving shapes from the WebSocket Server
  updateFromNetwork: (incomingElement: WhiteboardElement) => void;

  // 3. Multiplayer Cursors State
  cursors: Record<string, Cursor>;
  updateCursor: (userId: string, cursor: Cursor) => void;
  removeCursor: (userId: string) => void;

  // 4. Global WebSocket sender
  sendMsg: (msg: any) => void;
  setSendMsg: (fn: (msg: any) => void) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  activeTool: 'PENCIL',
  setActiveTool: (tool) => set({ activeTool: tool }),

  elements: [],
  setElements: (elements) => set({ elements }),

  startDrawing: (newElement) => {
    set((state) => ({
      elements: [...state.elements, newElement]
    }));
    // Fire and forget POST request
    fetch('/api/shapes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ shape: newElement }),
    }).catch(console.error);
  },

  // Fast update for the shape actively being drawn right now
  updateDrawing: (currentX, currentY) => set((state) => {
    const lastIndex = state.elements.length - 1;
    if (lastIndex < 0) return state;

    const lastElement = state.elements[lastIndex];
    const updatedElements = [...state.elements];

    if (lastElement.type === 'PENCIL') {
      updatedElements[lastIndex] = {
        ...lastElement,
        points: [...lastElement.points, currentX, currentY],
      };
    } else if (lastElement.type === 'RECTANGLE') {
      updatedElements[lastIndex] = {
        ...lastElement,
        width: currentX - lastElement.x,
        height: currentY - lastElement.y,
      };
    }

    return { elements: updatedElements };
  }),

  // NEW: Precise update for older shapes being dragged/edited
  updateElementById: (id, newAttributes) => {
    set((state) => {
      const updatedElements = state.elements.map((el) => 
        el.id === id ? { ...el, ...newAttributes } : el
      );
      
      const updatedElement = updatedElements.find((el) => el.id === id);
      
      // Fire and forget PUT request
      if (updatedElement) {
        fetch('/api/shapes', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, shape: updatedElement }),
        }).catch(console.error);
      }

      return { elements: updatedElements };
    });
  },

  deleteElement: (idToRemove) => {
    set((state) => ({
      elements: state.elements.filter((el) => el.id !== idToRemove)
    }));
    // Fire and forget DELETE request
    fetch(`/api/shapes?id=${idToRemove}`, {
      method: 'DELETE',
    }).catch(console.error);
  },

  updateFromNetwork: (incoming) => set((state) => {
    const existsIndex = state.elements.findIndex((el) => el.id === incoming.id);
    if (existsIndex >= 0) {
      // It exists, update it!
      const newElements = [...state.elements];
      newElements[existsIndex] = incoming;
      return { elements: newElements };
    }
    // It's brand new, add it!
    return { elements: [...state.elements, incoming] };
  }),

  cursors: {},
  updateCursor: (userId, cursor) => set((state) => ({
    cursors: { ...state.cursors, [userId]: cursor }
  })),
  removeCursor: (userId) => set((state) => {
    const newCursors = { ...state.cursors };
    delete newCursors[userId];
    return { cursors: newCursors };
  }),

  sendMsg: (msg) => { console.warn("sendMsg called before WebSocket was connected") },
  setSendMsg: (fn) => set({ sendMsg: fn }),
}));
