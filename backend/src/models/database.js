import sqlite3 from "sqlite3";
import { DATABASE_PATH } from "../config/config.js";

const db = new sqlite3.Database(DATABASE_PATH, (err) => {
  if (err) {
    console.error("Error al abrir la base de datos", err.message);
  } else {
    console.log("Conexion exitosa a la base de datos");
  }

  //Me he conectado a la base de datos
  db.serialize(() => {
    db.run(
      `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL)`
    );

    db.run(
       `CREATE TABLE IF NOT EXISTS light_prices (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT NOT NULL,
        hour TEXT NOT NULL,
        price REAL NOT NULL)`
    );
  });
});

export default db;
