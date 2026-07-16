 import type { JwtPayload } from "jsonwebtoken";
 import type { WebSocket } from "ws";
 export interface webuser extends WebSocket{
    userid:String
}
 export interface MyUserPayload extends JwtPayload {
  id: string;
  email: string; // Add any other fields you encode
}
export interface clientmessage {
     type :string,
     payload:any 
}
 export enum routetype {
     JOIN_ROOM = 'JOIN_ROOM',
     DRAW_SHAPE = 'DRAW_SHAPE',
     REMOVE_SHAPE = 'REMOVE_SHAPE',
     CURSOR_POSITION = 'CURSOR_POSITION'


} 
 interface BaseElement {
  id: string;
  type: string; 
}

interface RectangleElement extends BaseElement {
  type: 'rectangle';
  x1: number; y1: number; x2: number; y2: number;
}

interface TextElement extends BaseElement {
  type: 'text';
  x1: number; y1: number;
  text: string;
  fontSize: number;
}

interface PencilElement extends BaseElement {
  type: 'pencil';
  points: { x: number; y: number }[];
}
export interface CursorMovePayload {
  x: number;
  y: number;
}

export type WhiteboardElement = RectangleElement | TextElement | PencilElement;