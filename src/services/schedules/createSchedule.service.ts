import AppDataSource from "../../data-source"
import { Properties } from "../../entities/properties.entity"
import { Schedules } from "../../entities/schedules_user_properties.entity"
import { User } from "../../entities/user.entity"
import { appError } from "../../errors/appError"
import { IScheduleCreate } from "../../interfaces/schedules"

const createSchedService = async ({
    date, 
    hour, 
    propertyId, 
    userId}
    :IScheduleCreate) => {
    
    const userRepository = AppDataSource.getRepository(User)
    const propertyRepository = AppDataSource.getRepository(Properties)
    const scheduleRepository = AppDataSource.getRepository(Schedules)

    const searchUser = await userRepository.findOneBy({id: userId})

    if(!searchUser){
        throw new appError("User not found", 404)
    }

    const searchProperty = await propertyRepository.findOneBy({id: propertyId})

    if(!searchProperty){
        throw new appError("Property not found", 404)
    }

    const newHour = +hour.toString().split(":")[0]

    if(newHour < 8 || newHour >= 18)
    {throw new appError("Invalid hour", 400)}

    const formatedDate = new Date(`${date}, ${hour}`)

    if(
        formatedDate.toString() === "Invalid Date" || formatedDate.getDay() === 0 || 
        formatedDate.getDay() === 6)
        {throw new appError("Invalid date", 400)}


    const findSchedule = await scheduleRepository.find({relations:{property: true}, where:{date}})

    if(findSchedule.length !== 0)
    {throw new appError("Schedule already exists", 400)}

    const createdSchedule = scheduleRepository.create({
        user: searchUser,
        property: searchProperty,
        date,
        hour
    })

    await scheduleRepository.save(createdSchedule)

    return createdSchedule
}

export default createSchedService