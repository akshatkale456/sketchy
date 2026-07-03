import { Request, Response } from 'express';
import { signupschema } from '@repo/common/types';

export const signup = (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const check = signupschema.safeParse({
        username, 
        email,
        password

    })
    if(!check.success){
         return res.status(400).json({
"message":"feidl not satisfied"
         })
    }
    
else{
    // TODO: Implement user signup logic here (e.g. validate body, hash password, save to DB)
    
    res.status(200).json({
        message: "Signup endpoint"
    });}
};
