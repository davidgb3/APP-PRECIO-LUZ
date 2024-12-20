
import express from 'express';
import cors from "cors"
import { PORT } from './config/config.js';
import usuariosRoutes from './routes/usuariosRoutes.js';
import pricesRoutes from './routes/priceRoutes.js'

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/prices', pricesRoutes);

app.listen(PORT, () => {
    console.log(`Servidor ejecurtandose en la url: http://localhost:${PORT}`);
});