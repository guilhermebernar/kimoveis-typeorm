import {Router} from 'express';
import { createCategoriesController } from '../controllers/categories/createCateg.controller';
import { listCategoriesAndPropertiesController } from '../controllers/categories/listCartegAndProperties.controller';
import { listCategoriesController } from '../controllers/categories/listCateg.controller';
import ensureAdmPostMiddleware from '../middlewares/ensureAdmPost.middleware';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';

//imports

const routerCategories = Router();

routerCategories.post('',ensureAuthMiddleware, ensureAdmPostMiddleware, createCategoriesController)
routerCategories.get('', listCategoriesController)
routerCategories.get("/:id/propreties", listCategoriesAndPropertiesController)

export default routerCategories
