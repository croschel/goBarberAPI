import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

// session
routes.post('/session', SessionController.store);

// users
routes.post('/users', UserController.store);

routes.use(authMiddleware); // Auth middleware

routes.put('/users', UserController.update);

// files
routes.post('/files', upload.single('file'), FileController.store);

// providers
routes.get('/providers', ProviderController.index);

// Appointments
routes.post('/appointments', AppointmentController.store);

export default routes;
