import {Request, Response} from 'express';
import { listCategoriesAndPropertiesService } from '../../services/categories/listCartegAndProperties.service';


const listCategoriesAndPropertiesController = async (req: Request, res: Response)=>{

    const idCateg = req.params.id;
    const categories = await listCategoriesAndPropertiesService(idCateg);

    return res.send(categories);

}

export{listCategoriesAndPropertiesController}