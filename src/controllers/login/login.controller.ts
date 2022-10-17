import {Request, Response} from 'express';
import { IUserLogin } from '../../interfaces/users';
import createLoginService from '../../services/login/login.service';

const createLoginController = async (req: Request, res: Response) => {
    try {
        const data: IUserLogin = req.body;
        const token = await createLoginService(data)
        return res.json({token})

    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ 
                message: err.message 
            });
        }
    }
}

export {createLoginController}