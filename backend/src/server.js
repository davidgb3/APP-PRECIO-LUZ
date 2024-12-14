
import express from 'express';
import { PORT } from './config/config.js';
import usuariosRoutes from './routes/usuariosRoutes.js';

const app = express();
app.use(express.json());

app.use('/api/usuarios', usuariosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor ejecurtandose en la url: http://localhost:${PORT}`);
});