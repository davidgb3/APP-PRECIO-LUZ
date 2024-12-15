import { createLoadButton } from "./components/button/loadButton";
import { createSpinner, hideSpinner, showSpinner } from "./components/spinner/spinner";
import { createSelector } from "./components/hoursRangeSelect/hoursRangeSelect";
import { getData } from "./helpers/getDataPrices";
import { cardPrices } from "./components/cardPrices/cardPrices";
import { renderChart } from "./components/chart/chart.js";
import "./styles/main.css";


export const urlData = import.meta.env.VITE_API_URL;
export const hourRanges = import.meta.env.VITE_HOUR_RANGES.split(",");

//------Declaración de variables --------------------------
const pricesByHourRanges = new Map();
const pricesByDate = new Map();
// ------------Declaración de funciones ----------------

const renderPrices = (miMap) => {
    // Buscar si ya existe el contenedor
    let pricesContainer = document.getElementById("prices-container");

    // Si no existe, lo creamos
    if (!pricesContainer) {
        pricesContainer = document.createElement("div");
        pricesContainer.id = "prices-container";
        document.getElementById("app").appendChild(pricesContainer);
    }

    // Limpiar el contenido del contenedor antes de renderizar nuevos datos
    pricesContainer.innerHTML = "";

    // Si no hay datos en el map, mostrar un mensaje
    if (miMap.size === 0) {
        pricesContainer.textContent = "No hay datos disponibles para el rango seleccionado.";
        return;
    }

    miMap.forEach((pricesPerHour, date) => {
        const priceCard = cardPrices(date, pricesPerHour);
        pricesContainer.appendChild(priceCard);
    });
}
const handleClick = () => {
    const selectedHourRange = document.getElementById("hour-rangeSelector").value;
    console.log("Selected Hour Range:", selectedHourRange);
    
    const [startHour, endHour] = selectedHourRange.split("-").map(Number);
    console.log("Start Hour:", startHour, "End Hour:", endHour);

    pricesByHourRanges.clear();
    pricesByDate.clear();

    showSpinner();

    getData(urlData)
        .then((data) => {
            console.log("Data Fetched:", data);
            data.forEach((dataObject) => {
                const { date, hour, price } = dataObject;
                const hourNumber = parseInt(hour.split(":")[0]);
                console.log("Processing:", { date, hour, hourNumber, price });

                if (hourNumber >= startHour && hourNumber <= endHour) {
                    if (!pricesByDate.has(date)) {
                        pricesByDate.set(date, new Map());
                    }
                    pricesByDate.get(date).set(hour, price);
                }
            });

            // Asegurar que pricesByDate está ordenado por fecha y hora
            pricesByDate.forEach((prices, date) => {
                console.log("Prices Before Sort:", Array.from(prices.entries()));
                const sortedPrices = Array.from(prices.entries()).sort(([hourA], [hourB]) => parseInt(hourA) - parseInt(hourB));
                console.log("Prices After Sort:", sortedPrices);
                pricesByDate.set(date, new Map(sortedPrices));
            });

            console.log("Prices By Date:", pricesByDate);

            renderChart(pricesByDate);
            renderPrices(pricesByDate);
            hideSpinner();
        })
        .catch((err) => {
            console.error("Error al cargar los datos:", err);
            hideSpinner();
        });
};


// ----------- Main -----------------
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const header=document.createElement("header");
    // Crear y añadir el spinner
    const spinner = createSpinner();
    header.appendChild(spinner);
    const logo=document.createElement("img");
    logo.src="./src/img/Logoconletra.png";
    logo.width="150";
    logo.height="150";
    header.appendChild(logo);


    
    const br=document.createElement('br');
    header.appendChild(br);

    
    const luz=document.createElement('button');
    luz.textContent="Luz";
    header.appendChild(luz);

    const tiempo=document.createElement('button');
    tiempo.textContent="Tiempo";
    header.appendChild(tiempo);

    app.appendChild(header);

    // Añadir título
    const title = document.createElement('h2');
    title.textContent = "Red eléctrica española";
    app.appendChild(title);

    // Crear y añadir el selector
    const selector = createSelector();
    app.appendChild(selector);
    // Crear y añadir el botón cargar
    const loadPricesBtn = createLoadButton();
    // const loadWheather= createLoadButtonWheather();
    app.appendChild(loadPricesBtn);
    // header.appendChild(loadWheather);

    // Crear el contenedor del gráfico si no existe
    let chartContainer = document.getElementById("chart-container");
    if (!chartContainer) {
        chartContainer = document.createElement("div");
        chartContainer.id = "chart-container";
        app.appendChild(chartContainer);
    }

    // Crear y añadir el contenedor de precios
    let pricesContainer = document.createElement("div");
    pricesContainer.id = "prices-container";
    app.appendChild(pricesContainer);

    // Añadir evento de clic al botón cargar
    loadPricesBtn.addEventListener("click", handleClick);

    // Crear y añadir el footer al final
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>Desarrollado por:</p>
        Armando: <a href="https://github.com/armandomarelius">@armandomarelius</a>
        David: <a href="https://github.com/davidgb3">@davidgb3</a>
        Javier: <a href="https://github.com/javiilpf">@javiilpf</a>
    `;
    app.appendChild(footer);

    // Asegurar que el footer se añade después del contenido dinámico
    document.body.appendChild(app);
});


