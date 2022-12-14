import updateUserController from "../../controllers/users/updateUser.controller"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { appError } from "../../errors/appError"

const deleteUserService = async(id: string): Promise<void> =>{
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id: id})

    if(!user){
        throw new appError('User not found', 404)
    }

    if (user.isActive === false) {
        throw new appError('User not found')
      }

    await userRepository.update(
        id,
        {   
            isActive: false
        }
    )
}

export default deleteUserService
