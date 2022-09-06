import { Router } from 'express';
import AuthController from './controllers/AuthController';
import ShowController from './controllers/ShowController';
import UserController from './controllers/UserController';

import authMiddleware from './middlewares/authMiddleware';

const router = Router();

router.post('/auth', AuthController.authenticate);

router.get('/users', authMiddleware, UserController.index);
router.get('/users/:id', authMiddleware, UserController.show);
router.post('/users', UserController.store);
router.delete('/users/:id', authMiddleware, UserController.delete);

router.get('/shows', ShowController.index);
router.get('/shows/:id', authMiddleware, ShowController.show);
router.post('/shows', authMiddleware, ShowController.store);
router.delete('/shows/:id', authMiddleware, ShowController.delete);

export default router;