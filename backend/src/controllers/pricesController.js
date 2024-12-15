import { urlAPI } from "../config/config.js";
import {insertDataToPricesDB, deleteDataFromPricesDB, getAllPrices} from "../models/prices.js"

// Función para obtener datos desde la API
export const fetchPricesFromAPI = async () => {
  try {
    const response = await fetch(urlAPI);
    if (!response.ok) {
      throw new Error("Error al hacer fetch a la API");
    }
    const data = await response.json();
    const { values } = data.included[0].attributes;

    return values.map((instanteDia) => {
      let hora = instanteDia.datetime.split("T")[1].split("+")[0].split(".")[0];
      let fecha = instanteDia.datetime.split("T")[0];
      return {
        date: fecha,
        hour: hora,
        price: instanteDia.value,
      };
    });
  } catch (err) {
    console.error("Error al hacer fetching de prices", err);
    throw err;
  }
};

// Controlador para la ruta GET '/'
export const fetchPricesFromDB = (req, res) => {
  getAllPrices((err, rows) => {
          if(err){
              res.status(500).json({error:err.message});   
          } else {
              res.status(200).json(rows);
          }
      });
};

// Controlador para  ruta GET '/initialize' que mete la data de la API en mi base de datos
export const initializePricesDB = async (req, res) => {
  try {
    const data = await fetchPricesFromAPI();
    //data es un array de objetos con date, hour price.
    //obtengo valores y luego los inserto
    deleteDataFromPricesDB((err) => {
      if(err){
          res.status(500).json({error: err.message});
      } else {
          console.log("se ha borrado con éxito la tabla light_prices")
      }
    });

    for(const {date, hour, price} of data){
        insertDataToPricesDB(date, hour, price, (error) => {
          if(error){
            console.error("Error al insertar valores en la base de datos", error);
          }
        });
    }

    res.status(200).json({ message: 'Datos insertados en la DB de manera exitosa.' });

  } catch (err) {
    res.status(500).json({ error: "Error al inicializar la base de datos" });
  }
};