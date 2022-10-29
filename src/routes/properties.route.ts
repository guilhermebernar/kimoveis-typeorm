import {Router} from 'express';
import { createPropertiesController } from '../controllers/properties/createProp.controller';
import listPropertiesController from '../controllers/properties/listProp.controller';
import ensureAdmPostMiddleware from '../middlewares/ensureAdmPost.middleware';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';

//imports

const routerProperties = Router();

routerProperties.post('', ensureAuthMiddleware, ensureAdmPostMiddleware, createPropertiesController)
routerProperties.get('', listPropertiesController)

export default routerProperties