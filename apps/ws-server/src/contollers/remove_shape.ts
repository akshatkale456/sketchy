import { webuser, WhiteboardElement } from "../types";
import { rooms } from "../store";

export const REMOVE_SHAPE = (ws: webuser, payload: WhiteboardElement) => {
    const broadcastMessage = JSON.stringify({
        type: 'ELEMENT_REMOVE',
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