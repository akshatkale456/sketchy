 import type { JwtPayload } from "jsonwebtoken";
 import type { WebSocket } from "ws";
 export interface webuser extends WebSocket{
    userid:String
    roomname:string
}
 export interface MyUserPayload extends JwtPayload {
  id: string;
  email: string; 
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
export interface BaseElement {
  id: string;
  type: string; 
  fill?: string;
  stroke?: string;
  color?: string;
}

export interface RectangleElement extends BaseElement {
  type: 'RECTANGLE';
  x: number; 
  y: number; 
  width: number; 
  height: number;
}

export interface TextElement extends BaseElement {
  type: 'TEXT';
  x: number; 
  y: number;
  text: string;
  fontSize: number;
}

export interface PencilElement extends BaseElement {
  type: 'PENCIL';
  points: number[];
}

export interface CursorMovePayload {
  x: number;
  y: number;
}

export interface joinroom {
   type: 'JOIN_ROOM'
  roomname : string
  token : string
}

export type WhiteboardElement = RectangleElement | TextElement | PencilElement;

export type Tool = "PENCIL" | "RECTANGLE" | "HAND" | "ERASER" | "TEXT";

export interface Cursor {
  x: number;
  y: number;
  name?: string;
  color?: string;
}