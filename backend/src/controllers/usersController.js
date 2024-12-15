import { getAllUsers , createUser } from "../models/user.js";

export const getAllUsersHandler = (req, res) => {
    //llamar a la función en SQLITE3 que se traiga todos los clientes ( SELECT * FROM)
    getAllUsers((err, rows) => {
        if(err){
            res.status(500).json({error:err.message});   
        } else {
            res.status(200).json({rows});
        }

    });
};

export const createUserHandler = (req, res) => {
    //llamo a la función
    const {username, password} = req.body;

    createUser(username, password, (err, result) => {
        if(err){
            res.status(500).json({error:err.message});   
        } else {
            res.status(200).json(result);
        }
    });
};