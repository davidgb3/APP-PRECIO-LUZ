import {getAllUsersHandler, createUserHandler} from '../controllers/usersController.js'
//aqui va la ruta endpoint users
import express from 'express';

// 1,- Creamos un router para manejar las rutas de los users
const router = express.Router();

//2.- Creamos la ruta GET
router.get("/",  getAllUsersHandler);
//3. creamos register
router.post("/register", createUserHandler);

export default router;

