// importamos las variables de entorno y exportamaos para utilizarlas donde sea 
//COnfiguraciones necesariass
import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno del archivo .env en process.env

export const PORT = process.env.PORT || 3000;
export const DATABASE_PATH = process.env.DATABASE_PATH || "./database/luzdb.sqlite";




