import db from "./database.js";

export const login = (username, password, callback) => {
    const sql = `SELECT * FROM usuarios WHERE username = ? AND password = ?`;
    const params = [username, password];
    db.all(sql, params, function (err, rows) {
        callback(err, rows);
    });
};

export const register = (username, password, callback) => {
    const sql = `INSERT INTO usuarios (id, username, password) VALUES (NULL, ? , ?)`;
    const params = [username, password];
    db.run(sql, params, function (err) {
        callback(err, { id:this.lastID });
    });
};

export const getUsers = (callback) => {
    const sql = `SELECT * FROM usuarios`;
    db.all(sql, [], function (err, rows) {
        callback(err, rows);
    });
};