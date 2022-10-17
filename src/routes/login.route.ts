import {Router} from 'express';
import { createLoginController } from '../controllers/login/Login.controller';

//imports

const routerLogin = Router();

routerLogin.post('', createLoginController);

export default routerLogin;