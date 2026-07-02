import { Request, Response } from 'express';

export const createroom = (req: Request, res: Response) => {
    // TODO: Implement create room logic here (e.g. extract user ID, generate room ID, save to DB)

    res.status(200).json({
        message: "Create room endpoint"
    });
};
