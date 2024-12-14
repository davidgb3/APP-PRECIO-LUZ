import sqlite3 from 'sqlite3';
import { DATABASE_PATH } from '../config/config.js';
import { register } from './usuarios.js';

const db = new sqlite3.Database(DATABASE_PATH, (err) => {
    if (err) {
        console.error("Error al conectar con la abse de datos.", err.message);
        throw err;
    }else{
        console.log('Conexión exitosa a la base de datos.');
    }
});

db.serialize(() => {
    db.run( // primera tabala de la db
        `CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )`
    );
});

export default db;