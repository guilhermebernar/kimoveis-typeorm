import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const admAndOwnerMiddleware = async (req: Request, res: Response, next: NextFunction)=>{
    const {isAdm, id} = req.user
    const idParams = req.params.id
    const usersRepository = AppDataSource.getRepository(User)
    const userSearch = await usersRepository.findOneBy({id: idParams})

    if(!userSearch)
    {return res.status(404).json({message: "User not found"})}

    if(!isAdm && (id !== idParams))
    {return res.status(401).json({message: "Unauthorized"})}
    
    next();
}
export default admAndOwnerMiddleware