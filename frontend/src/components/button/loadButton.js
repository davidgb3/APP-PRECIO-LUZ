/**
 * Crear un boton que tenga texto cargar precio de la luz con id load_price_btn , 
 */

import "./loadButton.css"
export const createLoadButton = () => {
    const button = document.createElement("button");
    button.id="load-price-btn";
    button.textContent="Precio de la luz";
    return button;
}
// export const createLoadButtonWheather = () => {
//     const button = document.createElement("button");
//     button.id="load-wheather-btn";
//     button.textContent="Tiempo";
//     return button;
// }