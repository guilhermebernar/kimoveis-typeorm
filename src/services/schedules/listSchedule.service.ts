import AppDataSource from "../../data-source"
import { Properties } from "../../entities/properties.entity"
import { appError } from "../../errors/appError"

const listSchedService = async (id: string) =>{
    
    const propertyRepository = AppDataSource.getRepository(Properties)
    const searchProperty = await propertyRepository.findOneBy({id})

    if(!searchProperty)
    {throw new appError("Property not found",404)}

    const searchedProperty = await propertyRepository.findOne({relations: {category: true, schedules: true}, where:{id}})

    if(!searchedProperty)
    {throw new appError("Schedule not found", 404)}

    return searchedProperty
}

export default listSchedService