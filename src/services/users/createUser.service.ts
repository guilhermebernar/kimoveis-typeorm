import {hash} from "bcrypt";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import {IUserRequest} from "../../interfaces/users";


const createUserService = async ({email,name,password,isAdm}:IUserRequest): Promise<User> => {        
    const userRepository = AppDataSource.getRepository(User)
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