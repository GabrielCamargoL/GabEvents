import { Router } from 'express';
import AuthController from './controllers/AuthController';
import UserController from './controllers/UserController';

import authMiddleware from './middlewares/authMiddleware';

const router = Router();

router.post('/auth', AuthController.authenticate);

router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);
router.post('/users', UserController.store);
router.delete('/users/:id', UserController.delete);

export default router;