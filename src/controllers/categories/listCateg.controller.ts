import { Request, Response } from "express"

import { listCategoriesService } from "../../services/categories/listCateg.service"

const listCategoriesController = async (req: Request, res: Response)=>{

    const categories = await listCategoriesService()
    
    return res.json(categories)

}

export {listCategoriesController}