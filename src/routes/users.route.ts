import {Router} from 'express';
import createUserController from '../controllers/users/createUser.controller';
import listUsersController from '../controllers/users/listUsers.controller';
import updateUserController from '../controllers/users/updateUser.controller';
import ensureAdmMiddleware from '../middlewares/ensureAdm.middleware';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';

//imports

const routerUser = Router();

routerUser.post('', createUserController);
routerUser.get('', ensureAuthMiddleware, ensureAdmMiddleware, listUsersController);
routerUser.patch('/:id', ensureAuthMiddleware, ensureAdmMiddleware, updateUserController);
// routerUser.delete('/:id', "IMPORT");

export default routerUser;