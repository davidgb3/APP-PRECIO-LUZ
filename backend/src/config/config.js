// importamos las variables de entorno y exportamaos para utilizarlas donde sea 
//COnfiguraciones necesariass
import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno del archivo .env en process.env

export const PORT = process.env.PORT || 3000;
export const DATABASE_PATH = process.env.DATABASE_PATH || "./database/luzdb.sqlite";
export const urlAPI = process.env.URL_API || "https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=2024-01-01T00:00&end_date=2024-01-31T23:59&time_trunc=hour";




