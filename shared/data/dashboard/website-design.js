import React from 'react'
import { Bar } from 'react-chartjs-2';
import * as dashboardmain from "./dashboardmain"

const WebsiteDesign = () => {
  return (
    <div>
        <Bar options={dashboardmain.Webdesgining} data={dashboardmain.webdesigning} className="line" />
    </div>
  )
}

export default WebsiteDesign