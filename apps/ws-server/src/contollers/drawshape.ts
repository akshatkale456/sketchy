import { webuser, WhiteboardElement } from "../types";
import { rooms } from "../store";

export const DRAW_SHAPE = (ws: webuser, payload: WhiteboardElement) => {
    const broadcastMessage = JSON.stringify({
        type: 'ELEMENT_ADDED',
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