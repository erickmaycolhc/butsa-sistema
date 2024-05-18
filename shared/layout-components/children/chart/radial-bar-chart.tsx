"use client"

import ReactApexChart from "react-apexcharts";
import { Card } from "react-bootstrap";
// Need to Import {Importent}
import { Chart, registerables } from "chart.js"
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(...registerables, ChartDataLabels);

export default function RadialBarChart() {
    ////Radialbar
    const Radialbar = {
        // className: "forth circle",
        series: [50],
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                gradientToColors: ["#87D4F9"],
                stops: [0, 100],
            },
        },
        options: {
            colors: ["#6259ca"],
            chart: {
                // height: 350,
                type: "radialBar",
            },
            plotOptions: {
                radialBar: {
                    hollow: {},
                },
            },
            labels: ['Progreso'],
        },
    };

    return (
        <Card className="custom-card overflow-hidden">

            <Card.Header className="border-bottom-0 pb-0">
                <label className="main-content-label mb-2 pt-1">
                    N° TIENDAS POR ENTREGAR
                </label>
                <p className="tx-12 mb-0 text-muted">A continuación se muestra el gráfico de dona</p>
            </Card.Header>
            <Card.Body className="py-0">
                <div id="recentorders" className="">
                    <ReactApexChart
                        options={Radialbar.options}
                        series={Radialbar.series}
                        colors={Radialbar.options.colors}
                        type="radialBar"
                        height={300} />
                </div>
                <div className="row sales-product-infomation pb-0 mb-0 mx-auto wd-100p">
                    <div className="col-md-6 col justify-content-center text-center">
                        <p className="mb-0 d-flex justify-content-center ">
                            <span className="legend bg-primary brround"></span>Completados
                        </p>
                        <h3 className="mb-1 font-weight-bold">100</h3>
                        <div className="d-flex justify-content-center ">
                            <p className="text-muted ">Actualmente</p>
                        </div>
                    </div>
                    <div className="col-md-6 col text-center float-end">
                        <p className="mb-0 d-flex justify-content-center ">
                            <span className="legend bg-light brround"></span>En progreso
                        </p>
                        <h3 className="mb-1 font-weight-bold">26</h3>
                        <div className="d-flex justify-content-center ">
                            <p className="text-muted">Actualmente</p>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}
