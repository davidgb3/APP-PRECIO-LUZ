// import Chart from 'chart.js/auto';
// import "./chart.css";

// export const renderChart = (miMap) => {
//   const chartContainer = document.getElementById("chart-container");
//   if (!chartContainer) return;

//   // Limpiar contenido previo
//   chartContainer.innerHTML = "";

//   // Crear un nuevo canvas
//   const canvas = document.createElement("canvas");
//   canvas.id = "price-chart";
//   chartContainer.appendChild(canvas);

//   // Obtener el contexto y crear el gráfico
//   const ctx = canvas.getContext("2d");

//   const labels = Array.from(miMap.keys()); // Fechas/hora
//   const data = Array.from(miMap.values()); // Precios

//   new Chart(ctx, {
//       type: 'line',
//       data: {
//           labels: labels,
//           datasets: [{
//               label: 'Precio de la luz €',
//               data: data,
//               borderColor: 'rgba(75, 192, 192, 1)',
//               backgroundColor: 'rgba(75, 192, 192, 0.2)',
//               borderWidth: 1,
//           }],
//       },
//   });
// };

// import Chart from 'chart.js/auto';
// import "./chart.css";

// export const renderChart = (miMap) => {
//     const chartContainer = document.getElementById("chart-container");
//     if (!chartContainer) return;

//     // Limpiar contenido previo
//     chartContainer.innerHTML = "";

//     // Crear un nuevo canvas
//     const canvas = document.createElement("canvas");
//     canvas.id = "price-chart";
//     chartContainer.appendChild(canvas);

//     // Obtener el contexto y crear el gráfico
//     const ctx = canvas.getContext("2d");

//     // Agrupar precios por día y calcular el promedio
//     const pricesByDate = new Map();

//     miMap.forEach((price, hour) => {
//         const date = hour.split("T")[0];  // Asumiendo que 'hour' es una cadena con formato ISO (por ejemplo, "2024-01-01T10:00:00")
//         if (!pricesByDate.has(date)) {
//             pricesByDate.set(date, []);
//         }
//         pricesByDate.get(date).push(price);
//     });

//     const labels = Array.from(pricesByDate.keys()); // Fechas (días)
//     const data = labels.map(date => {
//         const prices = pricesByDate.get(date);
//         const sum = prices.reduce((a, b) => a + b, 0);
//         return sum / prices.length; // Promedio de precios por día
//     });

//     new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: labels,
//             datasets: [{
//                 label: 'Precio de la luz €',
//                 data: data,
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 borderWidth: 1,
//             }],
//         },
//     });
// };

// import Chart from 'chart.js/auto';
// import "./chart.css";

// export const renderChart = (pricesByDate) => {
//     const chartContainer = document.getElementById("chart-container");
//     if (!chartContainer) return;

//     // Limpiar contenido previo
//     chartContainer.innerHTML = "";

//     // Crear un nuevo canvas
//     const canvas = document.createElement("canvas");
//     canvas.id = "price-chart";
//     chartContainer.appendChild(canvas);

//     // Obtener el contexto y crear el gráfico
//     const ctx = canvas.getContext("2d");

//     const labels = [];
//     const data = [];

//     pricesByDate.forEach((prices, date) => {
//         labels.push(date);

//         const pricesArray = prices.map(p => p.price);
//         const sum = pricesArray.reduce((a, b) => a + b, 0);
//         const average = sum / pricesArray.length;
//         data.push(average);
//     });

//     new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: labels, // Fechas (días)
//             datasets: [{
//                 label: 'Precio de la luz €',
//                 data: data,
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 borderWidth: 1,
//             }],
//         },
//     });
// };

// import Chart from 'chart.js/auto';
// import "./chart.css";

// export const renderChart = (pricesByDate) => {
//     const chartContainer = document.getElementById("chart-container");
//     if (!chartContainer) return;

//     // Limpiar contenido previo
//     chartContainer.innerHTML = "";

//     // Crear un nuevo canvas
//     const canvas = document.createElement("canvas");
//     canvas.id = "price-chart";
//     chartContainer.appendChild(canvas);

//     // Obtener el contexto y crear el gráfico
//     const ctx = canvas.getContext("2d");

//     const labels = [];
//     const data = [];

//     // Convertir pricesByDate a un array para asegurarnos de que está ordenado por fecha
//     const sortedPricesByDate = Array.from(pricesByDate.entries()).sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB));

//     sortedPricesByDate.forEach(([date, prices]) => {
//         labels.push(date);

//         const pricesArray = prices.map(p => p.price);
//         const sum = pricesArray.reduce((a, b) => a + b, 0);
//         const average = sum / pricesArray.length;
//         data.push(average);
//     });

//     new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: labels, // Fechas (días)
//             datasets: [{
//                 label: 'Precio de la luz €',
//                 data: data,
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 borderWidth: 1,
//             }],
//         },
//     });
// };

// import Chart from 'chart.js/auto';
// import "./chart.css";

// export const renderChart = (pricesByDate) => {
//     const chartContainer = document.getElementById("chart-container");
//     if (!chartContainer) return;

//     // Limpiar contenido previo
//     chartContainer.innerHTML = "";

//     // Crear un nuevo canvas
//     const canvas = document.createElement("canvas");
//     canvas.id = "price-chart";
//     chartContainer.appendChild(canvas);

//     // Obtener el contexto y crear el gráfico
//     const ctx = canvas.getContext("2d");

//     const labels = [];
//     const data = [];

//     pricesByDate.forEach((hoursMap, date) => {
//         labels.push(date);

//         const pricesArray = Array.from(hoursMap.values());
//         const sum = pricesArray.reduce((a, b) => a + b, 0);
//         const average = sum / pricesArray.length;
//         data.push(average);
//     });

//     new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: labels, // Fechas (días)
//             datasets: [{
//                 label: 'Precio de la luz €',
//                 data: data,
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 borderWidth: 1,
//             }],
//         },
//     });
// };

import Chart from 'chart.js/auto';
import "./chart.css";

export const renderChart = (pricesByDate) => {
    const chartContainer = document.getElementById("chart-container");
    if (!chartContainer) return;

    // Limpiar contenido previo
    chartContainer.innerHTML = "";

    // Crear un nuevo canvas y ajustar el tamaño
    const canvas = document.createElement("canvas");
    canvas.id = "price-chart";
    
    chartContainer.appendChild(canvas);
    

    // Obtener el contexto y crear el gráfico
    const ctx = canvas.getContext("2d");

    const labels = [];
    const data = [];

    // Procesar datos para el gráfico
    pricesByDate.forEach((hoursMap, date) => {
        labels.push(date);

        const pricesArray = Array.from(hoursMap.values());
        const sum = pricesArray.reduce((a, b) => a + b, 0);
        const average = sum / pricesArray.length;
        data.push(average);
    });

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels, // Fechas (días)
            datasets: [{
                label: 'Precio de la luz €',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
            }],
        },
    });
};




