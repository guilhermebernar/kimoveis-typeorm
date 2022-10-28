import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { appError } from "../../errors/appError";


const listCategoriesAndPropertiesService = async (idCateg: string) => {

    const categoryRepository = AppDataSource.getRepository(Categories)
    const propertiesRepository = AppDataSource.getRepository(Properties)
    const searchCategory = await categoryRepository.findOneBy({
        id:idCateg
    })
    const properties = await propertiesRepository.find()


    if(!searchCategory){
        throw new appError("This category does not existfound", 404)
    }

    const searchProp = properties.filter(
        (p)=>p.categories?.id === idCateg
        )

    return{
        ...searchCategory,
        properties: searchProp,
    }


}

export{listCategoriesAndPropertiesService}