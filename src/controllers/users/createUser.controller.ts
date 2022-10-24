import { Request, Response } from 'express';
import createUserService from "../../services/users/createUser.service";
import {IUserRequest} from "../../interfaces/users";
import { instanceToPlain } from 'class-transformer';

const createUserController = async (req:Request, res:Response) => {
    const user: IUserRequest = req.body;
    const createdUser = await createUserService(user);
    return res.json(instanceToPlain(createdUser));
};

export default createUserController;