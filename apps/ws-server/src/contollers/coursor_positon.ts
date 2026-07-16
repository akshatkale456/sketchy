import { webuser, CursorMovePayload } from "../types";



export const handleCursorMove = (ws: webuser, payload: CursorMovePayload) => {
  
  // Package it up for the rest of the room
  const broadcastMessage = JSON.stringify({
    type: 'CURSOR_MOVE',
    userId: ws.userid, // The backend securely injects the ID here!
    payload: payload   // This is just { x: 100, y: 250 }
  });

  // ... broadcast loop logic ...
};