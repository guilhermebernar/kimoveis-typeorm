import { Request, Response } from 'express';
import {IUserUpdate} from "../../interfaces/users";
import updateUserService from '../../services/users/updateUser.service';

const updateUserController = async (req:Request, res:Response) => {
    try {
        const user: IUserUpdate = req.body;
        const id: string = req.params.id;
        const updatedUser = await updateUserService(user, id);
        return res.json(updatedUser);
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            });
        };
    };
};

export default updateUserController;