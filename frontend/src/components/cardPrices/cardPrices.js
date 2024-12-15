/**
 * Tarjeta con los precios de la luz
 * 
 */
import "./cardPrices.css";
export const cardPrices = (date, pricesPerHour) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("price-day");

    const fecha = document.createElement("h3");
    fecha.textContent = `Day ${date}`;
    cardDiv.appendChild(fecha);

    cardDiv.appendChild(fecha);
    pricesPerHour.forEach((price,hour) => {
        const precio = document.createElement("p");
        precio.textContent = `Hour: ${hour} Price: ${price} €`;
        cardDiv.appendChild(precio);        
    });

    return cardDiv;
}