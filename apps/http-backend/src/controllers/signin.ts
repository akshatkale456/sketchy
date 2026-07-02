import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'
const JWT_SECRET = "2211"

export const signin = (req: Request, res: Response) => {
    const { email, password } = req.body;
    let userid = 1 
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
            "message":"you are signin"
         })
    }


    // TODO: Implement user signin logic here (e.g. validate body, check password, generate JWT)

    res.status(200).json({
        message: "Signin endpoint"
    });
};
