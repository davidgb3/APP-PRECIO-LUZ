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
    const startHour = selectedHourRange.split("-")[0];
    const endHour = selectedHourRange.split("-")[1];

    pricesByHourRanges.clear();
    pricesByDate.clear();

    showSpinner();
    getData(urlData)
        .then((data) => {
            const { included } = data;

            for (const item of included) {
                const { values } = item.attributes;
                values.forEach(element => {
                    const { value, datetime } = element;
                    const dt = new Date(datetime);

                    if (dt.getHours() >= startHour && dt.getHours() <= endHour) {
                        pricesByHourRanges.set(dt.toLocaleString(), value);

                        if (!pricesByDate.has(dt.getDate())) {
                            pricesByDate.set(dt.getDate(), new Map());
                        }
                        pricesByDate.get(dt.getDate()).set(dt.getHours(), value);
                    }
                });
            }
            renderChart(pricesByHourRanges);
            renderPrices(pricesByDate);
            hideSpinner();
        })
        .catch((err) => {
            console.error("Error al cargar los datos:", err);
            hideSpinner();
        });
}

// ----------- Main -----------------
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const header=document.createElement("header");
    // Crear y añadir el spinner
    const spinner = createSpinner();
    header.appendChild(spinner);

    // Añadir título
    const title = document.createElement('h2');
    title.textContent = "Red eléctrica española";
    header.appendChild(title);

    // Crear y añadir el selector
    const selector = createSelector();
    header.appendChild(selector);

    // Crear y añadir el botón cargar
    const loadPricesBtn = createLoadButton();
    // const loadWheather= createLoadButtonWheather();
    
    header.appendChild(loadPricesBtn);
    // header.appendChild(loadWheather);

    app.appendChild(header);

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


