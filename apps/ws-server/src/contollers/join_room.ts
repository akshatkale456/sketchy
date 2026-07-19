import { webuser, joinroom } from "../types";
import { rooms } from "../store";

export const JOIN = (ws: webuser, payload: joinroom) => {
    if (!rooms.has(payload.roomname)) {
        rooms.set(payload.roomname, new Set());
    }
   
    rooms.get(payload.roomname)?.add(ws);
    ws.roomname = payload.roomname;
    
    const broadcastMessage = JSON.stringify({
        type: 'JOIN_ROOM',
        userid: ws.userid,
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