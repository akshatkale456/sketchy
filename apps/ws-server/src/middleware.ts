import { WebSocketServer } from 'ws';
import type { MyUserPayload, webuser } from './types';
 import http from 'http'
 import url from 'url'
 import jwt from 'jsonwebtoken'
  const JWT_SECRET = "2211"
 const server = http.createServer()
 const wss = new WebSocketServer({noServer:true})
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
