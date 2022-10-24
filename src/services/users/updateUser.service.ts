
import AppDataSource from '../../data-source';
import {User} from '../../entities/user.entity';
import {hash} from 'bcrypt';
import { appError } from "../../errors/appError";

const updateUserService = async(userData:any, id: string): Promise<User> =>{

    if(userData.isAdm   !==undefined 
    || userData.isActive!==undefined 
    || userData.id      !==undefined){
        throw new appError("Values not being updated.", 401)
    }
    
    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({id})
    if(!findUser){
        throw new appError("User not found.", 404)
    }

    const {email, name, password} = userData

    await userRepository.update(
        id,
        {
        name: name ? name: findUser.name,
        email: email ? email: findUser.email,
        password: password ? await hash(password, 10 ): findUser.password
        }
    )

    const user = await userRepository.findOneBy({id});

    return user!

}

export default updateUserService;