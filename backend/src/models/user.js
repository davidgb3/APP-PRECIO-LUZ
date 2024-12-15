import db from "./database.js";

//lógica para obtener usuairos db
export const getAllUsers = (callback) => {
  const sql = `SELECT  * FROM users`;
  db.all(sql, [], function (error, rows) {
    if (error) {
      callback(error, null);
    } else if (!rows || rows.length === 0) {
      callback(null, false);
    } else {
      callback(null, rows); 
    }
  });
};


export const createUser = (username, password, callback) => {
    const sql = `INSERT INTO users (username, password) VALUES (?, ?)`;
    const params = [username, password];

    db.run(sql, params, function(err){
        callback(err, {id:this.lastID});
    });
};