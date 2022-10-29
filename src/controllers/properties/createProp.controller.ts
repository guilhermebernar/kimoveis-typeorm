import { Request, Response } from "express";
import { IPropertyRequest } from "../../interfaces/properties";
import { createPropertyService } from "../../services/properties/createProp.service";

const createPropertiesController = async(req: Request, res: Response)=>{
    
    const {
        value, 
        size, 
        address, 
        categoryId 
    }: IPropertyRequest = req.body
    
    const createProperty = await createPropertyService({
        value, 
        size, 
        address, 
        categoryId
    })

    return res.status(201).json(createProperty)

}

export {createPropertiesController}