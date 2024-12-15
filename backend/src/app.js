// Aqui se crea el servidor con express
import express from 'express';
import { PORT } from './config/config.js';
import pricesRoutes from './routes/priceRoutes.js'
import userRoutes from './routes/userRoutes.js';


const app = express();
app.use(express.json());

//ruta que podemos usar: 
app.use('/api/users', userRoutes);
app.use('/api/prices', pricesRoutes);




//puerto en el que se va a correr el serevidor 
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

