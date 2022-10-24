import {hash} from "bcrypt";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import {IUserRequest} from "../../interfaces/users";
import { appError } from "../../errors/appError";

const createUserService = async ({email,name,password,isAdm}:IUserRequest): Promise<User> => {        
    const userRepository = AppDataSource.getRepository(User)

    if(!password){
        throw new appError('Password is missing')
    }
    
    const findUser = await userRepository.findOneBy({email})
    if(findUser!=null||findUser!=undefined){
        throw new appError('User already exists')
    }
    
    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        email,
        name,
        password: hashedPassword,
        isAdm
    });

    await userRepository.save(user);

    return user;
};

export default createUserService;