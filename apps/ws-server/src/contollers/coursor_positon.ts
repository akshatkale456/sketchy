import { webuser, CursorMovePayload } from "../types";
import { rooms } from "../store";

export const handleCursorMove = (ws: webuser, payload: CursorMovePayload) => {
  const broadcastMessage = JSON.stringify({
    type: 'CURSOR_MOVE',
    userId: ws.userid, 
    payload: payload   
  });

  const currentroom = rooms.get(ws.roomname);
  if (currentroom) {
      currentroom.forEach((element) => {
          if (element.readyState === 1 && element !== ws) {
              element.send(broadcastMessage);
          }
      });
  }
};