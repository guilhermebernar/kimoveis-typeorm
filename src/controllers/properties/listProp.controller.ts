import { instanceToPlain } from "class-transformer"
import { Request, Response } from "express"
import listPropertiesService from "../../services/properties/listProp.service"

const listPropertiesController = async (req: Request, res: Response) =>{
    const properties = await listPropertiesService()
    
    return res.send(instanceToPlain(properties))
}

export default listPropertiesController