import AppDataSource from "../../data-source";
import { Address } from "../../entities/addresses.entity";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { appError } from "../../errors/appError";
import { IPropertyRequest } from "../../interfaces/properties"

const createPropertyService = async({
    value,
    size,
    address,
    categoryId
}: IPropertyRequest)=>{

    if(address.state.length > 2)
    {throw new appError("Invalid state", 400)}
    
    if(address.zipCode.length > 8)
    {throw new appError("Invalid zipcode", 400)}

    const categoryRepository = AppDataSource.getRepository(Categories)
    const addressRepository = AppDataSource.getRepository(Address)
    const propertyRepository = AppDataSource.getRepository(Properties)
    
    const searchCategory = await categoryRepository.findOneBy({id: categoryId})
    const searchPropOnAddress = await propertyRepository.findOneBy({address})

    if(!searchCategory)
    {throw new appError("Category not found", 404)}

    if(searchPropOnAddress)
    {throw new appError("Property already exists", 400)}


    const newAddress = addressRepository.create({
        district: address.district, 
        zipCode: address.zipCode, 
        number: address.number, 
        city: address.city, 
        state: address.state
    })
    await addressRepository.save(newAddress)

    const createProperty = propertyRepository.create({
        value, 
        size, 
        address: newAddress, 
        category: searchCategory
    })
    await propertyRepository.save(createProperty)

    return createProperty

}

export {createPropertyService}