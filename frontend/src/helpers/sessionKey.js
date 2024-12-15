
export const setSessionKey = (key, value)=> {
    if(!key || value == null){
        throw new Error("No se pudo insertar la clave. Valor o clave no válidos");
    }else{
        localStorage.setItem(key, JSON.stringify(value));
        console.log("SessionKey insertada con éxito.");
    };
};

export const getSessionKey = (key) => {
    if(!key || key == null){
        throw new Error("No se pudo obtener la clave. Clave no válida");
    }else{
        const clave = JSON.parse(localStorage.getItem(key));
        console.log("SessionKey obtenida con éxito.");
        return clave;
    };
};

export const removeSessionKey = (key) => {
    if(!key || key == null){
        throw new Error("No se pudo eliminar la clave. Clave no válida");
    }else{
        localStorage.removeItem(key);
        console.log("SessionKey eliminada con éxito.");
    };
};