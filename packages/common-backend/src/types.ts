import {z } from "zod"
   export const signupschema = z.object({
     userName : z.string().min(2).max(8),
     password:z.string().min(2).max(6),
     email: z.email()

 })
 export const signinschema = z.object({
    
     password:z.string().min(2).max(6),
     email: z.email()

 })
 export const roomschema = z.object({
     roomName : z.string().min(2).max(8),
    

 })