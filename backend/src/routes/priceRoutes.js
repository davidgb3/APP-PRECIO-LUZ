//aqui va la ruta endpoint prices
import express from "express";
import { fetchPricesFromDB, initializePricesDB  } from "../controllers/pricesController.js";

//Creamos un router para manejar las rutas de los productos
const router = express.Router();

// Creamos la ruta GET
router.get("/", fetchPricesFromDB);               //obtiene data de la tabla light_prices de mi DB     
router.get("/initialize", initializePricesDB);    //elimina y luego inserta en tabla light_prices data de la API 
export default router;
