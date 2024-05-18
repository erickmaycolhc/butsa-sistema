import React from 'react'
import {Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import * as dashboardmain from "./dashboardmain"

const ProjectBudget = () => {
  return (
    <div>
        <Line options={dashboardmain.linechartoptions} data={dashboardmain.linechart} className="barchart chart-dropshadow2 ht-300 chartjs-render-monitor" height="100" />

    </div>
  )
}

export default ProjectBudget