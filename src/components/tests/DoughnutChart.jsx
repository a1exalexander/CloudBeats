import React from "react";
import Chart from "chart.js";
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
  };

  return (
    <div className="doughnut-chart">
      <div className="doughnut-chart__canvas">
        <Doughnut data={data} options={options} width={100} height={80} />
      </div>
      <ul className="doughnut-chart__list">
        <li className="doughnut-chart__item">
          <span className="doughnut-chart__dot"></span>
          <span className="doughnut-chart__name">Passed:</span>
          <span className="doughnut-chart__value">{`3`}</span>
        </li>
        <li className="doughnut-chart__item">
          <span className="doughnut-chart__dot red"></span>
          <span className="doughnut-chart__name">Failed:</span>
          <span className="doughnut-chart__value">{`2`}</span>
        </li>
        <li className="doughnut-chart__item">
          <span className="doughnut-chart__dot grey"></span>
          <span className="doughnut-chart__name">Partial:</span>
          <span className="doughnut-chart__value">{`1`}</span>
        </li>
      </ul>
    </div>
  );
};

export default DoughnutChart;
