// Traer la data y retornarla 

export const getData = async (urlData) => {
    const response = await fetch(urlData);
    if(!response.ok){
        throw new Error("Error al acceder a la data");
    }
    const data = await response.json();

    return data;
}
