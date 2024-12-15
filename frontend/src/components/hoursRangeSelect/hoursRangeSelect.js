/**
 * Desplegable que permita seleccionar
 */

const rango = import.meta.env.VITE_HOUR_RANGES;

export const createSelector = () => {
    const selector = document.createElement("select");
    selector.id = "hour-rangeSelector";

    //convertimos en array
    const rangos = rango.split(","); 

    rangos.forEach(rango => {
        const option = document.createElement("option");
        //tanto valor como contenido a mostrar es el raango horas
        option.value = rango;   
        option.textContent = rango;
        selector.appendChild(option);   
    });

    return selector;
}
