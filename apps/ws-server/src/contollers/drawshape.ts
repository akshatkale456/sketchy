import { webuser, WhiteboardElement } from "../types";

const DRAW_SHAPE = (ws:webuser,payload:WhiteboardElement)=>{
    const broadcastMessage= JSON.stringify({
        type:'ELEMENT_ADDED',
        userid:ws.userid,
        payload:payload
    })

}