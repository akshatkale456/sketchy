import jwt from 'jsonwebtoken'

import type { Response, NextFunction}from 'express'
import type { Authrequest } from '../types/types.js'
const JWT_SECRET = "2211"
const middleware = (req:Authrequest,res:Response,next:NextFunction)=>{
     
    const token = req.headers.authorization
    if(!token){
         return res.status(400).json({
            "message":"token not found "
         })
    }
    const decode = jwt.verify(token,JWT_SECRET)
    if (decode){
        req.userid = decode as string
    }
    else{
         return res.status(400).json({
             "message":"auth token error "
         })
    }
     
}