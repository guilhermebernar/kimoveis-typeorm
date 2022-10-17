import {Router} from 'express';
import createUserController from '../controllers/users/createUser.controller';

//imports

const routerUser = Router();

routerUser.post('', createUserController);
// routerUser.get('', "IMPORT");
// routerUser.patch('/:id', "IMPORT");
// routerUser.delete('/:id', "IMPORT");

export default routerUser;