import { Request, Response } from 'express';
import {IUserUpdate} from "../../interfaces/users";
import updateUserService from '../../services/users/updateUser.service';

const updateUserController = async (req:Request, res:Response) => {
    const userData: IUserUpdate = req.body;
    const id: string = req.params.id;
    const updatedUser = await updateUserService(userData, id);
    return res.json({message:updatedUser});

};

export default updateUserController;