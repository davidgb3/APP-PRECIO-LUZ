import Chart from 'chart.js/auto';
import "./chart.css";

export const renderChart = (miMap) => {
  const chartContainer = document.getElementById("chart-container");
  if (!chartContainer) return;

  // Limpiar contenido previo
  chartContainer.innerHTML = "";

  // Crear un nuevo canvas
  const canvas = document.createElement("canvas");
  canvas.id = "price-chart";
  chartContainer.appendChild(canvas);

  // Obtener el contexto y crear el gráfico
  const ctx = canvas.getContext("2d");

  const labels = Array.from(miMap.keys()); // Fechas/hora
  const data = Array.from(miMap.values()); // Precios

  new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels,
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
