import {Router} from 'express';
import createUserController from '../controllers/users/createUser.controller';
import deleteUserController from '../controllers/users/deleteUser.controller';
import listUsersController from '../controllers/users/listUsers.controller';
import updateUserController from '../controllers/users/updateUser.controller';
import admAndOwnerMiddleware from '../middlewares/admAndOwner.middleware';
import ensureAdmDeleteMiddleware from '../middlewares/ensureAdmDelete.middleware';
import ensureAdmGetMiddleware from '../middlewares/ensureAdmGet.middleware';
import ensureAdmUpdateMiddleware from '../middlewares/ensureAdmUpdate.middleware';

import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';

//imports

const routerUser = Router();

routerUser.post('', createUserController);
routerUser.get('', ensureAuthMiddleware, ensureAdmGetMiddleware, listUsersController);
routerUser.patch('/:id', ensureAuthMiddleware, ensureAdmUpdateMiddleware, admAndOwnerMiddleware, updateUserController);
routerUser.delete('/:id', ensureAuthMiddleware, ensureAdmDeleteMiddleware, deleteUserController);

export default routerUser;