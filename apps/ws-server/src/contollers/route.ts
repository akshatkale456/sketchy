import { clientmessage, routetype, webuser } from "../types";
import { JOIN } from "./join_room";
import { DRAW_SHAPE } from "./drawshape";
import { REMOVE_SHAPE } from "./remove_shape";
import { handleCursorMove } from "./coursor_positon";

export const route = (ws: webuser, rawmessage: clientmessage | string | Buffer) => {
    try {
        const parsedata = JSON.parse(rawmessage.toString());

        switch (parsedata.type) {
            case routetype.JOIN_ROOM:
                JOIN(ws, parsedata.payload);
                break;
            case routetype.DRAW_SHAPE:
                DRAW_SHAPE(ws, parsedata.payload);
                break;
            case routetype.REMOVE_SHAPE:
                REMOVE_SHAPE(ws, parsedata.payload);
                break;
            case routetype.CURSOR_POSITION:
                handleCursorMove(ws, parsedata.payload);
                break;
            default:
                console.warn("Unknown message type:", parsedata.type);
        }
    } catch (error) {
        console.error("Failed to parse WebSocket message:", error);
    }
};