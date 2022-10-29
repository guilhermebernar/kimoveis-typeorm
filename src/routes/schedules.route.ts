import {Router} from 'express';
import createSchedController from '../controllers/schedules/createSchedule.controller';
import ensureAdmGetMiddleware from '../middlewares/ensureAdmGet.middleware';
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware';
import listSchedController from '../controllers/schedules/listSchedule.controller'

//imports

const routerSchedules = Router();

routerSchedules.post('', ensureAuthMiddleware, createSchedController)
routerSchedules.get('/properties/:id', ensureAuthMiddleware, ensureAdmGetMiddleware, listSchedController)

export default routerSchedules