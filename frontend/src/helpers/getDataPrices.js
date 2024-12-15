export const getData = async (urlData) => {
    try {
        const response = await fetch(urlData);
        if (!response.ok) {
            throw new Error(`Error al acceder a la data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al fetchear la data:', error);
        throw error; // Re-lanzar el error para manejarlo en el código de llamada
    }
};

