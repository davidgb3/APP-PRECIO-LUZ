import "./cardPrices.css";

export const cardPrices = (date, pricesPerHour) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("price-day");

    const fecha = document.createElement("h3");
    // 2024-01-02
    fecha.textContent = `Day ${date.split('-')[2]}`;
    cardDiv.appendChild(fecha);

    // Convertir el Map a un array y ordenar por la hora
    const sortedPrices = Array.from(pricesPerHour.entries()).sort(([hourA], [hourB]) => {
        return parseInt(hourA) - parseInt(hourB);
    });

    // Iterar sobre el array ordenado
    sortedPrices.forEach(([hour, price]) => {
        const precio = document.createElement("p");
        precio.textContent = `Hour: ${hour} Price: ${price} €`;
        cardDiv.appendChild(precio);
    });

    return cardDiv;
};
