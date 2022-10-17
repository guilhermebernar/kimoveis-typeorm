import { Request, Response } from 'express';
import createUserService from "../../services/users/createUser.service";
import {IUserRequest} from "../../interfaces/users";

const createUserController = async (req:Request, res:Response) => {
    try {
        const user: IUserRequest = req.body;
        const createdUser = await createUserService(user);
        return res.json(createdUser);
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            });
        };
    };
};

export default createUserController;