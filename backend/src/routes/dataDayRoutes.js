//aqui va la ruta endpoint data por day
import express from 'express';
import {data} from '../data/dataAPI.js';   //traemos data API

// 1,- Creamos un router para manejar las rutas de los productos
const router = express.Router();

//2.- Creamos la ruta GET
router.get("/", (req, res) =>{
    if(data.length === 0){
        return res.status(404).json({error: "No hay productos cargados"});
    }
    res.json(data);
})


export default router;

