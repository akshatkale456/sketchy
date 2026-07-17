import { webuser, joinroom } from "../types";


const DRAW_SHAPE = (ws:webuser,payload:joinroom)=>{
    const broadcastMessage= JSON.stringify({
        type:'JOIN_ROOM',
        userid:ws.userid,
        payload:payload
    })

}