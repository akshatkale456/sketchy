import { webuser } from "./types";

// Global state for rooms: Map of roomName -> Set of WebSocket clients
export const rooms = new Map<string, Set<webuser>>();
