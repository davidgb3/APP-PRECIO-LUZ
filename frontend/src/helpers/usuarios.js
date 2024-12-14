
const urlBase = import.meta.env.VITE_URL_BASE;
const urlUsuarios = `${urlBase}/usuarios`;

export const login = async(username, password) => {
    try {
        const response = await fetch(`${urlUsuarios}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password })
        });
        if(!response.ok){
            throw new Error(`Usuario o contraseña incorrectos.`);
        };
        console.log("Inicio de sesión correcto!");
        return await response.json();
    } catch (error) {
        console.log("Error al iniciar sesión --> ", error);
    };
};

export const resgister = async(username, password) => {
    try {
        const response = await fetch(`${urlUsuarios}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password })
        });
        if(!response.ok){
            throw new Error(`Error al registrar el usuario.`);
        };
        console.log("Registro correcto!");
        return await response.json();
    } catch (error) {
        console.log("Error al registrar el usuario --> ", error);
    };
};