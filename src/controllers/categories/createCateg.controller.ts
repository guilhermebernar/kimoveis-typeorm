import { Request, Response } from "express";
import { ICategoryRequest } from "../../interfaces/categories";
import { createCategoryService } from "../../services/categories/createCateg.service";

const createCategoriesController = async (req: Request, res: Response) => {

    const {name}: ICategoryRequest = req.body
    const createCategory = await createCategoryService({name})
    return res.status(201).send(createCategory)

}

export {createCategoriesController}