import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { appError } from "../../errors/appError";
import { ICategoryRequest } from "../../interfaces/categories/index";

const createCategoryService = async ({name}:ICategoryRequest): Promise<Categories> => {
    const categoryRepository = AppDataSource.getRepository(Categories)
    const searchCategories = await categoryRepository.findOne(
        {where: {name}}
    )

    if(searchCategories){
        throw new appError("Already exists.", 400)
    }
    const createCategory = categoryRepository.create({name})
    await categoryRepository.save(createCategory)

    return createCategory

}

export {createCategoryService}