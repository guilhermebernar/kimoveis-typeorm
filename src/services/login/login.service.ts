import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users";
import {compare} from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { appError } from "../../errors/appError";

const createLoginService = async({email, password}:IUserLogin): Promise<string> =>{
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        email: email
    })

    if(!user){
        throw new appError("Invalid password.", 403)
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
        throw new appError("Invalid password.",403)
    }

    const token = jwt.sign({
        isAdm: user.isAdm
    }, 
        process.env.SECRET_KEY as string,
        {
            expiresIn: '24h',
            subject: user.id
        }
    )

    return token
}

export default createLoginService