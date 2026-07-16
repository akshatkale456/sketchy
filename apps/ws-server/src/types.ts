 import type { JwtPayload } from "jsonwebtoken";
 import type { WebSocket } from "ws";
 export interface webuser extends WebSocket{
    user:String
}
 export interface MyUserPayload extends JwtPayload {
  id: string;
  email: string; // Add any other fields you encode
}