// Aqui se crea el servidor con express
import express from 'express';
import dataDayRoutes from './routes/dataDayRoutes.js';
import { PORT } from './config/config.js';

const app = express();
app.use(express.json());

//ruta que podemos usar: 
//app.use('api/dataPerHour', dataHourRoutes);
app.use('/api/dataPerDay', dataDayRoutes);


//puerto en el que se va a correr el serevidor 
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
