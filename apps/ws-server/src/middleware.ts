import { WebSocketServer } from 'ws';
import type { MyUserPayload } from './types';
import { route } from './contollers/route';
 import http from 'http'
 import url from 'url'
 import jwt from 'jsonwebtoken'
 import { webuser } from './types';
  const JWT_SECRET = "2211"
 const server = http.createServer()
 const wss = new WebSocketServer({noServer:true})
 wss.on('connection', (ws: webuser, request) => {
  console.log(`User ${ws.userid} connected!`);

  // 3. The Front Door for messages
  ws.on('message', (rawBuffer) => {
    // Convert binary buffer to string
    const rawString = rawBuffer.toString();
    
    // Hand the authenticated socket and string to your Mailroom Clerk
    route(ws, rawString);
  });

  ws.on('close', () => {
    console.log(`User ${ws.userid} disconnected`)})});


  server.on('upgrade',(request,socket,head)=>{
    if( request.url == undefined){
        return}
    const { query } = url.parse(request.url,true)
    const token = query.token
    if(!token){
        socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
    socket.destroy();
    return;
  }
    const decode =  jwt.verify(token as string,JWT_SECRET)as MyUserPayload
    if(!decode){
      socket.destroy()
    }
    wss.handleUpgrade(request,socket,head,(ws)=>{
   const myWs =  ws as webuser
      myWs.userid = decode.id
       wss.emit('connection',myWs,request)


    })
   
  })
  server.listen(8080 ,()=>{
    console.log(
      'server connected to '
    )})

