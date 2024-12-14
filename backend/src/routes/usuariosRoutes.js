
import express from 'express';
import { getUsersHandler, loginHandler, registerHandler } from '../controller/UsuarioController.js';

const router = express.Router();

router.post('/register', registerHandler);
router.post('/login', loginHandler);
router.get('/users', getUsersHandler);

export default router;