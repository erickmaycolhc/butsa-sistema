import React from 'react'
import ReactApexChart from 'react-apexcharts';
import * as dashboardmain from "./dashboardmain"

const TodayTask = () => {
  return (
    <div>
      <ReactApexChart
        options={dashboardmain.Radialbar.options}
        series={dashboardmain.Radialbar.series}
        colors={dashboardmain.Radialbar.colors}
        type="radialBar"
        height={200} />
    </div>
  )
}

export default TodayTask