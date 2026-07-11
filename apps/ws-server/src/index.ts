import { WebSocketServer } from 'ws';

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8080; 


const wss = new WebSocketServer({ port: PORT });

wss.on("connection",(wss, req:)=>{

})

 

console.log(`WebSocket server initialized and running on port ${PORT}`);
