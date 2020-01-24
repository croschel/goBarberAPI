import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Testing' }));

export default routes;
