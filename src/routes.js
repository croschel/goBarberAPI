import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/session', SessionController.store);

routes.use(authMiddleware); // Auth middleware
routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

// providers
routes.get('/providers', ProviderController.index);
export default routes;
