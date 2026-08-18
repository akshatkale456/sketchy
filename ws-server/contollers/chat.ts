import { webuser, chatmessage } from "../../lib/common/types";
import { rooms } from "../store";

export const CHAT = (ws: webuser, payload: chatmessage) => {
    // Make sure we have the user's room name either from payload or the ws instance
    const roomName = payload.roomname || ws.roomname;
    if (!roomName) return;

    const currentroom = rooms.get(roomName);
    
    const broadcastMessage = JSON.stringify({
        type: 'CHAT_MESSAGE',
        userid: ws.userid,
        payload: {
            ...payload,
            senderId: ws.userid, // Inject sender ID
            timestamp: new Date().toISOString()
        }
    });

    if (currentroom) {
        currentroom.forEach((element) => {
            if (element.readyState === 1) {
                // For chat, we might want to send it to everyone including the sender 
                // so the sender gets the confirmation. Or the sender can add it locally.
                // Let's send to everyone so it's consistent.
                element.send(broadcastMessage);
            }
        });
    }
    
    // In a production app with Prisma, we would also insert this chat message into the DB here.
    // Example (pseudo-code, omitting Prisma import for brevity since it's an async operation):
    /*
    prisma.chat.create({
        data: {
            message: payload.message,
            userId: ws.userid,
            roomId: parseInt(roomName), // Assuming roomName maps to ID or we fetch the room ID
        }
    });
    */
};
