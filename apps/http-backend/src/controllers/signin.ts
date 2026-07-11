import { Request, Response } from 'express';
import { Authrequest } from '../types/types';
import jwt from 'jsonwebtoken'
import { signinschema } from '@repo/common/types';
const JWT_SECRET = "2211"

export const signin = (req:Authrequest , res: Response) => {
    const { email, password } = req.body;
    
    const userid = req.userid
    const check = signinschema.safeParse({
         email,
         password
    })
    if(!check.success){
         "message": "feild not satisfied"
    }
    const token = jwt.sign({userid }, JWT_SECRET )
    if ( !token){
          return res.status(400).json(
             {
                 "message ": "userid messing "
                  
             }
         )
         
    }
    else{
         res.status( 200).json({
            "token": token ,
            "success":true
         })
    }


    // TODO: Implement user signin logic here (e.g. validate body, check password, generate JWT)

    res.status(200).json({
        message: "Signin endpoint"
    });
};
