"use client"

import { Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
// Need to Import {Importent}
import { Chart, registerables } from "chart.js"
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(...registerables, ChartDataLabels);


export default function BarChart() {
    // Bar-chart 2
    const BarchartOptions = {
        responsive: true,
        // maintainAspectRatio: false,

        plugins: {
            legend: {
                display: true,
                position: "bottom",
            },

            datalabels: {
                display: true,
                color: "black",
                align: "end",
                anchor: "end",
                font: { size: "14" }
            }
        },
    };
    const BarchartData = {
        labels: ["Ruta-1", "Ruta-2", "Ruta-3", "Ruta-4", "Ruta-5", "Ruta-6", "Ruta-7", "Ruta-8", "Ruta-9", "Ruta-10", "Ruta-11", "Ruta-12"],
        datasets: [
            {
                label: "Ruta",
                data: [13, 18, 80, 81, 56, 55, 40, 81, 56, 55, 40, 40],
                borderColor: "#6259ca",
                borderWidth: 0,
                backgroundColor: "#6259ca",
            },
            {
                label: "En progreso",
                data: [6, 12, 40, 19, 56, 27, 40, 40, 19, 55, 27, 40],
                borderColor: "#53caed",
                borderWidth: 0,
                backgroundColor: "#53caed",
            },
        ],
    };
    
    return (
        <Card className="custom-card overflow-hidden">
            <Card.Body>
                <div>
                    <h6 className="main-content-label mb-1">Por Rutas</h6>
                    <p className="text-muted  card-sub-title">
                        A continuación se muestra el gráfico de barras
                    </p>
                </div>
                <div className="chartjs-wrapper-demo">
                    <Bar
                        options={BarchartOptions}
                        data={BarchartData}
                        className="barchart"
                        height="85" />
                </div>
            </Card.Body>
        </Card>
    )
}
