import React from "react";
import Chart from "chart.js"
import { Doughnut } from "react-chartjs-2";

Chart.defaults.global.legend = false;

const DoughnutChart = () => {

  const data = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [3, 2, 1],
        backgroundColor: ["#65B968", "#F34436", "#C1CBD9"],
        hoverBackgroundColor: ["#65B968", "#F34436", "#C1CBD9"]
      }
    ]
  };

  const options = {
    cutoutPercentage: 65
  }

  return (
    <div>
      <Doughnut data={data} options={options} width={50} height={20}/>
    </div>
  )

}

export default DoughnutChart
