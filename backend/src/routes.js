import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './controllers/UserController';
import EventController from './controllers/EventController';
import DashboardController from './controllers/DashboardController';
import LoginController from './controllers/LoginController';
import RegistrationController from './controllers/RegistrationController';
import ApprovalController from './controllers/ApprovalController';
import RejectionController from './controllers/RejectionController';

const routes = new Router();
const upload = multer(multerConfig);

//TODO => Login Controller
// Subcribe Controller

//Registration
routes.post('/registration/:eventId', RegistrationController.store);
routes.get('/registration/:registration_id', RegistrationController.show);
routes.post('/registration/:registration_id/approvals', ApprovalController.update);
routes.post('/registration/:registration_id/rejections', RejectionController.update);

//LogIn
routes.post('/login', LoginController.store);

//User
routes.post('/user/register', UserController.store);
routes.get('/user/:id', UserController.index);

//Dashboard
routes.get('/dashboard/:id', DashboardController.show);
routes.get('/dashboard/', DashboardController.index);
routes.get('/dashboard/:category', DashboardController.index);

//Event
routes.post('/event', upload.single('thumbnail'), EventController.store);
routes.delete('/event/:id', EventController.delete);

export default routes;
