import { Request, Response } from 'express';

export const signup = (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    

    // TODO: Implement user signup logic here (e.g. validate body, hash password, save to DB)
    
    res.status(200).json({
        message: "Signup endpoint"
    });
};
