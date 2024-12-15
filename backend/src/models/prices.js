import db from "./database.js";

export const insertDataToPricesDB = (date, hour, price, callback) => {
    const sql = `INSERT INTO light_prices (date, hour, price) VALUES (?, ?, ?)`;

    let params = [date, hour, price];

    db.run(sql, params, function(err) { 
        if (err) { 
            console.error("Error al insertar valores en la base de datos", err); // Depuración 
            return callback(err);  
        } else { 
            return callback(null, { id: this.lastID });
        }
    });
};

export const deleteDataFromPricesDB = (callback) => {
    const sql = `DELETE FROM light_prices`;
    db.run(sql, function (err){
        callback(err, {changes: this.changes});
    });
};

//lógica para obtener todo tabla precios db
export const getAllPrices = (callback) => {
    const sql = `SELECT  * FROM light_prices`;
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
  