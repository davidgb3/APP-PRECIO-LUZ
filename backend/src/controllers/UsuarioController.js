import { getUsers, login, register } from "../models/usuarios.js";

export const loginHandler = (req, res) => {
    const { username, password } = req.body;
    login(username, password, (err, rows) => {
        if (err) {
            res.status(500).json({ message: "Error al iniciar sesión." });
        } else if (rows.length === 0) {
            res.status(401).json({ message: "Usuario o contraseña incorrectos." });
        } else {
            res.json(rows);
        }
    });
};

export const registerHandler = (req, res) => {
    const { username, password } = req.body;
    register(username, password, (err, row) => {
        if (err) {
            res.status(500).json({ message: "Error al registrar el usuario." });
        } else {
            res.status(201).json(row);
        }
    });
};

export const getUsersHandler = (req, res) => {
    getUsers((err, rows) => {
        if(err){
            res.status(500).json({ message: "Error al obtener los usuarios." });
        } else {
            res.status(200).json(rows);
        }
    });
};