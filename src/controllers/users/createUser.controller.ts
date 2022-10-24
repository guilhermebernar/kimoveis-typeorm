import { Request, Response } from 'express';
import createUserService from "../../services/users/createUser.service";
import {IUserRequest} from "../../interfaces/users";
import { instanceToPlain } from 'class-transformer';

const createUserController = async (req:Request, res:Response) => {
    try {
        const user: IUserRequest = req.body;
        const createdUser = await createUserService(user);
        return res.json(instanceToPlain(createdUser));
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            });
        };
    };
};

export default createUserController;